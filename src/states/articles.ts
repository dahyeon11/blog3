import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';
import { ArticlesType } from '../types';
import { axInstance } from '../apis'
import { AxiosResponse } from 'axios'

interface ArticlesState {
    loading: boolean;
    data: ArticlesType[] | null | undefined;
    error: Error | null;
};

const _getArticlesTrigger = atom({
    key: '_getUserInfoTrigger',
    default: 0,
  });

export const articlesState = atom<ArticlesState>({
    key: 'articlesState',
    default: {
        loading: false,
        data: null,
        error: null,
    },
});

export const articlesQuery = selector({
    key: 'articlesSelector',
    get: async ({ get }) => {
        get(_getArticlesTrigger)
 
        const { data } = await axios.get('https://api2.dahyeon.us/articles')
 
        return data;
    },

    set: ({ set }) => {
        set(_getArticlesTrigger, Math.random())
    }
});

export const articleDetailsQuery = selectorFamily({
    key: 'articleDetails',
    get: (articleId: string | undefined) => async ({ get }) => {
        if(!articleId){
            articleId = '1'
        };
        const { data } = await axios.get(`https://api2.dahyeon.us/articles/${articleId}`);
        return data;
    }
})



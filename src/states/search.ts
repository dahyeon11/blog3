import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';
import { ArticlesType } from '../types';

interface SearchResultState {
    loading: boolean;
    data: ArticlesType[] | null | undefined;
    error: Error | null;
}

interface KeywordState {
    keyword: string | number | null | undefined;
}

const _submitTrigger = atom({
    key: '_submitTrigger',
    default: 0,
});

export const searchResultState = atom<SearchResultState>({
    key: 'searchResult',
    default: {
        loading: false,
        data: null,
        error: null,
    }
})

export const keywordState = atom<KeywordState>({
    key: 'keywordState',
    default: {
        keyword: null
    }
})

export const searchArticlesQuery = selector({
    key: 'searchArticles',
    get: async ({ get }) => {
        const keyword = get(keywordState).keyword
        const { data } = await axios.get(`https://api2.dahyeon.us/articles?keyword=${keyword}`);
        return data;
    }
})

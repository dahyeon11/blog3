import { atom } from 'recoil';
import { ArticlesType } from '../types';

interface ArticlesState {
    loading: boolean;
    data: ArticlesType[] | null | undefined;
    error: Error | null;
};

export const articlesState = atom<ArticlesState>({
    key: 'articlesState',
    default: {
        loading: false,
        data: null,
        error: null,
    },
});


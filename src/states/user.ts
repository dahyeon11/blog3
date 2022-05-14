import { atom, selector } from 'recoil';
import { UserType } from '../types'

interface UserState {
    token: string | null;
    info: UserType | null;
    isLogin: boolean;
};

export const userState = atom<UserState>({
    key: 'userState',
    default: {
        token: null,
        info: null,
        isLogin: false,
    }
});
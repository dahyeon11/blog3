declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';


export interface ArticlesType {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    content: string;
    raw_contentstate: JSONValue;
    thumbnail_image: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserType {
    id: number;
    name: string;
    email: string;
    nickname: string;
    profile_image: string;
    role: boolean;
    createdAt: string;
}

export interface CommentsType {
    id: number;
    user_id: number;
    guest_name: string;
    guest_password: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;
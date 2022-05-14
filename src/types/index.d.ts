declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';


export interface ArticlesType {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    content: string;
    editorState: JSON;
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
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';


export interface ArticlesType {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    content: string;
    thumbnail_image: string;
    createdAt: string;
    updatedAt: string;
}
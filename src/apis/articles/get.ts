import { AxiosResponse } from "axios";
import { axiosApi } from "..";
import { ArticlesType } from "../../types";

export const getArticles = async (number?: number) => {
    try {
        const { data }: AxiosResponse<ArticlesType[]> = await axiosApi({
            url: 'articles'
        })
        return data
    } catch (error) {
        console.log(error)
    }
};


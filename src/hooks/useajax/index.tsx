// hooks/usePosts/index.tsx
// use interface
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
//import { Data } from "../../types";

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}
 
interface Response {
  data: Data[];
  loading: boolean;
  error?: Error;
}
 
const useAjax = (): Response => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
 
  useEffect(() => {
    setLoading(true);
    const getAjax = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://test.dahyeon.us/articles"
        );
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    getAjax();
  }, []);
 
  return {data, loading, error};
};
 
export default useAjax;
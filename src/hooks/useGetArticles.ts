import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getArticles } from '../apis/articles/get'
import { articlesState } from '../atoms/articles';

export default function useGetArticles(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const [{loading, data, error}, set] = useRecoilState(articlesState);

  const fetchData = useCallback(async () => {
    set({loading: true, data: null, error: null});
    try {
      const posts = await getArticles();
      set({loading: false, data: posts, error: null});
    } catch (e: any) {
      set({loading: false, data: null, error: e});
    }
  }, [set]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
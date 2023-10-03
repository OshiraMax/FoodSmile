import { useState, useEffect } from 'react';

const useLoading = (fetchDataAsync) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataAsync();
        setData(result);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchDataAsync]);

  return [isLoading, data];
};

export default useLoading;

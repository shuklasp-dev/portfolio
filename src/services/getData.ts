import { useQuery } from 'react-query';
import { Data } from '../Utils/Types';
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const  fetchData = async () => {
  const query = "?populate=*"
  const response = await fetch(BASE_URL+query,{
    method: 'GET',
    headers: {
      Authorization: 'Bearer '+ STRAPI_API_TOKEN
    }
  });
  const data = await response.json()
  return data.data;
}

export const usePortfolioQuery = () => {
    return useQuery<Data>({
        queryFn: fetchData,
        initialData: () => {
            const sessionData = sessionStorage.getItem('data')
            if (sessionData) {
                return JSON.parse(sessionData)
            }
        },
        onSuccess(data) {
            sessionStorage.setItem('data', JSON.stringify(data))
        },
        onError(err){
            console.log(err);
        },
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchOnReconnect: true
    })
}
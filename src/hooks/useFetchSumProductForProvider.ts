import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { SumProductForProvider } from "@/types/sumproductforprovider.types";

const fetchSumProductForProvider = async (): Promise<AxiosResponse<SumProductForProvider[], any>> => {
    return await client.get<SumProductForProvider[]>("/report/sumproductfromprovider");
  };

  export const useFetchSumProductForProvider = (): QueryObserverResult<SumProductForProvider[], any> => {
    return useQuery<SumProductForProvider[], any>({
      queryFn: async () => {
        const { data } = await fetchSumProductForProvider();
        return data;
      },
      queryKey: ["SumProductForProvider"],
    });
  };
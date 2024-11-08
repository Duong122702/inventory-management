import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { Provider } from "@/types/provider.types";

const fetchProviders = async (): Promise<AxiosResponse<Provider[], any>> => {
    return await client.get<Provider[]>("/provider/getall");
  };

export const useFetchProviders = (): QueryObserverResult<Provider[], any> => {
    return useQuery<Provider[], any>({
      queryFn: async () => {
        const { data } = await fetchProviders();
        return data;
      },
      queryKey: ["providers"],
    });
  };
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { SumItem } from "@/types/sumitem.types";

const fetchSumItems = async (): Promise<AxiosResponse<SumItem[], any>> => {
    // const today = new Date()
    // const formattedDate = today.toISOString().split('T')[0]
    // const stringQuery = "report/sumitem?date=" + formattedDate + "&filter=month&sort=desc";
    return await client.get<SumItem[]>("/report/sumitem?date=2024-10-9&filter=month&sort=desc");
  };

  export const useFetchSumItems = (): QueryObserverResult<SumItem[], any> => {
    return useQuery<SumItem[], any>({
      queryFn: async () => {
        const { data } = await fetchSumItems();
        return data;
      },
      queryKey: ["SumItems"],
    });
  };
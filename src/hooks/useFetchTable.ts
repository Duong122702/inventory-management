import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { Table } from "@/types/table.types";

const fetchTables = async (): Promise<AxiosResponse<Table[], any>> => {
    return await client.get<Table[]>("/report/tablestatusoccupied");
  };
  
  export const useFetchTables = (): QueryObserverResult<Table[], any> => {
    return useQuery<Table[], any>({
      queryFn: async () => {
        const { data } = await fetchTables();
        return data;
      },
      queryKey: ["Tables"],
    });
  };
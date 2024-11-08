import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { BillByDate } from "@/types/billbydate";

const fetchBillByDate = async (): Promise<AxiosResponse<BillByDate[], any>> => {
    return await client.get<BillByDate[]>("/report/sumbill?date=2024-10-8&filter=week");
  };

export const useFetchBillByDate = (): QueryObserverResult<BillByDate[], any> => {
    return useQuery<BillByDate[], any>({
        queryFn: async () => {
          const { data } = await fetchBillByDate();
          return data;
        },
        queryKey: ["BillByDate"],
      });
}
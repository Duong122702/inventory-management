import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { Staff } from "@/types/staff.types";

const fetchStaffs = async (): Promise<AxiosResponse<Staff[], any>> => {
    return await client.get<Staff[]>("/staff/getall");
  };
  
  export const useFetchStaffs = (): QueryObserverResult<Staff[], any> => {
    return useQuery<Staff[], any>({
      queryFn: async () => {
        const { data } = await fetchStaffs();
        return data;
      },
      queryKey: ["Staffs"],
    });
  };
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { client } from "../state/client";
import { OrderItem } from "@/types/orderItem.types";

const fetchOrderItems = async (): Promise<AxiosResponse<OrderItem[], any>> => {
    return await client.get<OrderItem[]>("/OrderItem/getall");
  };

export const useFetchOrderItems = (): QueryObserverResult<OrderItem[], any> => {
    return useQuery<OrderItem[], any>({
      queryFn: async () => {
        const { data } = await fetchOrderItems();
        return data;
      },
      queryKey: ["OrderItems"],
    });
  };
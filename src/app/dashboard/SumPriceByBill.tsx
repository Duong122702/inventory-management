"use client"

import { useQuery } from "@tanstack/react-query";
import { getBillByDate } from "../../../api/billbydate.api";

export default function SumPriceByBill() {
    const {
        data: billByDate,
        isFetching,
        isError,
      } = useQuery({
        queryKey: ["BillByDate"],
        queryFn: getBillByDate,
      });

}
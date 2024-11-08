"use client"

import { useQuery } from "@tanstack/react-query";
import { getTopItem } from "../../../api/topitem.api";

export default function TopItem() {
    const {
        data: topItem,
        isFetching,
        isError,
      } = useQuery({
        queryKey: ["TopItem"],
        queryFn: getTopItem,
      });

      return (
        <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md flex flex-col justify-between rounded-2xl" >
            {isFetching ? (
                <div className='m-5'>Loading...</div>  
            ) : (
                <>
                    <div className="flex jusfify-beetween items-center mb-2 px-5 pt-4">
                        <h2 className="font-semibold text-lg text-gray-700">Best Seller</h2>
                    </div>
                    {topItem?.map((item) => (
                        <div className="flex mb-6 items-center justify-around gap-4 px-5">
                            <div className="flex-1">
                                <div className="flex items-center justify-between my-4">
                                    <span className="text-gray-500">{item.name}</span>
                                    <span className="font-bold text-gray-800">{item.total_quantity_sold}</span>
                                    <span className="text-gray-500">{item.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
      )
}
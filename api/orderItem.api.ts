import api from "./api"
import { IOrderItemResponse } from "../interfaces/orderItem.interface"

export const getAllOrderItemsApi = async () => {
    const res = await api.get<IOrderItemResponse[]>("/orderitem/getall");
    return res.data;
}
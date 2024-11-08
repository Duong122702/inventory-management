import { IProviderResponse } from "../interfaces/provider.interface";
import api from "./api"

export const getAllProvidersApi = async () => {
    const res = await api.get<IProviderResponse[]>("/provider/getall")
    return res.data;
}
import api from "./api"
import { ISumProductForProvider } from "../interfaces/sumproductforprovider.interface"

export const getSumProductForProviderApi = async () => {
    const res = await api.get<ISumProductForProvider[]>("/report/sumproductfromprovider")
    return res.data
}


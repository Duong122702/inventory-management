import {ITable} from "../interfaces/table.interface"
import api from "./api"

export const getOccupiedTablesApi = async () => {
    const res = await api.get<ITable[]>("/report/tablestatusoccupied");
    return res.data;
};
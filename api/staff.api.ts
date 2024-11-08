import {IStaffResponse} from "../interfaces/staff.interface"
import api from "./api"

export const getAllStaff = async () => {
    const res = await api.get<IStaffResponse[]>("/staff/getall");
    return res.data;
};

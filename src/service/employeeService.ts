import type { IEmployee } from "@/models/IEmployee";
import { get } from "./serviceBase";
import type { IVendreResponse } from "@/models/IVendreResponse";

export const getEmployee = async (page: number): Promise<IEmployee[]> => {
  const url = "https://reqres.in/api/users?page=" + page;
  const data = await get<IVendreResponse>(url);
  return data.data;
};

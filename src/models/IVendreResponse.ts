import type { IEmployee } from "./IEmployee";

export interface IVendreResponse {
  page: number;
  data: IEmployee[];
}

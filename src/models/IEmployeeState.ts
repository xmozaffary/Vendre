import type { IEmployee } from "./IEmployee";

export interface IEmployeeState {
  employees: IEmployee[];
  pageNumber: number;
  pageText: string;
}

import type { IEmployee } from "./IEmployee";

export interface IEmployeeState {
  employees: IEmployee[];
  pageNumber: number;
  buttonText: string;
}

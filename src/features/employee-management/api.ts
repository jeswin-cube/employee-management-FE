import { get, put } from "../../common";
import { postProcess } from "../../common/api/post-process";
import { Employee } from "./types";

export interface GetOrganizationData {
  message: string;
  data: Employee[];
}

export const getOrganizationData = async () => {
  return await get<GetOrganizationData, {}>("/employee").then(postProcess);
};

export const updateEmployeeManager = async (employeeId: number, managerId: number) => {
  return await put<{ message: string }, { manager_id: number }>(`/employee/${employeeId}`, {
    manager_id: managerId,
  }).then(postProcess);
};

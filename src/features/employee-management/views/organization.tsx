import React from "react";
import EmployeeNode from "../components/employee-node";
import { useGetOrganizationData } from "../queries";
import { Employee } from "../types";

const OrganizationChart: React.FC = () => {
  const { data: employees, isLoading: employeesDataLoading } = useGetOrganizationData();

  const buildHierarchy = (employees: Employee[], managerId: number | null): React.ReactNode[] => {
    const children: React.ReactNode[] = [];
    employees.forEach((employee) => {
      if (employee.manager === managerId) {
        children.push(
          <EmployeeNode key={employee.id} employee={employee}>
            {buildHierarchy(employees, employee.id)}
          </EmployeeNode>,
        );
      }
    });
    return children;
  };

  return (
    <div className={"ml-[300px] mb-[80px]"}>
      {!!employees && !employeesDataLoading ? buildHierarchy(employees, null) : null}
    </div>
  );
};

export default OrganizationChart;

import React from "react";
import EmployeeNode from "../components/employee-node";
import { useGetOrganizationData } from "../queries";
import { Employee } from "../types";
import { Tree, TreeNode } from "react-organizational-chart";

const OrganizationChart: React.FC = () => {
  const { data: employees, isLoading: employeesDataLoading } = useGetOrganizationData();

  const buildHierarchy = (employees: Employee[], managerId: number | null): React.ReactNode[] => {
    const children: React.ReactNode[] = [];
    employees.forEach((employee) => {
      if (employee.manager === managerId && managerId === null) {
        children.push(
          <Tree key={employee.id} label={<EmployeeNode employee={employee} />}>
            {buildHierarchy(employees, employee.id)}
          </Tree>,
        );
      } else if (employee.manager === managerId) {
        children.push(
          <TreeNode key={employee.id} label={<EmployeeNode employee={employee} />}>
            {buildHierarchy(employees, employee.id)}
          </TreeNode>,
        );
      }
    });
    return children;
  };

  return (
    <div className={"mx-[100px] mb-[80px]"}>
      {!!employees && !employeesDataLoading ? buildHierarchy(employees, null) : null}
    </div>
  );
};

export default OrganizationChart;

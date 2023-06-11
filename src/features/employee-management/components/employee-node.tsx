import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Employee } from "../types";
import { useUpdateEmployeeManager } from "../mutations";
import classNames from "classnames";
import { ApiError } from "../../../common";

interface EmployeeNodeProps {
  employee: Employee;
  children?: ReactNode[] | null;
}

const EmployeeNode: React.FC<EmployeeNodeProps> = ({ employee, children }) => {
  const dragDropRef = useRef(null);

  const { mutate: updateEmployeeManager } = useUpdateEmployeeManager();

  const [errorText, setErrorText] = useState("");

  const [{ isDragging }, drag] = useDrag({
    type: "employee",
    item: { type: "employee", id: employee.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "employee",
    drop: (item: { type: string; id: number }) => {
      handleEmployeeMove(item.id, employee.id); // Move the employee to the top level
    },
  });

  const handleEmployeeMove = (employeeId: number, newManagerId?: number) => {
    if (employeeId !== undefined && newManagerId !== undefined && employeeId !== newManagerId) {
      updateEmployeeManager(
        { employeeId: employeeId, managerId: newManagerId },
        {
          onError: (e) => {
            if (e instanceof ApiError && e.errorInfo.status === 406) {
              setErrorText("Couldn't update the manager details");
            } else {
              setErrorText("Uh-oh! Something went wrong. Please try again.");
            }
          },
        },
      );
    }
  };

  drag(drop(dragDropRef));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorText("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div
        ref={dragDropRef}
        onDragOver={(event) => event.preventDefault()}
        className={classNames(
          "shadow-lg w-fit p-[12px] rounded-[8px] mb-[12px]",
          isDragging ? "opacity-50" : "opacity-100",
        )}>
        <p>{employee.name}</p>
        <p>{employee.team.name}</p>
        <p>{employee.designation.name}</p>
      </div>
      {!!children ? ( // Check if children exist
        <div style={{ marginLeft: "60px" }}>{children}</div>
      ) : null}
      {errorText !== "" ? (
        <div className={"fixed top-[10px] left-[300px] bg-red-200 rounded-[8px] p-[8px]"}>{errorText}</div>
      ) : null}
    </div>
  );
};

export default EmployeeNode;

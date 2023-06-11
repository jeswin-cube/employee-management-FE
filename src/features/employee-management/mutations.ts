import { useMutation } from "../../common/api/use-mutation";
import { updateEmployeeManager } from "./api";
import { useQueryClient } from "react-query";

export const useUpdateEmployeeManager = () => {
  const queryClient = useQueryClient();
  return useMutation<{ message: string }, { employeeId: number; managerId: number }>(
    "updateManager",
    async ({ employeeId, managerId }) => await updateEmployeeManager(employeeId, managerId),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries("organizationData");
      },
    },
  );
};

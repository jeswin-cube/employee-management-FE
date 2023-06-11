import { useQuery } from "../../common";
import { getOrganizationData } from "./api";
import { Employee } from "./types";

export const useGetOrganizationData = () => {
  return useQuery<Employee[]>({
    queryKey: ["organizationData"],
    queryFn: async () => await getOrganizationData().then((res) => res.data),
    options: {},
  });
};

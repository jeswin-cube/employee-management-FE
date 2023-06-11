export interface Employee {
  id: number;
  name: string;
  manager: number;
  team: {
    id: number;
    name: string;
    description: string;
  };
  designation: {
    id: number;
    name: string;
    description: string;
  };
}

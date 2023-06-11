import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import OrganizationChart from "../features/employee-management/views/organization";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App font-plex overflow-x-hidden">
        <DndProvider backend={HTML5Backend}>
          <h1 className={"text-[28px] text-center my-[24px]"}>Organization Chart</h1>
          <OrganizationChart />
        </DndProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;

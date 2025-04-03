import { Sidebar } from "../../modules/sidebar/components/Sidebar";

export const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>Home page</div>
    </div>
  );
};

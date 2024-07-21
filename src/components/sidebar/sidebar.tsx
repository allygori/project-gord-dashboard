import Menu from "./menu";
import { MENUS } from "./menus.constant";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <aside
      className="w-80 min-h-screen max-h-screen bg-white drop-shadow-md"
      style={{
        boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
      }}
    >
      <header className="h-16 w-full flex items-center justify-start text-base font-medium bg-brand-200 text-brand-100 p-4">
        TEST HEADER
      </header>
      <main className="p-4">
        <Menu items={MENUS} />
      </main>
    </aside>
  );
};

export default Sidebar;

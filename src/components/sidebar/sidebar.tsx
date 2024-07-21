import clsx from "clsx";
import Menu from "./menu";
import { MENUS } from "./menus.constant";

type Props = {
  className?: string;
};

const Sidebar = ({ className = "" }: Props) => {
  return (
    <aside
      className={clsx(
        "w-[265px] min-h-full h-full bg-white drop-shadow-xl",
        className
      )}
      style={{
        // boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
        // boxShadow: "5px 3px 38px 11px #000000",
        borderRight: "1px solid rgb(234, 234, 239)",
      }}
    >
      <header className="h-16 w-full flex items-center justify-start text-2xl font-medium bg-brand-100 text-white px-4">
        IKA Gorden
      </header>
      <main className="p-4 h-full min-h-screen">
        <Menu items={MENUS} />
      </main>
    </aside>
  );
};

export default Sidebar;

import clsx from "clsx";
import IconBurger from "@/components/svgs/burger";

type Props = {
  className?: string;
};

const Header = ({ className = "" }: Props) => {
  return (
    <header
      className={clsx(
        "flex flex-row items-center justify-start",
        className,
        "h-16 w-full bg-brand-200 p-4"
      )}
    >
      <button type="button" className="p-1 border border-transparent">
        <IconBurger />
      </button>
      Header
    </header>
  );
};

export default Header;

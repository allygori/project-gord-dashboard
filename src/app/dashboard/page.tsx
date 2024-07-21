import clsx from "clsx";

type Props = {
  className?: string;
};

const DashboardPage = ({ className = "" }: Props) => {
  return <section className={clsx(className)}>DashboardPage</section>;
};

export default DashboardPage;

import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />
      <section className="w-full">
        <Header />
        <main className="p-8">{children}</main>
      </section>
    </main>
  );
};

export default DashboardLayout;

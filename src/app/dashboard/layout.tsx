import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="relative flex flex-row w-full h-full min-h-screen">
      <Sidebar className="shrink-0" />
      <section className="w-full grow	flex flex-col">
        <Header />
        <main className="p-8">{children}</main>
      </section>
    </main>
  );
};

export default DashboardLayout;

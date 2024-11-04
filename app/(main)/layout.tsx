import Header from "./_components/header";
import SideBar from "./_components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="w-full h-[2000px] bg-slate-300 p-4">{children}</div>
      </div>
    </>
  );
}

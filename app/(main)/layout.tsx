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
        {children}
      </div>
    </>
  );
}

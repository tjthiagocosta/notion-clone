import NavBar from "./_components/NavBar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen dark:bg-[#1f1f1f]">
      <NavBar />
      <main className="h-screen pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;

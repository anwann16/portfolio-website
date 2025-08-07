import Tabs from "@/components/(dashboard)/Tabs";
import Navbar from "@/components/(dashboard)/Navbar";
import StatsCard from "@/components/(dashboard)/StatsCard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen min-h-screen bg-gray-50">
      <Navbar />
      <StatsCard />
      <main className="bg-white rounded-lg shadow mx-5">
        <Tabs />
        {children}
      </main>
    </section>
  );
}

import DashboardSummaryCards from "../../components/dashboard/DashboardSummaryCards";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <DashboardSummaryCards />
    </div>
  );
}

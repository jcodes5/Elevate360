import { PlaceholderContent } from '@/components/shared/PlaceholderContent';
import { LayoutDashboard } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <PlaceholderContent
        title="Welcome to Your Dashboard"
        description="Key metrics and insights will be displayed here. Role-based views and customization options are planned for future updates."
        icon={<LayoutDashboard size={48} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-2">Active Leads</h3>
            <p className="text-3xl font-bold text-foreground">125</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-2">Deals Closed (Month)</h3>
            <p className="text-3xl font-bold text-foreground">15</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-2">Upcoming Appointments</h3>
            <p className="text-3xl font-bold text-foreground">8</p>
          </div>
        </div>
      </PlaceholderContent>
    </div>
  );
}

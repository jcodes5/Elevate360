import { PlaceholderContent } from '@/components/shared/PlaceholderContent';
import { Network } from 'lucide-react';

export default function FunnelsPage() {
  return (
    <div className="container mx-auto py-8 h-full">
      <PlaceholderContent
        title="Funnel & Landing Page Builder"
        description="Design high-converting sales funnels and landing pages with an intuitive drag-and-drop interface. Templates and analytics are coming soon!"
        icon={<Network size={48} />}
      />
    </div>
  );
}

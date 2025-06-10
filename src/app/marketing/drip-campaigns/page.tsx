import { PlaceholderContent } from '@/components/shared/PlaceholderContent';
import { Workflow } from 'lucide-react';

export default function DripCampaignsPage() {
  return (
    <div className="container mx-auto py-8 h-full">
      <PlaceholderContent
        title="Drip Campaign Builder"
        description="Create automated marketing sequences with our upcoming drag-and-drop builder. Visually design workflows for emails, SMS, and WhatsApp messages based on user actions and timelines."
        icon={<Workflow size={48} />}
      />
    </div>
  );
}

import { PlaceholderContent } from '@/components/shared/PlaceholderContent';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mail, PlusCircle, LineChart, Users, CheckCircle, Percent } from 'lucide-react';

const campaigns = [
  { id: '1', name: 'Festive Season Promo', type: 'Email', status: 'Active', sent: 12050, openRate: '25.5%', clickRate: '5.2%' },
  { id: '2', name: 'New Product Launch (SMS)', type: 'SMS', status: 'Completed', sent: 5000, openRate: 'N/A', clickRate: '10.1%' },
  { id: '3', name: 'WhatsApp Onboarding Flow', type: 'WhatsApp', status: 'Draft', sent: 0, openRate: 'N/A', clickRate: 'N/A' },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-headline text-primary flex items-center">
          <Mail size={32} className="mr-2" /> Marketing Campaigns
        </h1>
        <Button>
          <PlusCircle size={18} className="mr-2" />
          New Campaign
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Overview</CardTitle>
          <CardDescription>Manage and track your email, SMS, and WhatsApp campaigns.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead><Users className="inline mr-1 h-4 w-4" />Sent</TableHead>
                <TableHead><Percent className="inline mr-1 h-4 w-4" />Open Rate</TableHead>
                <TableHead><LineChart className="inline mr-1 h-4 w-4" />Click Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs rounded-full ${campaign.status === 'Active' ? 'bg-green-100 text-green-700' : campaign.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {campaign.status}
                    </span>
                  </TableCell>
                  <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                  <TableCell>{campaign.openRate}</TableCell>
                  <TableCell>{campaign.clickRate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <PlaceholderContent
        title="Advanced Campaign Management"
        description="Detailed analytics, A/B testing, and segmentation features are under development."
        icon={<Mail size={48} />}
        className="mt-12"
      />
    </div>
  );
}

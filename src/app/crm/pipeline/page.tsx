import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, BarChart3 } from 'lucide-react';

const pipelineStages = [
  { 
    id: 'lead', 
    name: 'New Leads', 
    deals: [
      { id: 'deal1', title: 'Sunrise Apartments Pitch', value: '₦15,000,000', contact: 'Adaobi Eze' },
      { id: 'deal2', title: 'MegaCorp Software Upgrade', value: '₦45,000,000', contact: 'Babatunde Aliyu' },
    ]
  },
  { 
    id: 'contacted', 
    name: 'Contacted',
    deals: [
      { id: 'deal3', title: 'Lekki Gardens Proposal', value: '₦22,000,000', contact: 'Funke Adebayo' },
    ]
  },
  { 
    id: 'proposal', 
    name: 'Proposal Sent',
    deals: [
      { id: 'deal4', title: 'Innovatech Consulting', value: '₦8,500,000', contact: 'Musa Ibrahim' },
    ]
  },
  { 
    id: 'negotiation', 
    name: 'Negotiation',
    deals: []
  },
  { 
    id: 'won', 
    name: 'Won',
    deals: [
      { id: 'deal5', title: 'Global Foods Partnership', value: '₦30,000,000', contact: 'Ngozi Okafor' },
    ]
  },
];

export default function PipelinePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-headline text-primary flex items-center">
          <BarChart3 size={32} className="mr-2" /> Sales Pipeline
        </h1>
        <Button>
          <PlusCircle size={18} className="mr-2" />
          Add Deal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start">
        {pipelineStages.map((stage) => (
          <Card key={stage.id} className="bg-background/50 min-h-[400px] flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary">{stage.name} ({stage.deals.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-1 overflow-y-auto p-4">
              {stage.deals.length > 0 ? stage.deals.map((deal) => (
                <Card key={deal.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-3">
                    <CardTitle className="text-base">{deal.title}</CardTitle>
                    <CardDescription>{deal.contact}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="font-semibold text-primary">{deal.value}</p>
                  </CardContent>
                </Card>
              )) : (
                <p className="text-sm text-muted-foreground text-center py-4">No deals in this stage.</p>
              )}
              <p className="text-xs text-muted-foreground text-center pt-4">Drag & drop functionality coming soon.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

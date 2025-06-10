import { PlaceholderContent } from '@/components/shared/PlaceholderContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, PlusCircle, Search } from 'lucide-react';
import Image from 'next/image';

const contacts = [
  { id: '1', name: 'Aisha Bello', email: 'aisha.bello@example.com', phone: '08012345678', company: 'Tech Solutions Ltd.', avatar: 'https://placehold.co/40x40.png?text=AB' },
  { id: '2', name: 'Chinedu Okoro', email: 'chinedu.okoro@example.com', phone: '08098765432', company: 'Global Innovations', avatar: 'https://placehold.co/40x40.png?text=CO' },
  { id: '3', name: 'Fatima Usman', email: 'fatima.usman@example.com', phone: '08055554444', company: 'Digital Dreams Inc.', avatar: 'https://placehold.co/40x40.png?text=FU' },
];

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-headline text-primary">Contacts</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search contacts..." className="pl-8 sm:w-[300px]" />
          </div>
          <Button>
            <PlusCircle size={18} className="mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden lg:table-cell">Phone</TableHead>
                <TableHead className="hidden sm:table-cell">Company</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image src={contact.avatar} alt={contact.name} data-ai-hint="person avatar" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">{contact.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{contact.email}</TableCell>
                  <TableCell className="hidden lg:table-cell">{contact.phone}</TableCell>
                  <TableCell className="hidden sm:table-cell">{contact.company}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <PlaceholderContent
        title="Detailed Contact Profile & Interaction Timeline"
        description="Selecting a contact will display their detailed profile, interaction history, and notes here. This functionality is currently under development."
        icon={<Users size={48} />}
        className="mt-12"
      />
    </div>
  );
}

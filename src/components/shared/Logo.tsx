import { Building2 } from 'lucide-react'; 

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Building2 className="h-7 w-7" />
      <span className="text-xl font-bold font-headline">Elevate360</span>
    </div>
  );
}

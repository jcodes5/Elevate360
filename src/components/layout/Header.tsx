import { SidebarTrigger } from '@/components/ui/sidebar';
import { Logo } from '@/components/shared/Logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6 shadow-sm">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="ml-auto flex items-center gap-4">
        {/* Placeholder for search or other actions */}
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="user avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

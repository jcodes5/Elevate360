'use client';

import type React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader as ShadSidebarHeader,
  SidebarFooter as ShadSidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import Header from './Header';
import SidebarNav from './SidebarNav';
import { Logo } from '@/components/shared/Logo';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const { open, setOpen, isMobile } = useSidebar();

  return (
    <>
      <Sidebar
        variant="sidebar" // "sidebar", "floating", "inset"
        collapsible="icon" // "offcanvas", "icon", "none"
        className="border-r border-sidebar-border"
      >
        <ShadSidebarHeader className="p-4">
           <Logo />
        </ShadSidebarHeader>
        <SidebarContent className="p-2">
          <SidebarNav />
        </SidebarContent>
        <ShadSidebarFooter className="p-4">
           <Button variant="ghost" className="w-full justify-start gap-2">
             <LogOut size={18} />
             <span className={open || isMobile ? "inline" : "hidden group-data-[collapsible=icon]:hidden"}>Logout</span>
           </Button>
        </ShadSidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </>
  );
}

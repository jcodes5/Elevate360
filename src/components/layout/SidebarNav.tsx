'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Megaphone,
  Filter,
  CalendarDays,
  Sparkles,
  Settings,
  Network,
  Mail,
  History,
  BarChart3,
  Workflow,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  {
    label: 'CRM',
    icon: Users,
    subItems: [
      { href: '/crm/contacts', label: 'Contacts', icon: Users },
      { href: '/crm/pipeline', label: 'Pipeline', icon: BarChart3 },
      // { href: '/crm/timeline', label: 'Interaction Timeline', icon: History }, // Potentially part of contact profile
    ],
  },
  {
    label: 'Marketing',
    icon: Megaphone,
    subItems: [
      { href: '/marketing/campaigns', label: 'Campaigns', icon: Mail },
      { href: '/marketing/drip-campaigns', label: 'Drip Campaigns', icon: Workflow },
    ],
  },
  { href: '/funnels', label: 'Funnels', icon: Network },
  { href: '/appointments', label: 'Appointments', icon: CalendarDays },
  { href: '/ai-content', label: 'AI Content', icon: Sparkles },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          {item.subItems ? (
            <>
              <SidebarMenuButton
                isActive={item.subItems.some(sub => pathname.startsWith(sub.href))}
                className="justify-between"
                // Implement disclosure pattern for submenus if needed
              >
                <div className="flex items-center gap-2">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {item.subItems.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.href}>
                    <Link href={subItem.href} passHref legacyBehavior>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === subItem.href || pathname.startsWith(subItem.href + '/')}
                      >
                        <a>
                          {subItem.icon && <subItem.icon size={16} className="mr-2" />}
                          <span>{subItem.label}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </Link>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </>
          ) : (
            <Link href={item.href!} passHref legacyBehavior>
              <SidebarMenuButton 
                asChild 
                isActive={pathname === item.href || pathname.startsWith(item.href! + '/') }
                tooltip={item.label}
              >
                <a>
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </Link>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

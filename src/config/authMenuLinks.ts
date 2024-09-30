import {
  FilePlus2,
  LayoutGrid,
  ReceiptText,
  Settings,
  User,
} from 'lucide-react';

import type TabType from '@/types/TabType';

const authMenu: TabType[] = [
  { name: 'Dashboard', url: '/dashboard', icon: LayoutGrid },
  { name: 'Invite', url: '/dashboard/invites', icon: FilePlus2 },
  { name: 'My Profile', url: '/dashboard/profile', icon: User },
  { name: 'Settings', url: '/dashboard/settings', icon: Settings },
  { name: 'Billing', url: '/dashboard/billing', icon: ReceiptText },
];

export default authMenu;

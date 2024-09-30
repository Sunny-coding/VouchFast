import { LayoutGrid, ReceiptText, Settings, User } from 'lucide-react';

import type TabType from '@/types/TabType';

const authMenu: TabType[] = [
  { name: 'Dashboard', url: '/dashboard', icon: LayoutGrid },
  { name: 'Profile', url: '/dashboard/profile', icon: User },
  { name: 'Settings', url: '/dashboard/settings', icon: Settings },
  {
    name: 'Billing',
    url: '/dashboard/billing',
    icon: ReceiptText,
  },
];

export default authMenu;

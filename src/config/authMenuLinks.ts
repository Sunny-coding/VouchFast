import {
  FilePlus2,
  LayoutGrid,
  LockKeyholeOpen,
  ReceiptText,
  Settings,
  User,
} from 'lucide-react';

const authMenu = [
  { name: 'Dashboard', url: '/dashboard', icon: LayoutGrid },
  { name: 'Lists', url: '/dashboard/lists', icon: FilePlus2 },
  { name: 'API', url: '/dashboard/api', icon: LockKeyholeOpen },
  { name: 'My Profile', url: '/dashboard/profile', icon: User },
  { name: 'Settings', url: '/dashboard/settings', icon: Settings },
  { name: 'Billing', url: '/dashboard/billing', icon: ReceiptText },
];

export default authMenu;

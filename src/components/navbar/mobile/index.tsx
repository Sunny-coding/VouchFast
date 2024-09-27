'use client';

import { useEffect, useState } from 'react';

import MobileNav from './MobileNav';

import { Menu, X } from 'lucide-react';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const Icon = isOpen ? X : Menu;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className='lg:hidden'>
      <Icon onClick={toggle} size={35} />
      {isOpen && <MobileNav />}
    </div>
  );
};

export default Index;

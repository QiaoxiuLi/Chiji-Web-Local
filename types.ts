import React from 'react';

export interface ServiceItem {
  title: React.ReactNode;
  modalTitle?: React.ReactNode;
  description: string;
  price: React.ReactNode;
  modalPrice?: React.ReactNode;
  icon: React.ElementType;
  details?: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}
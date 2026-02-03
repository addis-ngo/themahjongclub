import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MahjongTileData {
  number: number;
  character: string;
  pinyin: string;
  pronunciation: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  about: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface IdentityCard {
  id: string;
  title: string;
  description: string;
  color: string; // Tailwind class
}
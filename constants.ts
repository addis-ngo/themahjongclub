import { Swords, MessageCircle, Scroll, Wind } from 'lucide-react';
import { FAQItem, MahjongTileData, NavItem, TeamMember, GalleryItem, IdentityCard } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Learn', href: '#learn' },
  { label: 'FAQ', href: '#faq' },
];

export const MAHJONG_NUMBERS: MahjongTileData[] = [
  { number: 1, character: '一', pinyin: 'yī', pronunciation: 'ee' },
  { number: 2, character: '二', pinyin: 'èr', pronunciation: 'ar' },
  { number: 3, character: '三', pinyin: 'sān', pronunciation: 'san' },
  { number: 4, character: '四', pinyin: 'sì', pronunciation: 'suh' },
  { number: 5, character: '五', pinyin: 'wǔ', pronunciation: 'woo' },
  { number: 6, character: '六', pinyin: 'liù', pronunciation: 'leo' },
  { number: 7, character: '七', pinyin: 'qī', pronunciation: 'chee' },
  { number: 8, character: '八', pinyin: 'bā', pronunciation: 'bah' },
  { number: 9, character: '九', pinyin: 'jiǔ', pronunciation: 'jee-oh' },
  { number: 10, character: '十', pinyin: 'shí', pronunciation: 'shrr' },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need to know how to play?",
    answer: "Not at all! We welcome complete beginners. We have teaching tables at every meeting where we walk you through the rules, tiles, and basic concepts."
  },
  {
    question: "Is this gambling?",
    answer: "No. We play only for the thrill of it. The club is strictly a social environment for enjoying the game of Mahjong. Gambling is prohibited."
  },
  {
    question: "Do I need to bring my own set?",
    answer: "Nope! The club provides Mahjong sets. However, you're free to bring one to play with friends!"
  },
  {
    question: "Can I bring food?",
    answer: "Yes, but we ask that you keep food away from the Mahjong tables to keep the tiles and mats clean."
  },
];

export const IDENTITY_CARDS: IdentityCard[] = [
  {
    id: 'thegame',
    title: 'Play The Game',
    description: "Enjoy the game itself by playing mahjong in a fun, relaxed setting that’s perfect for unwinding and having a good time. Whether you’re competitive or casual, it’s a rewarding way to challenge yourself and enjoy the flow of the game.",
    color: 'bg-mahjongRed'
  },
  {
    id: 'learn',
    title: 'Larn Chinese',
    description: "Learn new characters and build a foundation in Chinese through mahjong, as the game regularly exposes players to commonly used symbols and terminology. Repeated play reinforces recognition and understanding, making learning Chinese feel natural and engaging.",
    color: 'bg-mahjongGold'
  },
  {
    id: 'friends',
    title: 'Make New Friends',
    description: "Make new friends in this club by bonding over a shared love of mahjong in a relaxed, friendly environment.",
    color: 'bg-neutral-600'
  },
  {
    id: 'mind',
    title: 'Sharpen The Mind',
    description: "Mahjong sharpens mental skills by improving memory, pattern recognition, and strategic thinking as players track tiles and anticipate opponents’ moves. It also enhances hand–eye coordination through precise tile handling and quick, accurate visual matching.",
    color: 'bg-neutral-900'
  }
];

/* 
  ---------------------------------------------------------
  📸 HOW TO USE YOUR IMAGES
  ---------------------------------------------------------
  1. I have created the 'public/images' folder for you.
  2. Drag your photo (e.g., 'alex.jpg') into that folder.
  3. Update the 'image' field below to: "images/alex.jpg"
*/

// General site images
export const IMAGES = {
  // Replace with "images/logo.png"
  logo: "images/logo.png",
  
  // Replace with "images/about.jpg"
  aboutSection: "images/about.jpg"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Addis Ngo",
    role: "President",
    about: "Founded the club to share the joy of Mahjong. Favorite hand: Thirteen Orphans.",
    // CHANGE THIS after dragging your photo to public/images/
    // image: "images/addis.jpg"
    image: "images/addis.jpg"
  },
  {
    id: 2,
    name: "Albert Wong",
    role: "Vice President",
    about: "Hey everyone, my name is Albert, and I’m a sophomore majoring in financial planning and wealth management. I enjoy playing Mahjong with friends and look forward to more people joining since it takes at least four to start a game.",
    image: "https://placehold.co/400x400/222222/FFFFFF?text=Albert"
  },
  {
    id: 3,
    name: "Alan Kershteyn",
    role: "Secretary",
    about: "tbd",
    image: "images/alan.jpg"
  },
  {
    id: 4,
    name: "Châu Phạm",
    role: "Treasurer",
    about: "Hello everyone! I’m Chau Pham, a junior majoring in Finance at GMU. In my free time, I enjoy baking and collecting soft toys.",
    image: "https://placehold.co/400x400/222222/FFFFFF?text=Châu"
  },
  {
    id: 5,
    name: "Jason Guo",
    role: "Marketing Manager",
    about: "Hi, I’m Jason Guo, a junior at GMU majoring in business accounting and living in Centreville, VA. I enjoy drawing, staying organized, and adding information.",
    image: "https://placehold.co/400x400/222222/FFFFFF?text=Jason"
  },
  {
    id: 6,
    name: "Owen Chan",
    role: "Lead Teacher",
    about: "Hello, I’m Owen I’m from Hong Kong. I play mahjong with my family from time to time, my parents are from Fuzhou China so I grew up playing Fuzhou version.",
    image: "https://placehold.co/400x400/222222/FFFFFF?text=Owen"
  },
  {
    id: 7,
    name: "Henry Moore",
    role: "Assistant Teacher",
    about: "Hello, my name is Henry Moore, and I’m a senior majoring in bioengineering with the goal of pursuing a career in medicine. I currently serve as treasurer of the badminton club, volunteer as an EMT for Fairfax County, and am a brother of Kappa Sigma.",
    image: "https://placehold.co/400x400/222222/FFFFFF?text=Henry"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { src: "https://placehold.co/600x600/1a1a1a/ffffff?text=Club+Event", alt: "Pic 1" },
  { src: "https://placehold.co/800x600/1a1a1a/ffffff?text=Mahjong+Game", alt: "Pic 2" },
  { src: "https://placehold.co/600x800/1a1a1a/ffffff?text=Social+Gathering", alt: "Pic 3" },
  { src: "https://placehold.co/800x800/1a1a1a/ffffff?text=Tiles", alt: "Pic 4" },
  { src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Tournament", alt: "Pic 5" },
  { src: "https://placehold.co/400x600/1a1a1a/ffffff?text=Workshop", alt: "Pic 6" }
];

export const LINKS = {
  signup: "https://forms.gle/F7JFqu88CqTSm6Kq9",
  instagram: "https://www.instagram.com/the.mahjong.club/",
  discord: "https://www.instagram.com/the.mahjong.club/"
};

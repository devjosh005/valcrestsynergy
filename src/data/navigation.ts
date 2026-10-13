import type { NavItem } from '../types/content';

export const primaryNav: NavItem[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Services', to: '/services', hasDropdown: true },
{ label: 'Projects', to: '/projects' },
{ label: 'HSE', to: '/hse' },
{ label: 'Contact', to: '/contact' }];


export const footerQuickLinks: NavItem[] = [
{ label: 'About Us', to: '/about' },
{ label: 'Our Services', to: '/services' },
{ label: 'Projects', to: '/projects' },
{ label: 'Health, Safety & Environment', to: '/hse' },
{ label: 'Contact Us', to: '/contact' }];

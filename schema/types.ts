// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  dressCode: string;
  eventDate: { time: string };
  eventImage: { url: string; alt: string; width: number; height: number };
  eventOrder: number;
  eventTime: string;
  path: string;
  title: string;
  venueAddress: string;
  venueName: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroImage: { url: string; alt: string; width: number; height: number };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeRsvpInfo {
  id: string;
  body: { value: string; summary?: string };
  contactInfo: string;
  deadline: string;
  infoCategory: string;
  infoImage: { url: string; alt: string; width: number; height: number };
  infoOrder: number;
  path: string;
  title: string;
}

export interface NodeStoryChapter {
  id: string;
  body: { value: string; summary?: string };
  chapterDate: string;
  chapterImage: { url: string; alt: string; width: number; height: number };
  chapterLocation: string;
  chapterOrder: number;
  path: string;
  title: string;
}

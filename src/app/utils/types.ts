// src/app/utils/types.ts

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

export interface Category {
  _id?: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface Post {
  excerpt: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: Author;
  mainImage?: SanityImageSource;
  categories?: Category[];
  publishedAt?: string;
  body?: PortableTextBlock;
  keywords?: string;
  featured?: boolean;
  views?: number;
  _updatedAt?: string;
}

export interface Author {
  _id?: string;
  name: string;
}

export type Meeting = {
  id: string // e.g., "MOM-2024-001"
  datetime: string // ISO format timestamp
  agenda: string // Markdown text
  pdf_url?: string // Signed or public URL
  created_by: string // UUID of user
  created_by_name?: string // Optional - resolved name
  created_at: string
  updated_at: string
}

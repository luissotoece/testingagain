import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * API base URL configuration.  
 * Set NEXT_PUBLIC_API_URL in your .env.local if needed.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Helper function to build full API endpoint URLs.
 */
export const getEndpoint = (path: string) => `${API_BASE_URL}${path}`;
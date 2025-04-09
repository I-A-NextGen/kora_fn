import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initialNotifications = [
  {
    id: 1,
    user: "don aime",
    action: "two credits remain",
    timestamp: "15 minutes ago",
    unread: true,
  },
];

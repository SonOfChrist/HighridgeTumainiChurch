import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, isPast, isFuture } from "date-fns";

// 1-2. Tailwind CSS handling
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// FORMATTING

// 3. Format Date
export const formatDate = (dateString: string) => {
  if (!dateString) return "";
  return format(new Date(dateString), "MMM dd, yyyy");
};

// 4. Format Time
export const formatTime = (dateString: string) => {
  if (!dateString) return "";
  return format(new Date(dateString), "hh:mm a");
};

// 5. Format DateTime
export const formatDateTime = (dateString: string) => {
  if (!dateString) return "";
  return format(new Date(dateString), "MMM dd, yyyy hh:mm a");
};

// 6. Time ago
export const timeAgo = (dateString: string) => {
  if (!dateString) return "";
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};

// 7. Format Currency KES
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0
  }).format(amount || 0);
};

// 8. Truncate text
export const truncateText = (text: string, length: number) => {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

// VALIDATION & LOGIC

// 9. Capitalize first letter
export const capitalize = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// 10. Generate Initials
export const getInitials = (name: string) => {
  if (!name) return "U";
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

// 11. Check if event is passed
export const isEventPassed = (dateString: string) => {
  return isPast(new Date(dateString));
};

// 12. Check if event is upcoming
export const isEventUpcoming = (dateString: string) => {
  return isFuture(new Date(dateString));
};

// 13. Generate Random ID
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// 14. Slugify text
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

// 15. Delay / Sleep function
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 16. Mask email
export const maskEmail = (email: string) => {
  if (!email) return "";
  const [name, domain] = email.split("@");
  return `${name.charAt(0)}***@${domain}`;
};

// 17. Safe Parse JSON
export const safeJSONParse = (str: string, fallback: any = {}) => {
  try {
    return JSON.parse(str);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return fallback;
  }
};

// 18. Pluralize words
export const pluralize = (count: number, singular: string, plural: string) => {
  return count === 1 ? singular : plural;
};

// 19. Generate Avatar URL
export const generateAvatar = (seed: string) => {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}`;
};

// 20. Calculate percentage
export const calculatePercentage = (value: number, total: number) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

// 21. Format Phone Number (generic)
export const formatPhone = (phone: string) => {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+254 ${match[2]} ${match[3]}`; // Basic formatter for Kenyan formats
  }
  return phone;
};
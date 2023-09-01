import { writable } from 'svelte/store';

export const awards = writable({});
export const leagueData = writable({});
export const upcomingDraft = writable({});
export const previousDrafts = writable([]);
export const matchupsStore = writable({});
export const records = writable({});
export const rostersStore = writable({});
export const transactionsStore = writable({});
export const teamManagersStore = writable({});
export const nflState = writable({});
export const players = writable({});
export const news = writable([]);
export const posts = writable([]);
export const brackets = writable({});
export const standingsStore = writable({});

// Initialize with "light" or "dark" based on user preference
let initialTheme;
if (typeof window !== "undefined") {
  initialTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
} else {
  initialTheme = "light"; // default value for server-side rendering
}
export const themeStore = writable(initialTheme);
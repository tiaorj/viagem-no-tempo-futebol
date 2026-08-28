export type AnalyticsEvent = "page_view" | "episode_click" | "social_click" | "cta_click" | "partnership_click";
export function trackEvent(name: AnalyticsEvent, params: Record<string, string | number | undefined> = {}) { if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag("event", name, params); }
declare global { interface Window { gtag?: (...args: unknown[]) => void } }

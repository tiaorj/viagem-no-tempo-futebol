"use client";
import type { AnchorHTMLAttributes } from "react"; import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
export function TrackedLink({ event, params, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { event?: AnalyticsEvent; params?: Record<string, string | number | undefined> }) { return <a {...props} onClick={(e) => { props.onClick?.(e); if (event) trackEvent(event, params); }} />; }

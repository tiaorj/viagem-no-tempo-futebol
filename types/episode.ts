export type EpisodeCategory = "flamengo" | "rules" | "stadiums" | "competitions" | "players" | "clubs" | "curiosities";
export type VideoPlatform = "youtube" | "instagram" | "tiktok" | "facebook";
export interface EpisodeLink { platform: VideoPlatform; url: string }
export interface Episode { id: string; slug: string; title: string; description: string; series?: string; episodeNumber?: number; category: EpisodeCategory; historicalPeriod?: string; thumbnail?: string; alt: string; links: EpisodeLink[]; published: boolean; featured?: boolean }

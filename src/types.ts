export interface Song {
  id: string;
  title: string;
  themeReason: string;
  keyWords: string[];
  recommendedActivity: string;
  youtubeSearchQuery: string;
  lyricsPreview: string;
}

export interface RecommendationResponse {
  theme: string;
  introduction: string;
  songs: Song[];
}

export interface PlayTheme {
  month?: string;
  name: string;
  description: string;
  image?: string;
  emoji: string;
}

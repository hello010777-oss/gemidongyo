import { DEFAULT_RECOMMENDATIONS } from "../data/recommendations";
import { RecommendationResponse, Song } from "../types";

const STORAGE_KEY = "dongyo-custom-recommendations-v2";

function cloneDefaults(): Record<string, RecommendationResponse> {
  return structuredClone(DEFAULT_RECOMMENDATIONS);
}

export function loadAllRecommendations(): Record<string, RecommendationResponse> {
  const base = cloneDefaults();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const custom = JSON.parse(raw) as Record<string, RecommendationResponse>;
    return { ...base, ...custom };
  } catch {
    return base;
  }
}

export function saveThemeRecommendation(
  themeName: string,
  recommendation: RecommendationResponse
): void {
  const all = loadAllRecommendations();
  all[themeName] = recommendation;
  const customOnly: Record<string, RecommendationResponse> = {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) Object.assign(customOnly, JSON.parse(raw));
  } catch {
    /* ignore */
  }
  customOnly[themeName] = recommendation;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
}

export function getRecommendationByThemeName(
  themeName: string
): RecommendationResponse | null {
  const all = loadAllRecommendations();
  return all[themeName] ?? null;
}

export function createEmptySong(): Song {
  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: "",
    themeReason: "",
    keyWords: [],
    recommendedActivity: "",
    youtubeSearchQuery: "",
    lyricsPreview: "",
  };
}

export function resetThemeToDefault(themeName: string): RecommendationResponse | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const custom = JSON.parse(raw) as Record<string, RecommendationResponse>;
      delete custom[themeName];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
    }
  } catch {
    /* ignore */
  }
  return cloneDefaults()[themeName] ?? null;
}

import React from "react";
import { Song } from "../types";
import { Youtube, Music, Sparkles, BookOpen, ThumbsUp, Layers, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface SongCardProps {
  song: Song;
  index: number;
}

export default function SongCard({ song, index }: SongCardProps): React.ReactElement {
  const { title, themeReason, keyWords, recommendedActivity, youtubeSearchQuery, lyricsPreview } = song;
  const [copied, setCopied] = useState(false);

  // Copy lyrics snippet to clipboard
  const handleCopyText = async () => {
    try {
      const textToCopy = `곡제목: ${title}\n대표가사: ${lyricsPreview}\n추천 이유: ${themeReason}\n연계 놀이 활동: ${recommendedActivity}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Text copy failed", err);
    }
  };

  const getYoutubeUrl = (query: string) => {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-md border-3 border-[#DCEFF1] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:translate-y-[-4px]"
      id={`song-card-${index}`}
    >
      {/* Top Header Card Accent */}
      <div className="bg-[#DCEFF1] px-6 py-4 flex items-center justify-between border-b-2 border-dashed border-[#B6DCE1]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white rounded-full text-[#3FA7B5] shadow-xs flex items-center justify-center">
            <Music className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#2A6E78] tracking-tight">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopyText}
            className="p-1.5 hover:bg-white rounded-lg text-gray-500 hover:text-emerald-600 transition-colors flex items-center gap-1 text-xs"
            title="수업안 복사하기"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-bold">복사됨!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">복사</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-5">
        {/* Lyrics Preview Speech Bubble */}
        <div className="relative bg-orange-50 rounded-2xl p-4 border border-orange-100 flex flex-col justify-center min-h-[70px]">
          <div className="absolute top-[-8px] left-6 w-4 h-4 bg-orange-50 border-t border-l border-orange-100 rotate-45" />
          <p className="text-[#A25A38] text-sm md:text-base font-bold text-center italic tracking-wide">
            " {lyricsPreview} "
          </p>
        </div>

        {/* Content Paragraphs */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Recommend Reason */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase mb-1">
              <span className="p-0.5 bg-teal-100 rounded-sm">
                <ThumbsUp className="w-3.5 h-3.5 text-teal-600" />
              </span>
              <span>동요 추천 이유</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line pl-1">
              {themeReason}
            </p>
          </div>

          {/* Activity Guideline */}
          <div className="bg-[#F9FCFC] p-4 rounded-xl border border-teal-50">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A6E78] uppercase mb-1.5">
              <span className="p-0.5 bg-[#E6F4F5] rounded-sm">
                <BookOpen className="w-3.5 h-3.5 text-[#3FA7B5]" />
              </span>
              <span>수업 연계 놀이 활동 정보</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed pl-1">
              {recommendedActivity}
            </p>
          </div>
        </div>

        {/* Keywords and Youtube Button Area */}
        <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {keyWords.map((word, wIdx) => (
              <span
                key={wIdx}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-100"
              >
                #{word}
              </span>
            ))}
          </div>

          <a
            href={getYoutubeUrl(youtubeSearchQuery || `${title} 동요`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FF0000] hover:bg-[#D30000] active:scale-95 text-white text-base font-bold rounded-2xl shadow-md transition-all duration-200"
          >
            <Youtube className="w-5 h-5" />
            <span>유튜브로 이동하기</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

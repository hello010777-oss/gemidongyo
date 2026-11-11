import React, { useState } from "react";
import { Song } from "../types";
import { X, Save } from "lucide-react";

interface SongEditorProps {
  song: Song | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (song: Song) => void;
}

export default function SongEditor({
  song,
  isOpen,
  onClose,
  onSave,
}: SongEditorProps): React.ReactElement | null {
  const [draft, setDraft] = useState<Song | null>(song);
  const [keywordsText, setKeywordsText] = useState(
    song?.keyWords?.join(", ") ?? ""
  );

  React.useEffect(() => {
    setDraft(song);
    setKeywordsText(song?.keyWords?.join(", ") ?? "");
  }, [song, isOpen]);

  if (!isOpen || !draft) return null;

  const update = <K extends keyof Song>(key: K, value: Song[K]) => {
    setDraft((prev) => (prev ? { ...prev, [key]: value } : prev));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.title.trim()) {
      alert("동요 제목을 입력해 주세요.");
      return;
    }
    const keyWords = keywordsText
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    const youtubeSearchQuery =
      draft.youtubeSearchQuery.trim() || `동요 ${draft.title.trim()}`;
    onSave({
      ...draft,
      title: draft.title.trim(),
      keyWords,
      youtubeSearchQuery,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border-2 border-[#DCEFF1]">
        <div className="sticky top-0 bg-white px-5 py-4 border-b border-slate-100 flex items-center justify-between rounded-t-3xl">
          <h3 className="text-lg font-bold text-[#2A6E78]">
            {song?.title ? "동요 수정하기" : "동요 추가하기"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">곡 제목 *</span>
            <input
              value={draft.title}
              onChange={(e) => update("title", e.target.value)}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none font-bold text-slate-800"
              placeholder="예: 봄이 왔어요"
              required
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">대표 가사</span>
            <input
              value={draft.lyricsPreview}
              onChange={(e) => update("lyricsPreview", e.target.value)}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none text-slate-800"
              placeholder="기억에 남는 한 줄 가사"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">추천 이유</span>
            <textarea
              value={draft.themeReason}
              onChange={(e) => update("themeReason", e.target.value)}
              rows={3}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none text-slate-800 resize-y"
              placeholder="이 주제로 추천하는 이유"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">연계 놀이 활동</span>
            <textarea
              value={draft.recommendedActivity}
              onChange={(e) => update("recommendedActivity", e.target.value)}
              rows={3}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none text-slate-800 resize-y"
              placeholder="교실에서 바로 할 수 있는 활동"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">
              키워드 (쉼표로 구분)
            </span>
            <input
              value={keywordsText}
              onChange={(e) => setKeywordsText(e.target.value)}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none text-slate-800"
              placeholder="예: 봄, 새싹, 나들이"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-500">
              유튜브 검색어
            </span>
            <input
              value={draft.youtubeSearchQuery}
              onChange={(e) => update("youtubeSearchQuery", e.target.value)}
              className="px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#3FA7B5] outline-none text-slate-800"
              placeholder="비우면 '동요 + 제목'으로 자동 설정"
            />
          </label>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-2xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-2xl bg-[#3FA7B5] hover:bg-[#328D9A] text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              저장하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

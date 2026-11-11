import React, { useState } from "react";
import { POPULAR_THEMES } from "./data/themes";
import { RecommendationResponse, PlayTheme, Song } from "./types";
import {
  Music,
  AlertCircle,
  Lightbulb,
  BookOpen,
  Heart,
  ChevronRight,
  RotateCcw,
  Plus,
  Pencil,
} from "lucide-react";
import SongCard from "./components/SongCard";
import SongEditor from "./components/SongEditor";
import { motion, AnimatePresence } from "motion/react";
import {
  createEmptySong,
  getRecommendationByThemeName,
  resetThemeToDefault,
  saveThemeRecommendation,
} from "./utils/songStorage";

export default function App() {
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [recommendation, setRecommendation] =
    useState<RecommendationResponse | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2500);
  };

  const loadTheme = (theme: PlayTheme) => {
    const data = getRecommendationByThemeName(theme.name);
    if (!data) {
      setRecommendation(null);
      setActivePreset(theme.name);
      showNotice("이 주제의 추천 동요가 아직 준비되지 않았어요.");
      return;
    }
    setActivePreset(theme.name);
    setRecommendation({ ...data, songs: [...data.songs] });
  };

  const handleThemePresetSelect = (theme: PlayTheme) => {
    loadTheme(theme);
  };

  const handleReset = () => {
    setActivePreset(null);
    setRecommendation(null);
    setEditMode(false);
  };

  const persistCurrent = (next: RecommendationResponse) => {
    if (!activePreset) return;
    saveThemeRecommendation(activePreset, next);
    setRecommendation(next);
  };

  const handleOpenAdd = () => {
    if (!activePreset || !recommendation) {
      showNotice("먼저 왼쪽에서 월별 주제를 선택해 주세요.");
      return;
    }
    setEditingSong(createEmptySong());
    setEditorOpen(true);
  };

  const handleOpenEdit = (song: Song) => {
    setEditingSong({ ...song, keyWords: [...song.keyWords] });
    setEditorOpen(true);
  };

  const handleSaveSong = (song: Song) => {
    if (!recommendation || !activePreset) return;
    const exists = recommendation.songs.some((s) => s.id === song.id);
    const songs = exists
      ? recommendation.songs.map((s) => (s.id === song.id ? song : s))
      : [...recommendation.songs, song];
    persistCurrent({ ...recommendation, songs });
    setEditorOpen(false);
    setEditingSong(null);
    setEditMode(true);
    showNotice(exists ? "동요가 수정되었어요." : "동요가 추가되었어요.");
  };

  const handleDeleteSong = (song: Song) => {
    if (!recommendation || !activePreset) return;
    const songs = recommendation.songs.filter((s) => s.id !== song.id);
    persistCurrent({ ...recommendation, songs });
    showNotice("동요가 삭제되었어요.");
  };

  const handleResetTheme = () => {
    if (!activePreset) return;
    if (
      !confirm(
        "이 주제의 동요 목록을 처음 추천 목록으로 되돌릴까요? (직접 추가·수정한 내용이 사라집니다)"
      )
    ) {
      return;
    }
    const restored = resetThemeToDefault(activePreset);
    if (restored) {
      setRecommendation({ ...restored, songs: [...restored.songs] });
      showNotice("기본 추천 목록으로 되돌렸어요.");
    }
  };

  return (
    <div
      className="min-h-screen relative flex flex-col font-sans transition-all selection:bg-emerald-100 duration-500 text-slate-800 bg-slate-50"
      style={{
        backgroundImage: "url('https://i.imgur.com/okszLnP.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="h-20 bg-white/95 border-b-2 border-[#DCEFF1] backdrop-blur-md px-4 sm:px-8 flex items-center justify-between shadow-xs sticky top-0 z-20">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center shrink-0">
              <img
                src="https://i.imgur.com/0OMgykW.png"
                alt="로고"
                className="h-16 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-2xl font-bold text-[#2A6E78] tracking-tight truncate">
                  유초이음 놀이주제별 맞춤 동요 추천앱
                </h1>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                유치원·초등학교 월별 놀이주제 추천 동요 · 유튜브 바로가기
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-3 border-[#DCEFF1] shadow-md">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-dashed border-slate-100">
                <BookOpen className="w-4 h-4 text-[#3FA7B5]" />
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  월별 정석 놀이 주제
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-3.5 leading-relaxed">
                월별 주제를 누르면 추천 동요가 바로 나타납니다. 유튜브 버튼으로
                바로 들을 수 있어요.
              </p>

              <div className="flex flex-col gap-2 max-h-[420px] lg:max-h-none overflow-y-auto pr-1">
                {POPULAR_THEMES.map((theme, idx) => {
                  const isActive = activePreset === theme.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleThemePresetSelect(theme)}
                      className={`w-full text-left py-2.5 px-3.5 rounded-2xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-[#3FA7B5] text-white font-bold border-[#3FA7B5] shadow-xs translate-x-1"
                          : "bg-slate-50 hover:bg-white hover:border-[#3FA7B5]/40 text-slate-700 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`text-base flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-white shadow-xs ${
                            isActive ? "text-slate-800" : ""
                          }`}
                        >
                          {theme.emoji}
                        </span>
                        <div className="min-w-0">
                          <span
                            className={`block font-bold ${
                              isActive ? "text-white" : "text-[#2A6E78]"
                            }`}
                          >
                            {theme.month} 놀이주제
                          </span>
                          <span
                            className={`block text-[11px] truncate ${
                              isActive ? "text-sky-50" : "text-slate-500"
                            }`}
                          >
                            {theme.name}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isActive ? "text-white" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-emerald-50/90 backdrop-blur-md rounded-3xl p-5 border-2 border-emerald-100 shadow-sm hidden lg:flex flex-col gap-3">
              <div className="flex gap-2 items-center text-emerald-800 font-bold text-xs">
                <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>동요 추가·수정 팁</span>
              </div>
              <p className="text-xs text-emerald-700/90 leading-relaxed font-sans">
                주제 선택 후 [목록 편집]을 켜면 동요를 추가·수정·삭제할 수
                있습니다. 변경 내용은 이 브라우저에 저장됩니다.
              </p>
            </div>
          </aside>

          <main className="flex-1 flex flex-col gap-6">
            {notice && (
              <div className="p-3 bg-[#EBF7F8] border-2 border-[#B6DCE1] rounded-2xl flex items-center gap-2 text-[#2A6E78] text-sm font-bold shadow-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {notice}
              </div>
            )}

            <AnimatePresence mode="wait">
              {recommendation ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-emerald-50/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border-3 border-emerald-100 shadow-md flex flex-col md:flex-row gap-5 items-start"
                  >
                    <div className="p-3 bg-white text-emerald-600 rounded-2xl shadow-xs border border-emerald-100 flex items-center justify-center shrink-0">
                      <Heart className="w-7 h-7 fill-emerald-100 animate-float" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                          월별 추천 동요
                        </span>
                        <span className="text-xs text-slate-400 font-sans">
                          주제: {recommendation.theme}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-900 tracking-tight leading-snug">
                        {recommendation.theme}에 어울리는 추천 동요
                      </h3>
                      <p className="text-emerald-800/90 text-sm mt-2 leading-relaxed whitespace-pre-line font-sans">
                        {recommendation.introduction}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="p-2 hover:bg-emerald-100 rounded-xl text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1 text-xs font-bold shrink-0 self-end md:self-start cursor-pointer border border-emerald-100 bg-white"
                      title="다시 선택하기"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>다시 시작</span>
                    </button>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-6 bg-[#3FA7B5] rounded-full" />
                      <h3 className="text-xl font-bold text-slate-800">
                        추천 동요 리스트 ({recommendation.songs.length}곡)
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditMode((v) => !v)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          editMode
                            ? "bg-[#3FA7B5] text-white border-[#3FA7B5]"
                            : "bg-white text-[#2A6E78] border-[#B6DCE1] hover:bg-[#EBF7F8]"
                        }`}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        {editMode ? "편집 종료" : "목록 편집"}
                      </button>
                      {editMode && (
                        <>
                          <button
                            type="button"
                            onClick={handleOpenAdd}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#4CAF50] text-white hover:bg-[#43a047] cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            동요 추가
                          </button>
                          <button
                            type="button"
                            onClick={handleResetTheme}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            기본값 복원
                          </button>
                        </>
                      )}
                      <span className="text-xs text-slate-500">
                        유튜브 바로가기 🎬
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendation.songs.map((song, index) => (
                      <div key={song.id} className="h-full">
                        <SongCard
                          song={song}
                          index={index}
                          editMode={editMode}
                          onEdit={handleOpenEdit}
                          onDelete={handleDeleteSong}
                        />
                      </div>
                    ))}
                  </div>

                  {recommendation.songs.length === 0 && (
                    <div className="bg-white/90 rounded-3xl p-10 text-center border-2 border-dashed border-slate-200">
                      <p className="text-slate-500 text-sm mb-4">
                        이 주제에는 아직 동요가 없어요. 동요를 추가해 보세요.
                      </p>
                      <button
                        type="button"
                        onClick={handleOpenAdd}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#4CAF50] text-white font-bold cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        동요 추가하기
                      </button>
                    </div>
                  )}

                  <div className="text-center py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span>
                      * 월별 놀이주제에 맞춰 엄선한 추천 동요입니다. 필요하면
                      [목록 편집]으로 직접 추가·수정할 수 있어요.
                    </span>
                    <span className="inline-flex items-center gap-1 ml-1 bg-[#EBF7F8] px-2 py-0.5 rounded-lg border border-[#B6DCE1]/40">
                      <img
                        src="https://i.imgur.com/0OMgykW.png"
                        alt="로고"
                        className="h-4 w-auto object-contain"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      <span className="font-semibold text-[#2A6E78]">
                        -재미다인쌤-
                      </span>
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-14 text-center border-2 border-slate-100 shadow-xs flex flex-col items-center justify-center gap-6 min-h-[350px]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#EBF7F8] border border-[#B6DCE1] flex items-center justify-center text-[#3FA7B5] animate-float">
                    <Music className="w-10 h-10" />
                  </div>
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-[#2A6E78]">
                      월별 놀이주제를 선택해 주세요
                    </h3>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                      왼쪽에서{" "}
                      <strong>3월 유치원과 친구 · 4월 봄 · 5월 나와 가족</strong>부터{" "}
                      <strong>12월 겨울</strong>까지 주제를 누르면, 추천 동요와
                      유튜브 바로가기가 바로 열려요.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full mt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                      <span className="block text-xs font-bold text-[#3FA7B5] mb-1">
                        어떻게 쓰나요?
                      </span>
                      <p className="text-slate-550 text-[11px] leading-relaxed">
                        - 월별 주제 클릭 → 추천 동요 확인
                        <br />- 빨간 버튼으로 유튜브 바로 이동
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                      <span className="block text-xs font-bold text-[#3FA7B5] mb-1">
                        동요 추가·수정
                      </span>
                      <p className="text-slate-550 text-[11px] leading-relaxed">
                        - [목록 편집]으로 원하는 동요 추가
                        <br />- 제목·가사·유튜브 검색어까지 수정 가능
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>

        <footer className="mt-auto py-6 bg-slate-900 text-slate-400 border-t border-slate-800 px-4 sm:px-8 text-center text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center shrink-0 bg-white px-2 py-1 rounded-lg">
                <img
                  src="https://i.imgur.com/0OMgykW.png"
                  alt="로고"
                  className="h-8 w-auto object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <span className="font-bold text-slate-300 text-sm">
                유초이음 놀이주제별 맞춤 동요 추천앱
              </span>
            </div>
          </div>
        </footer>
      </div>

      <SongEditor
        song={editingSong}
        isOpen={editorOpen}
        onClose={() => {
          setEditorOpen(false);
          setEditingSong(null);
        }}
        onSave={handleSaveSong}
      />
    </div>
  );
}

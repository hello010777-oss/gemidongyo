import React, { useState, useEffect } from "react";
import { POPULAR_THEMES } from "./data/themes";
import { RecommendationResponse, PlayTheme } from "./types";
import { 
  Music, 
  Search, 
  Sparkles, 
  AlertCircle, 
  Lightbulb, 
  Share2, 
  Check, 
  BookOpen, 
  Layers, 
  HelpCircle,
  TrendingUp,
  RotateCcw,
  Heart,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import SongCard from "./components/SongCard";
import { motion, AnimatePresence } from "motion/react";

const SUGGESTED_QUICK_TAGS = [
  { text: "개구리와 올챙이 🐸", themeName: "개구리와 올챙이" },
  { text: "아기 동물 들판 🐻", themeName: "아기 동물과 자연" },
  { text: "우주 대탐험 🚀", themeName: "우주와 태양계 과학 놀이" },
  { text: "소방관 고마운 이웃 🚒", themeName: "소방서 직업 체험과 소방 안전" },
  { text: "지구 사랑 분리배출 ♻️", themeName: "환경 보호와 분리배출" },
  { text: "감정 놀이 표정 😃", themeName: "내 감정과 이웃의 마음" }
];

export default function App() {
  const [themeInput, setThemeInput] = useState("");
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [isCopiedShare, setIsCopiedShare] = useState(false);
  const [excludedSongTitles, setExcludedSongTitles] = useState<string[]>([]);

  // Loading animation phase text rotation
  const [loadingTipIndex, setLoadingTipIndex] = useState(0);
  const loadingTips = [
    "AI가 놀이 커리큘럼에 딱 맞는 동요 후보들을 추려서 큐레이션 중이에요...",
    "안전하고 보장된 YouTube 키워드 링크들을 실시간으로 매칭하고 있습니다...",
    "교실 속 아이들의 웃음소리를 보장해 줄 어휘 키워드를 수집하는 중이에요...",
    "멜로디와 어우러질 시그니처 대표 가사를 발췌해 정리하고 있어요..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingTipIndex((prev) => (prev + 1) % loadingTips.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  // Request recommend API
  const fetchRecommendations = async (targetTheme: string, isLoadMore: boolean = false) => {
    if (!targetTheme.trim()) return;

    setIsLoading(true);
    setError(null);

    const currentExclusions = isLoadMore ? excludedSongTitles : [];

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          theme: targetTheme, 
          excludeSongs: currentExclusions 
        }),
      });

      if (!response.ok) {
        let errMsg = "서버와의 연결이 부드럽지 못합니다. 다시 한 번 요청해 주세요!";
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
            errMsg = errorData.error;
          }
        } catch (_) {}
        throw new Error(errMsg);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setRecommendation(data);

      if (data.songs && data.songs.length > 0) {
        const newTitles = data.songs.map((s: any) => s.title);
        if (isLoadMore) {
          setExcludedSongTitles(prev => {
            // Merge uniquely
            const merged = [...prev];
            newTitles.forEach((t: string) => {
              if (!merged.includes(t)) merged.push(t);
            });
            return merged;
          });
        } else {
          setExcludedSongTitles(newTitles);
        }
      }
    } catch (err: any) {
      setError(err.message || "추천 정보를 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (themeInput.trim()) {
      fetchRecommendations(themeInput.trim(), false);
    }
  };

  const handleThemePresetSelect = (theme: PlayTheme) => {
    const formatted = theme.month ? `${theme.month} 놀이주제 [${theme.name}]` : theme.name;
    setThemeInput(formatted);
    setActivePreset(theme.name);
    fetchRecommendations(formatted, false);
  };

  const handleQuickTagSelect = (tagName: string) => {
    setThemeInput(tagName);
    setActivePreset(null);
    fetchRecommendations(tagName, false);
  };

  const handleReset = () => {
    setThemeInput("");
    setActivePreset(null);
    setRecommendation(null);
    setError(null);
    setExcludedSongTitles([]);
  };

  const handleLoadMoreSongs = () => {
    // Determine current query string
    const currentQuery = themeInput.trim();
    if (currentQuery) {
      fetchRecommendations(currentQuery, true);
    }
  };

  const handleShareApp = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopiedShare(true);
    setTimeout(() => {
      setIsCopiedShare(false);
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col font-sans transition-all selection:bg-emerald-100 duration-500 text-slate-800 bg-slate-50"
      // Beautiful background with high quality overlay
      style={{
        backgroundImage: "url('https://i.imgur.com/okszLnP.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Soft Overlay for readable contrast with the customized theme */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header (Unified Theme Design Header) */}
        <header className="h-20 bg-white/95 border-b-2 border-[#DCEFF1] backdrop-blur-md px-4 sm:px-8 flex items-center justify-between shadow-xs sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <img 
                src="https://i.imgur.com/0OMgykW.png" 
                alt="로고" 
                className="h-16 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-2xl font-bold text-[#2A6E78] tracking-tight flex items-center gap-1">
                  유초이음 놀이주제별 맞춤 동요 추천앱
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#3FA7B5]/10 text-[#2A6E78] border border-[#3FA7B5]/25">
                  큐레이션 AI
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium">유치원·초등학교 놀이주제별 맞춤 동요 추천 서비스</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Removed Page Share Button */}
          </div>
        </header>

        {/* Dashboard Frame (Flex view representing Month side panel and center-search-area) */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar Area: Standard months sidebar for professional presentation */}
          <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-3 border-[#DCEFF1] shadow-md">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-dashed border-slate-100">
                <BookOpen className="w-4 h-4 text-[#3FA7B5]" />
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  월별 정석 놀이 주제
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-3.5 leading-relaxed">
                현재 교육 현장에서 가장 널리 쓰이는 대중적인 공통과정 주제들입니다. 터치 시 즉시 해당 동요를 생성합니다.
              </p>

              {/* Theme chips list */}
              <div className="flex flex-col gap-2 max-h-[380px] lg:max-h-none overflow-y-auto pr-1">
                {POPULAR_THEMES.map((theme, idx) => {
                  const isActive = activePreset === theme.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleThemePresetSelect(theme)}
                      className={`w-full text-left py-2.5 px-3.5 rounded-2xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        isActive 
                        ? "bg-[#3FA7B5] text-white font-bold border-[#3FA7B5] shadow-xs translate-x-1" 
                        : "bg-slate-50 hover:bg-white hover:border-[#3FA7B5]/40 text-slate-700 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`text-base flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-white shadow-xs ${isActive ? 'text-slate-800' : ''}`}>
                          {theme.emoji}
                        </span>
                        <div className="min-w-0">
                          <span className={`block font-bold ${isActive ? 'text-white' : 'text-[#2A6E78]'}`}>
                            {theme.month} 놀이주제
                          </span>
                          <span className={`block text-[11px] truncate ${isActive ? 'text-sky-50' : 'text-slate-500'}`}>
                            {theme.name}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Helper Widget Card */}
            <div className="bg-emerald-50/90 backdrop-blur-md rounded-3xl p-5 border-2 border-emerald-100 shadow-sm hidden lg:flex flex-col gap-3">
              <div className="flex gap-2 items-center text-emerald-800 font-bold text-xs">
                <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>현장 교육 활용 꿀팁 💡</span>
              </div>
              <p className="text-xs text-emerald-700/90 leading-relaxed font-sans">
                오른쪽 상단의 [수업안 복사] 버튼을 누르면 해당 동요의 상세 추천 연동 사유, 핵심 가사, 연계 수업 놀이 가이드가 한 번에 복사되어 교육활동지에 활용할 수 있습니다.
              </p>
            </div>
          </aside>

          {/* Main Content Dashboard */}
          <main className="flex-1 flex flex-col gap-6">

            {/* Top Interactive Search Area for Custom Input */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border-3 border-[#DCEFF1]">
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#3FA7B5]/10 text-[#2A6E78] border border-[#3FA7B5]/25 mb-1.5">
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                  AI 동요 찾기 어시스턴트
                </span>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                  원하시는 유치원·초등학교 놀이 주제를 직접 입력해 보세요!
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  생활 주제, 계절 놀이, 누리과정 소주제 등 어떤 것이든 좋습니다. AI 동요 큐레이터가 가장 환상적인 곡들을 엄선해 드릴게요.
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={themeInput}
                    onChange={(e) => setThemeInput(e.target.value)}
                    placeholder="예: 공룡 화석 발굴, 깨끗한 우리 동네, 소풍 가기 좋은 날, 따뜻한 가족 사랑..."
                    disabled={isLoading}
                    className="w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#3FA7B5] focus:ring-4 focus:ring-[#3FA7B5]/10 bg-white placeholder-slate-400 font-bold text-slate-800 font-sans transition-all duration-200"
                  />
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  {themeInput && (
                    <button
                      type="button"
                      onClick={() => setThemeInput("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-150 rounded-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !themeInput.trim()}
                  className="px-6 py-3.5 bg-[#4CAF50] hover:bg-[#43a047] disabled:bg-slate-300 disabled:shadow-none text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>추천 동요 목록 검색중...</span>
                    </>
                  ) : (
                    <>
                      <span>동요 찾기 ✨</span>
                    </>
                  )}
                </button>
              </form>

              {/* Recommended Quick Tags Box */}
              <div className="mt-4 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  추천 인기 테마:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUICK_TAGS.map((tag, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickTagSelect(tag.themeName)}
                      className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold bg-[#F1F8E9] hover:bg-[#DCEDC8] text-[#33691E] border border-[#DCEDC8]/50 transition-colors cursor-pointer"
                    >
                      {tag.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Error Message Panel */}
            {error && (
              <div className="p-4 bg-rose-50 border-2 border-rose-100 rounded-3xl flex items-start gap-3 text-red-800 shadow-sm animate-pulse">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-500 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">추천 진행 중 오류가 발생했습니다</h4>
                  <p className="text-xs text-rose-600 mt-1">{error}</p>
                </div>
              </div>
            )}

            {/* Show Loading state */}
            {isLoading && (
              <div className="bg-white/95 rounded-3xl p-10 md:p-14 text-center border-3 border-[#DCEFF1] shadow-xl flex flex-col items-center justify-center gap-6 min-h-[350px]">
                {/* Whimsical music notes floating loop */}
                <div className="relative w-24 h-24 flex items-center justify-center bg-[#EBF7F8] rounded-full border-2 border-[#B6DCE1] animate-bounce">
                  <Music className="w-12 h-12 text-[#3FA7B5] animate-pulse" />
                  <div className="absolute top-0 right-0 p-1.5 bg-yellow-400 text-white rounded-full animate-spin">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-slate-800">
                    동요를 찾고 있습니다
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    선택하신 <span className="text-[#3FA7B5] font-bold">"{themeInput}"</span> 주제에 어울리는 최적의 동요와 유용한 연계 놀이 가이드를 맞춤 생성하고 있으니 잠시만 기다려주세요!
                  </p>
                </div>

                {/* Rotating tip phrase container */}
                <div className="bg-[#EBF7F8] px-5 py-3 rounded-2xl border border-[#DCEFF1] text-xs text-[#2A6E78] font-bold font-sans animate-float max-w-sm">
                  📢 {loadingTips[loadingTipIndex]}
                </div>
              </div>
            )}

            {/* Results Area */}
            {!isLoading && (
              <AnimatePresence mode="wait">
                {recommendation ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Welcome Introduction Banner from AI */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-emerald-50/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border-3 border-emerald-100 shadow-md content-card flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="p-3 bg-white text-emerald-600 rounded-2xl shadow-xs border border-emerald-100 flex items-center justify-center shrink-0">
                        <Heart className="w-7 h-7 fill-emerald-100 animate-float" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                            💡 교사를 위한 AI 지도 조언
                          </span>
                          <span className="text-xs text-slate-400 font-sans">
                            주제: {recommendation.theme}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-emerald-900 tracking-tight leading-snug">
                          {recommendation.theme} 놀이수업에 활력을 불어넣는 최적의 동요 솔루션
                        </h3>
                        <p className="text-emerald-800/90 text-sm mt-2 leading-relaxed whitespace-pre-line font-sans">
                          {recommendation.introduction}
                        </p>
                      </div>
                      
                      <button 
                        onClick={handleReset}
                        className="p-2 hover:bg-emerald-100 rounded-xl text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1 text-xs font-bold shrink-0 self-end md:self-start cursor-pointer border border-emerald-100.5 bg-white"
                        title="다시 검색하기"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>다시 시작</span>
                      </button>
                    </motion.div>

                    {/* Section Header */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-6 bg-[#3FA7B5] rounded-full" />
                        <h3 className="text-xl font-bold text-slate-800">
                          엄선된 추천 동요 리스트 ({recommendation.songs.length}곡)
                        </h3>
                      </div>
                      <span className="text-xs text-slate-500">
                        유튜브 바로가기 탑재 완료 🎬
                      </span>
                    </div>

                    {/* Video and detail Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {recommendation.songs.map((song, index) => (
                        <div key={index} className="h-full">
                          <SongCard song={song} index={index} />
                        </div>
                      ))}
                    </div>

                    {/* Alternative Recommendation callout / Load More */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-3 border-dashed border-[#B6DCE1] text-center flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs mt-2"
                    >
                      <div className="text-left">
                        <h4 className="font-bold text-slate-800 text-base flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse" />
                          <span>이 추천 목록이 마음에 들지 않거나 다른 노래도 듣고 싶으신가요?</span>
                        </h4>
                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                          현재 추천된 노래 제목 {excludedSongTitles.length}곡을 자동으로 중복 배제 필터링하고,<br />
                          AI 가창 전문가가 유치원과 초등학교 수업에 연계하기 뛰어난 또 다른 풍성한 예술 창작 동요 세트를 즉각 엄선해 드립니다!
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleLoadMoreSongs}
                        className="px-6 py-3.5 bg-[#3FA7B5] hover:bg-[#328D9A] active:scale-95 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <RotateCcw className="w-4 h-4 text-emerald-100" />
                        <span>새로운 추천 동요 더 찾기 🔄</span>
                      </button>
                    </motion.div>

                    {/* Bottom disclaimer */}
                    <div className="text-center py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
                      <span>* 본 추천 동요 정보는 Google Gemini AI의 모델을 바탕으로 탐색하여 매칭한 정보입니다.</span>
                      <span className="inline-flex items-center gap-1 ml-1 bg-[#EBF7F8] px-2 py-0.5 rounded-lg border border-[#B6DCE1]/40">
                        <img 
                          src="https://i.imgur.com/0OMgykW.png" 
                          alt="로고" 
                          className="h-4 w-auto object-contain"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <span className="font-semibold text-[#2A6E78]">-재미다인쌤-</span>
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  /* Initial Empty Placeholder State */
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
                        오늘 교실에서 아이들과 어떤 놀이를 하나요?
                      </h3>
                      <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        왼쪽 사이드바의 <strong>월별 추천 주제</strong>를 클릭하거나, 검색창에 구체적인 놀이 주제(예: <span className="text-rose-500 font-bold">봄 꽃 나들이, 모래놀이, 분리수거, 우주선 등</span>)를 직접 입력하여 어울리는 동요와 연계 수업 팁을 손쉽게 만나보세요!
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full mt-2">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                        <span className="block text-xs font-bold text-[#3FA7B5] mb-1">💡 언제 사용하면 좋을까요?</span>
                        <p className="text-slate-550 text-[11px] leading-relaxed">
                          - 놀이 계획안에 딱 들어맞는 동요가 생각나지 않을 때<br />
                          - 아이들의 흥미를 유발할 실질적인 연계 율동 및 놀이 팁이 필요할 때
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                        <span className="block text-xs font-bold text-[#3FA7B5] mb-1">🔗 다양한 편의 기능</span>
                        <p className="text-slate-550 text-[11px] leading-relaxed">
                          - YouTube가 엄선한 안전 버전을 향해 바로 연결될 키워드 링크 탑재<br />
                          - 수업 준비를 꼼꼼하고 빠르게 하도록 돕는 [수업안 클립보드 복사] 제공
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

          </main>
        </div>

        {/* Beautiful footer matching the professional theme design */}
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
              <span className="font-bold text-slate-300 text-sm">유초이음 놀이주제별 맞춤 동요 추천앱</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

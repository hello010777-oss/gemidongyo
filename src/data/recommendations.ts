import { RecommendationResponse } from "../types";

/**
 * 월별 놀이주제 추천 동요
 * - 초등 1·2학년 즐거운 생활/음악 교과서 수록곡 위주
 * - 유치원에서 부르기 좋은 동요를 함께 배치
 */
export const DEFAULT_RECOMMENDATIONS: Record<string, RecommendationResponse> = {
  "유치원과 친구": {
    theme: "3월 놀이주제 [유치원과 친구]",
    introduction:
      "새 학기 적응에 맞춰, 초등 1·2학년 교과서 수록곡과 유치원에서 많이 부르는 친구·인사 동요를 골라 두었습니다. 인사하기·사이좋게 지내기 활동과 바로 이어가 보세요.",
    songs: [
      {
        id: "mar-1",
        title: "안녕",
        themeReason:
          "초등 1학년 즐거운 생활(음악) 수록곡입니다. 간단한 인사 가사로 유치원·초등 저학년 모두 쉽게 따라 부르며 새 학기 인사를 익힐 수 있습니다.",
        keyWords: ["인사", "교과서", "1학년", "새학기"],
        recommendedActivity:
          "교실 문 앞에서 선생님·친구에게 '안녕' 인사 릴레이를 하며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 안녕 초등 1학년 교과서",
        lyricsPreview: "안녕 안녕 만나서 반가워",
      },
      {
        id: "mar-2",
        title: "학교 가는 길",
        themeReason:
          "초등 1학년 교과서 수록곡으로, 등·하원(하교)길의 설렘을 노래합니다. 유치원 등원 지도와 초등 입학 적응에 잘 맞습니다.",
        keyWords: ["등원", "학교", "교과서", "1학년"],
        recommendedActivity:
          "등원 루트를 그림으로 그리고, 안전하게 가는 약속을 정한 뒤 노래로 정리해 보세요.",
        youtubeSearchQuery: "동요 학교 가는 길 초등 1학년",
        lyricsPreview: "학교 가는 길 신나요",
      },
      {
        id: "mar-3",
        title: "우리는 친구",
        themeReason:
          "초등 2학년 음악 교과서 수록곡입니다. '우리는 친구'라는 메시지가 분명해 3월 반 만들기·친구 사귀기 주제에 적합합니다.",
        keyWords: ["친구", "교과서", "2학년", "우리반"],
        recommendedActivity:
          "원으로 앉아 손을 잡고 부르며, 끝나면 옆 친구의 이름을 불러 칭찬해 보세요.",
        youtubeSearchQuery: "동요 우리는 친구 초등 2학년",
        lyricsPreview: "우리는 친구 사이좋은 친구",
      },
      {
        id: "mar-4",
        title: "어깨동무",
        themeReason:
          "초등 1·2학년 교과서에 실리는 전래동요입니다. 어깨동무하며 어울리는 율동이 자연스러워 유치원 신체놀이에도 좋아요.",
        keyWords: ["전래동요", "어깨동무", "교과서", "협력"],
        recommendedActivity:
          "둘·셋씩 어깨동무하고 교실을 한 바퀴 돌며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 어깨동무 초등 교과서",
        lyricsPreview: "어깨동무 하고 놀자",
      },
      {
        id: "mar-5",
        title: "남생아 놀아라",
        themeReason:
          "초등 1학년 즐거운 생활 수록 전래동요입니다. 놀이 초대 가사라 친구와 함께 놀기 주제에 잘 어울립니다.",
        keyWords: ["전래동요", "놀이", "교과서", "1학년"],
        recommendedActivity:
          "손유희나 소고를 치며 리듬을 맞춰 보고, '같이 놀자' 초대 역할놀이를 연결해 보세요.",
        youtubeSearchQuery: "동요 남생아 놀아라 초등 1학년",
        lyricsPreview: "남생아 놀아라 뱃등으로 놀아라",
      },
      {
        id: "mar-6",
        title: "꼭꼭 숨어라",
        themeReason:
          "초등 2학년 교과서 전래동요로, 숨바꼭질 놀이와 연결됩니다. 유치원에서도 쉽게 따라 부르는 친숙한 곡입니다.",
        keyWords: ["숨바꼭질", "전래동요", "2학년", "놀이"],
        recommendedActivity:
          "교실에서 안전한 숨바꼭질(또는 눈 가리고 찾기)을 짧게 한 뒤 노래로 마무리해 보세요.",
        youtubeSearchQuery: "동요 꼭꼭 숨어라 초등 2학년",
        lyricsPreview: "꼭꼭 숨어라 머리카락 보일라",
      },
    ],
  },

  "따뜻한 봄": {
    theme: "4월 놀이주제 [따뜻한 봄]",
    introduction:
      "봄비·새·나무 등 초등 1·2학년 교과서 봄 관련 수록곡과, 유치원에서 즐겨 부르는 봄 동요를 함께 담았습니다.",
    songs: [
      {
        id: "apr-1",
        title: "나무는 봄비를",
        themeReason:
          "초등 2학년 음악 교과서 수록곡입니다. 봄비와 나무의 성장을 노래해 봄 자연 관찰 활동과 잘 맞습니다.",
        keyWords: ["봄비", "나무", "교과서", "2학년"],
        recommendedActivity:
          "창밖 나무·새싹을 관찰한 뒤, 손가락으로 빗방울 율동을 하며 불러 보세요.",
        youtubeSearchQuery: "동요 나무는 봄비를 초등 2학년",
        lyricsPreview: "나무는 봄비를 좋아한다오",
      },
      {
        id: "apr-2",
        title: "꾀꼬리 노래",
        themeReason:
          "초등 1학년 교과서 수록곡입니다. 봄철 새소리와 연결해 부르기 좋고, 유치원·초등 모두 따라 부르기 쉬운 선율입니다.",
        keyWords: ["꾀꼬리", "봄", "교과서", "1학년"],
        recommendedActivity:
          "새소리 듣기 후 '꾀꼬리' 손유희를 만들어 발표해 보세요.",
        youtubeSearchQuery: "동요 꾀꼬리 노래 초등 1학년",
        lyricsPreview: "꾀꼬리 꾀꼬리 노래한다",
      },
      {
        id: "apr-3",
        title: "새는 새는",
        themeReason:
          "초등 1학년 즐거운 생활 수록 전래동요입니다. 짧은 반복 가사로 유치원 아이들도 바로 따라 부를 수 있습니다.",
        keyWords: ["전래동요", "새", "교과서", "1학년"],
        recommendedActivity:
          "팔로 날갯짓 율동을 하며 부르고, 내가 본 봄 새를 그림으로 그려 보세요.",
        youtubeSearchQuery: "동요 새는 새는 초등 1학년",
        lyricsPreview: "새는 새는 파랑새",
      },
      {
        id: "apr-4",
        title: "벌아 벌아 꿀떠라",
        themeReason:
          "초등 1·2학년 과정에 자주 실리는 전래동요입니다. 봄철 곤충·꿀벌 탐구와 자연스럽게 이어집니다.",
        keyWords: ["벌", "전래동요", "봄", "교과서"],
        recommendedActivity:
          "벌이 꽃에서 꿀을 모으는 역할놀이를 한 뒤 노래에 맞춰 움직여 보세요.",
        youtubeSearchQuery: "동요 벌아 벌아 꿀떠라 초등",
        lyricsPreview: "벌아 벌아 꿀떠라",
      },
      {
        id: "apr-5",
        title: "나비야",
        themeReason:
          "유치원에서 가장 많이 부르는 봄 동요입니다. 초등 저학년도 율동과 함께하기 쉬워 봄꽃·곤충 주제에 잘 맞습니다.",
        keyWords: ["나비", "유치원", "율동", "봄"],
        recommendedActivity:
          "스카프를 날개처럼 들고 나비 날기 율동을 하며 불러 보세요.",
        youtubeSearchQuery: "동요 나비야",
        lyricsPreview: "나비야 나비야 이리 날아오너라",
      },
      {
        id: "apr-6",
        title: "봄비",
        themeReason:
          "유치원·초등에서 봄 날씨 단원에 자주 쓰는 동요입니다. 봄비와 새싹의 관계를 감각적으로 느끼게 돕습니다.",
        keyWords: ["봄비", "유치원", "날씨", "새싹"],
        recommendedActivity:
          "빗소리 악기(쌀통 등)로 반주하며 부르고, 우산·장화 소품으로 역할놀이를 연결해 보세요.",
        youtubeSearchQuery: "동요 봄비",
        lyricsPreview: "봄비가 내려요 촉촉이 내려요",
      },
    ],
  },

  "나와 가족": {
    theme: "5월 놀이주제 [나와 가족]",
    introduction:
      "가정의 달에 맞춰 초등 1학년 교과서의 가족·나 관련 수록곡과, 유치원에서 사랑하는 마음을 표현하는 동요를 골랐습니다.",
    songs: [
      {
        id: "may-1",
        title: "우리 형제",
        themeReason:
          "초등 1학년 즐거운 생활 수록 전래동요입니다. 형제·자매와 사이좋게 지내는 마음을 노래해 가족 주제에 딱 맞습니다.",
        keyWords: ["형제", "가족", "교과서", "1학년"],
        recommendedActivity:
          "가족 구성원을 그림으로 소개하고, 서로 도와주는 상황극 후 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 우리 형제 초등 1학년",
        lyricsPreview: "우리 형제 사이좋게",
      },
      {
        id: "may-2",
        title: "똑같아요",
        themeReason:
          "초등 1학년 교과서 수록곡입니다. '나와 닮은 점'을 찾아보며 자아·가족 닮은 점 이야기와 잘 연결됩니다.",
        keyWords: ["나", "닮은점", "교과서", "1학년"],
        recommendedActivity:
          "거울을 보며 나와 친구의 같은 점·다른 점을 말한 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 똑같아요 초등 1학년",
        lyricsPreview: "똑같아요 똑같아요",
      },
      {
        id: "may-3",
        title: "아빠와 크레파스",
        themeReason:
          "유치원·초등 저학년에서 널리 부르는 가족 동요입니다. 아빠(보호자)에 대한 애정을 그림·노래로 표현하기 좋습니다.",
        keyWords: ["아빠", "가족", "유치원", "사랑"],
        recommendedActivity:
          "아빠(보호자)에게 주고 싶은 크레파스 그림을 그린 뒤 노래로 마음을 전해 보세요.",
        youtubeSearchQuery: "동요 아빠와 크레파스",
        lyricsPreview: "아빠와 크레파스로 그림을 그렸어요",
      },
      {
        id: "may-4",
        title: "우리 엄마",
        themeReason:
          "유치원에서 가정의 달·어버이날에 많이 부르는 동요입니다. 초등 1·2학년도 부르기 쉬운 가사와 선율입니다.",
        keyWords: ["엄마", "감사", "유치원", "가족"],
        recommendedActivity:
          "엄마(보호자)에게 전하는 짧은 감사 카드를 쓰고 노래로 발표해 보세요.",
        youtubeSearchQuery: "동요 우리 엄마",
        lyricsPreview: "우리 엄마 좋아요 정말정말 좋아요",
      },
      {
        id: "may-5",
        title: "이 세상 누구보다 소중한 나",
        themeReason:
          "유치원·초등에서 '소중한 나' 단원에 자주 쓰는 동요입니다. 자아존중감을 키우는 5월 주제와 잘 맞습니다.",
        keyWords: ["소중한나", "자존감", "유치원", "초등"],
        recommendedActivity:
          "'나는 ○○한 사람' 칭찬 목걸이를 만들고 노래하며 서로 칭찬해 보세요.",
        youtubeSearchQuery: "동요 이 세상 누구보다 소중한 나",
        lyricsPreview: "이 세상 누구보다 소중한 나",
      },
      {
        id: "may-6",
        title: "엄마 아빠 사랑해요",
        themeReason:
          "유치원에서 가족과 사랑을 직접 표현할 때 쓰는 대표 동요입니다. 초등 저학년 어버이날 행사에도 잘 어울립니다.",
        keyWords: ["사랑해요", "부모님", "유치원", "표현"],
        recommendedActivity:
          "가족 사진을 보며 한 명씩 '사랑해요'를 말한 뒤 다 같이 불러 보세요.",
        youtubeSearchQuery: "동요 엄마 아빠 사랑해요",
        lyricsPreview: "엄마 아빠 사랑해요 정말 사랑해요",
      },
    ],
  },

  "바쁜 교통기관": {
    theme: "6월 놀이주제 [바쁜 교통기관]",
    introduction:
      "초등 1학년 교과서의 「비행기」「우리 마을」과 유치원에서 즐기는 교통·안전 동요를 함께 담아, 육·해·공 교통수단과 안전 습관을 익히도록 했습니다.",
    songs: [
      {
        id: "jun-1",
        title: "비행기",
        themeReason:
          "초등 1학년 즐거운 생활 수록곡(윤석중 작사)입니다. 항공 교통수단을 다루며 유치원·초등 모두 좋아하는 대표 교과서 동요입니다.",
        keyWords: ["비행기", "교과서", "1학년", "항공"],
        recommendedActivity:
          "종이비행기를 접어 날리며 노래하고, 공항 역할놀이 코너를 운영해 보세요.",
        youtubeSearchQuery: "동요 비행기 초등 1학년 교과서",
        lyricsPreview: "떴다 떴다 비행기 날아라 날아라",
      },
      {
        id: "jun-2",
        title: "우리 마을",
        themeReason:
          "초등 1학년 교과서 수록곡입니다. 마을·동네를 오가는 생활과 이웃을 노래해 교통·우리동네 주제와 연결하기 좋습니다.",
        keyWords: ["마을", "동네", "교과서", "1학년"],
        recommendedActivity:
          "우리 동네 지도를 그리고 버스정류장·횡단보도를 표시한 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 우리 마을 초등 1학년",
        lyricsPreview: "우리 마을 좋은 마을",
      },
      {
        id: "jun-3",
        title: "기차를 타고",
        themeReason:
          "유치원·초등 저학년에서 육상 교통수단 단원에 자주 부르는 동요입니다. 칙벅 리듬으로 신체표현이 쉽습니다.",
        keyWords: ["기차", "유치원", "육상", "율동"],
        recommendedActivity:
          "어깨동무로 기차 대열을 만들어 '칙벅칙벅' 율동과 함께 교실을 돌아 보세요.",
        youtubeSearchQuery: "동요 기차를 타고",
        lyricsPreview: "기차를 타고 칙벅칙벅",
      },
      {
        id: "jun-4",
        title: "버스 타고 가요",
        themeReason:
          "유치원에서 교통기관 주제에 많이 쓰는 동요입니다. 일상 교통수단인 버스를 친숙하게 느껴 줍니다.",
        keyWords: ["버스", "유치원", "교통", "안전"],
        recommendedActivity:
          "의자열을 버스로 만들고 정류장 역할놀이를 하며 불러 보세요.",
        youtubeSearchQuery: "동요 버스 타고 가요",
        lyricsPreview: "버스 타고 가요 씽씽씽",
      },
      {
        id: "jun-5",
        title: "초록불은 길 건너요",
        themeReason:
          "유치원·초등 교통안전 교육에 널리 쓰이는 동요입니다. 신호등·횡단보도 수칙을 노래로 익히게 합니다.",
        keyWords: ["신호등", "안전", "유치원", "횡단보도"],
        recommendedActivity:
          "바닥에 횡단보도를 그리고 신호등 카드로 실제처럼 건너기 놀이를 해 보세요.",
        youtubeSearchQuery: "동요 초록불은 길 건너요",
        lyricsPreview: "초록불은 길 건너요 빨간불은 기다리세요",
      },
      {
        id: "jun-6",
        title: "우리동네 한바퀴",
        themeReason:
          "초등 저학년·유치원에서 동네·교통 탐구와 함께 자주 부르는 동요입니다. 마을을 돌아보는 느낌을 줍니다.",
        keyWords: ["우리동네", "한바퀴", "유치원", "탐구"],
        recommendedActivity:
          "동네 한바퀴 산책(또는 교실 모형 마을) 후 본 교통수단을 이야기하며 불러 보세요.",
        youtubeSearchQuery: "동요 우리동네 한바퀴",
        lyricsPreview: "우리동네 한바퀴 돌아볼까",
      },
    ],
  },

  "신나는 여름": {
    theme: "7~8월 놀이주제 [신나는 여름]",
    introduction:
      "초등 1·2학년 교과서의 여름 수록곡(여름 냇가, 햇볕은 쨍쨍, 여름방학 등)과 유치원 물놀이·여름 동요를 함께 담았습니다.",
    songs: [
      {
        id: "jul-1",
        title: "여름 냇가",
        themeReason:
          "초등 1학년 즐거운 생활 수록곡입니다. 시원한 냇가의 정취를 노래해 여름 자연 탐구에 최적입니다.",
        keyWords: ["여름", "냇가", "교과서", "1학년"],
        recommendedActivity:
          "파란 천을 냇가로 깔고 물고기 낚시 놀이를 하며 불러 보세요.",
        youtubeSearchQuery: "동요 여름 냇가 초등 1학년",
        lyricsPreview: "여름 냇가에 물장구 치며",
      },
      {
        id: "jul-2",
        title: "햇볕은 쨍쨍",
        themeReason:
          "초등 1학년 교과서 수록곡(홍난파)입니다. 여름 날씨와 건강 수칙(모자·그늘) 지도에 바로 활용할 수 있습니다.",
        keyWords: ["햇볕", "여름", "교과서", "1학년"],
        recommendedActivity:
          "더울 때/시원할 때 옷차림 카드를 분류한 뒤 노래로 여름 건강 수칙을 정리해 보세요.",
        youtubeSearchQuery: "동요 햇볕은 쨍쨍 초등 1학년",
        lyricsPreview: "햇볕은 쨍쨍 모래는 반짝",
      },
      {
        id: "jul-3",
        title: "여름방학",
        themeReason:
          "초등 2학년 음악 교과서 수록곡입니다. 방학의 즐거움과 여름 활동을 노래해 7~8월 주제에 잘 맞습니다.",
        keyWords: ["방학", "여름", "교과서", "2학년"],
        recommendedActivity:
          "내가 하고 싶은 여름방학 계획을 그림으로 그리고 노래로 소개해 보세요.",
        youtubeSearchQuery: "동요 여름방학 초등 2학년",
        lyricsPreview: "신나는 여름방학이 왔어요",
      },
      {
        id: "jul-4",
        title: "두꺼비집이 여물까",
        themeReason:
          "초등 1학년 교과서 전래동요입니다. 여름철 비·진흙놀이·감각놀이와 연결하기 좋습니다.",
        keyWords: ["전래동요", "두꺼비", "교과서", "1학년"],
        recommendedActivity:
          "진흙(또는 밀가루 반죽)으로 '두꺼비 집'을 만들며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 두꺼비집이 여물까 초등 1학년",
        lyricsPreview: "두꺼비집이 여물까 비 오면 무너질까",
      },
      {
        id: "jul-5",
        title: "퐁당퐁당",
        themeReason:
          "유치원에서 물놀이·여름 감각 활동에 빼놓을 수 없는 동요입니다. 초등 저학년도 쉽게 따라 부릅니다.",
        keyWords: ["물놀이", "유치원", "퐁당", "여름"],
        recommendedActivity:
          "대야에 물을 담고 돌·나뭇잎을 띄우며 '퐁당' 소리를 내 보고 불러 보세요.",
        youtubeSearchQuery: "동요 퐁당퐁당",
        lyricsPreview: "퐁당퐁당 돌을 던지면",
      },
      {
        id: "jul-6",
        title: "개구리",
        themeReason:
          "초등 1학년 교과서에도 실리는 친숙한 동요로, 여름 연못·올챙이 관찰과 잘 이어집니다. 유치원 율동에도 좋아요.",
        keyWords: ["개구리", "여름", "교과서", "율동"],
        recommendedActivity:
          "개구리 뛰는 율동을 하며 부르고, 올챙이→개구리 성장 그림을 연결해 보세요.",
        youtubeSearchQuery: "동요 개구리 초등 1학년",
        lyricsPreview: "개굴개굴 개구리 노래를 한다",
      },
    ],
  },

  "아름다운 우리나라": {
    theme: "9월 놀이주제 [아름다운 우리나라]",
    introduction:
      "초등 2학년 교과서 「아름다운 나라」와 전래·전통놀이 동요, 유치원에서 부르는 우리나라 자랑 동요를 모아 두었습니다.",
    songs: [
      {
        id: "sep-1",
        title: "아름다운 나라",
        themeReason:
          "초등 2학년 음악 교과서 수록곡입니다. 우리나라의 아름다움을 노래해 9월 '우리나라' 주제에 가장 잘 맞습니다.",
        keyWords: ["우리나라", "교과서", "2학년", "자랑"],
        recommendedActivity:
          "우리나라 지도에 산·강을 스티커로 붙이며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 아름다운 나라 초등 2학년",
        lyricsPreview: "아름다운 이 나라 내 나라",
      },
      {
        id: "sep-2",
        title: "추석 날",
        themeReason:
          "초등 저학년 가을·명절 단원에서 자주 다루는 동요입니다. 우리나라 명절(추석)과 전통을 친숙하게 익히게 합니다.",
        keyWords: ["추석", "명절", "전통", "초등"],
        recommendedActivity:
          "송편 만들기(밀가루·점토)나 차례상 역할놀이 후 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 추석 날 초등",
        lyricsPreview: "추석 날 밝은 달빛 아래",
      },
      {
        id: "sep-3",
        title: "가나다 노래",
        themeReason:
          "유치원·초등에서 한글을 익힐 때 쓰는 대표 동요입니다. 한글날·우리나라 언어 자랑과 연결하기 좋습니다.",
        keyWords: ["한글", "가나다", "유치원", "한글날"],
        recommendedActivity:
          "가나다 카드를 순서대로 놓으며 부르고, 내 이름 속 글자를 찾아보세요.",
        youtubeSearchQuery: "동요 가나다 노래",
        lyricsPreview: "가나다라마바사 아자차카타파하",
      },
      {
        id: "sep-4",
        title: "대문놀이",
        themeReason:
          "초등·유치원에서 전통놀이 노래로 많이 쓰는 전래동요입니다. 우리나라 놀이 문화를 몸으로 익히게 합니다.",
        keyWords: ["전래놀이", "대문놀이", "전통", "국악"],
        recommendedActivity:
          "두 줄로 대문을 만들고 '문지기 문지기 문 열어라' 놀이를 하며 불러 보세요.",
        youtubeSearchQuery: "동요 대문놀이 전래",
        lyricsPreview: "문지기 문지기 문 열어라",
      },
      {
        id: "sep-5",
        title: "무궁화",
        themeReason:
          "유치원·초등에서 나라꽃·우리나라 상징을 배울 때 부르는 동요입니다. 전통·국가 상징 탐구와 잘 맞습니다.",
        keyWords: ["무궁화", "나라꽃", "유치원", "상징"],
        recommendedActivity:
          "무궁화 색칠하기 후 '무궁화 꽃이 피었습니다' 놀이와 연결해 보세요.",
        youtubeSearchQuery: "동요 무궁화",
        lyricsPreview: "무궁화 삼천리 화려강산",
      },
      {
        id: "sep-6",
        title: "태극기",
        themeReason:
          "유치원·초등 저학년 나라 사랑 교육에 쓰는 동요입니다. 태극기를 존중하는 마음을 노래로 키워 줍니다.",
        keyWords: ["태극기", "나라", "유치원", "존중"],
        recommendedActivity:
          "태극기 색칠·바르게 다는 법을 이야기한 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 태극기",
        lyricsPreview: "태극기 바람에 펄럭입니다",
      },
      {
        id: "sep-7",
        title: "끝말잇기 이야기",
        themeReason:
          "한글·우리말 놀이인 끝말잇기를 노래로 즐기며, 9월 우리나라·한글 주제와 잘 연결됩니다. 유치원·초등 저학년 모두 재미있게 따라 부를 수 있습니다.",
        keyWords: ["끝말잇기", "한글", "우리말", "놀이"],
        recommendedActivity:
          "노래 후 교실에서 진짜 끝말잇기 놀이를 이어가 보세요. 우리나라·한글 관련 단어로만 이어가기 미션을 줘도 좋습니다.",
        youtubeSearchQuery: "동요 끝말잇기 이야기",
        lyricsPreview: "끝말잇기 이야기 시작해요",
      },
    ],
  },

  "풍성한 가을": {
    theme: "10월 놀이주제 [풍성한 가을]",
    introduction:
      "초등 1학년 교과서의 「파란 가을 하늘」「정다운 이웃」 등 가을 수록곡과, 유치원 단풍·열매 동요를 함께 추천합니다.",
    songs: [
      {
        id: "oct-1",
        title: "파란 가을 하늘",
        themeReason:
          "초등 1학년 즐거운 생활 수록곡입니다. 높고 파란 가을 하늘을 노래해 가을 도입에 가장 잘 맞습니다.",
        keyWords: ["가을하늘", "교과서", "1학년", "계절"],
        recommendedActivity:
          "창밖 가을 하늘을 관찰하고 느낌을 말한 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 파란 가을 하늘 초등 1학년",
        lyricsPreview: "파란 가을 하늘 높고도 푸른 하늘",
      },
      {
        id: "oct-2",
        title: "정다운 이웃",
        themeReason:
          "초등 1학년 교과서 가을 단원 수록곡입니다. 수확·이웃과 나누는 마음을 다루어 풍성한 가을 주제와 연결됩니다.",
        keyWords: ["이웃", "나눔", "교과서", "1학년"],
        recommendedActivity:
          "이웃에게 전하는 감사 카드를 만들고 노래로 마음을 표현해 보세요.",
        youtubeSearchQuery: "동요 정다운 이웃 초등 1학년",
        lyricsPreview: "정다운 이웃과 함께해요",
      },
      {
        id: "oct-3",
        title: "가을바람",
        themeReason:
          "초등 저학년·유치원 가을 단원에서 자주 부르는 동요입니다. 가을바람과 낙엽을 감각적으로 느끼게 합니다.",
        keyWords: ["가을바람", "낙엽", "유치원", "초등"],
        recommendedActivity:
          "낙엽을 모아 바람에 날리며(또는 부채로) 율동과 함께 불러 보세요.",
        youtubeSearchQuery: "동요 가을바람",
        lyricsPreview: "살랑살랑 가을바람 불어온다",
      },
      {
        id: "oct-4",
        title: "잠자리 꽁꽁",
        themeReason:
          "초등·유치원 가을 곤충 탐구에 쓰는 친숙한 동요입니다. 잠자리 관찰·율동과 잘 이어집니다.",
        keyWords: ["잠자리", "가을", "곤충", "유치원"],
        recommendedActivity:
          "잠자리 날개 율동을 만들고, 가을 곤충 도감을 보며 불러 보세요.",
        youtubeSearchQuery: "동요 잠자리 꽁꽁",
        lyricsPreview: "잠자리 꽁꽁 잠자리 꽁꽁",
      },
      {
        id: "oct-5",
        title: "도토리",
        themeReason:
          "유치원에서 가을 열매 주제에 가장 많이 부르는 동요입니다. 초등 저학년 바깥놀이·주워 오기와도 잘 맞습니다.",
        keyWords: ["도토리", "열매", "유치원", "가을"],
        recommendedActivity:
          "도토리를 모아 크기별로 분류하고 노래에 맞춰 세어 보세요.",
        youtubeSearchQuery: "동요 도토리",
        lyricsPreview: "도토리 도토리 잘도 굴러간다",
      },
      {
        id: "oct-6",
        title: "단풍",
        themeReason:
          "유치원·초등에서 가을 색·단풍 관찰과 함께 부르는 동요입니다. 미술(단풍잎 찍기)과 바로 연결됩니다.",
        keyWords: ["단풍", "가을색", "유치원", "관찰"],
        recommendedActivity:
          "단풍잎 스탬프 미술 후 작품 앞에서 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 단풍",
        lyricsPreview: "단풍잎이 흩날리며 춤을 추네요",
      },
    ],
  },

  "세계 여러 나라": {
    theme: "11월 놀이주제 [세계 여러 나라]",
    introduction:
      "초등 2학년 외국 민요 「소년 한스」와 세계 인사·율동 동요, 유치원에서 즐기는 세계 동요를 모아 다양성·존중을 키우도록 했습니다.",
    songs: [
      {
        id: "nov-1",
        title: "소년 한스",
        themeReason:
          "초등 2학년 음악 교과서에 실리는 독일 민요입니다. 세계 여러 나라 음악을 만나는 입문으로 적합합니다.",
        keyWords: ["독일민요", "교과서", "2학년", "세계"],
        recommendedActivity:
          "독일의 위치·국기를 찾아본 뒤, 간단한 율동과 함께 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 소년 한스 초등 2학년",
        lyricsPreview: "소년 한스가 길을 가다가",
      },
      {
        id: "nov-2",
        title: "세계의 아침 인사",
        themeReason:
          "초등·유치원 세계 문화 단원에서 널리 쓰는 동요입니다. 여러 나라 인사말을 배우며 존중하는 마음을 키웁니다.",
        keyWords: ["인사", "세계", "언어", "유치원"],
        recommendedActivity:
          "나라별 인사말 카드를 들고 친구에게 인사하는 릴레이를 해 보세요.",
        youtubeSearchQuery: "동요 세계의 아침 인사",
        lyricsPreview: "헬로 봉주르 곤니치와 안녕하세요",
      },
      {
        id: "nov-3",
        title: "머리 어깨 무릎 발",
        themeReason:
          "세계적으로 알려진 율동 동요로, 유치원·초등 모두 즐깁니다. 몸의 이름과 영어 단어를 자연스럽게 익힙니다.",
        keyWords: ["율동", "신체", "세계동요", "유치원"],
        recommendedActivity:
          "점점 빠르게/느리게 불러 보며 신체 조절 게임을 해 보세요.",
        youtubeSearchQuery: "동요 머리 어깨 무릎 발",
        lyricsPreview: "머리 어깨 무릎 발 무릎 발",
      },
      {
        id: "nov-4",
        title: "곰 세 마리",
        themeReason:
          "세계적으로 사랑받는 동요로 유치원 필수곡입니다. 초등 저학년 역할놀이와 함께 세계 공통의 즐거움을 나눕니다.",
        keyWords: ["곰", "세계동요", "유치원", "역할놀이"],
        recommendedActivity:
          "아빠·엄마·아기 곰 역할극을 하며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 곰 세 마리",
        lyricsPreview: "곰 세 마리가 한 집에 있어",
      },
      {
        id: "nov-5",
        title: "반짝반짝 작은별",
        themeReason:
          "세계 공통의 동요(Twinkle Twinkle)로, 유치원·초등에서 모두 부릅니다. 세계가 같은 멜로디를 나눈다는 이야기로 확장하기 좋습니다.",
        keyWords: ["작은별", "세계동요", "유치원", "초등"],
        recommendedActivity:
          "별 모양 카드를 들고 반짝이는 율동을 하며 불러 보세요.",
        youtubeSearchQuery: "동요 반짝반짝 작은별",
        lyricsPreview: "반짝반짝 작은별 아름답게 비치네",
      },
      {
        id: "nov-6",
        title: "열 작은 인디언",
        themeReason:
          "유치원에서 숫자·손가락 놀이와 함께 부르는 세계 동요입니다. 셈하기와 세계 문화 흥미를 동시에 자극합니다.",
        keyWords: ["숫자", "세계동요", "유치원", "손가락"],
        recommendedActivity:
          "손가락으로 1~10을 세며 부르고, 인형 10명으로 상황극을 해 보세요.",
        youtubeSearchQuery: "동요 열 작은 인디언",
        lyricsPreview: "하나 둘 셋 작은 인디언",
      },
    ],
  },

  "새하얀 겨울": {
    theme: "12월 놀이주제 [새하얀 겨울]",
    introduction:
      "초등 1학년 교과서 「눈사람」「달두 달두 밝다」와 유치원 겨울·연말 동요를 담아, 겨울 감각과 따뜻한 마무리를 돕습니다.",
    songs: [
      {
        id: "dec-1",
        title: "눈사람",
        themeReason:
          "초등 1학년 즐거운 생활 수록곡입니다. 눈사람 만들기의 즐거움을 노래해 겨울 주제에 가장 잘 맞습니다.",
        keyWords: ["눈사람", "교과서", "1학년", "겨울"],
        recommendedActivity:
          "솜·색종이로 눈사람을 만들고 작품 앞에서 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 눈사람 초등 1학년 교과서",
        lyricsPreview: "동그란 눈사람 하나가 되었네요",
      },
      {
        id: "dec-2",
        title: "달두 달두 밝다",
        themeReason:
          "초등 1학년 교과서 전래동요입니다. 겨울밤·보름달의 정취를 느끼며 유치원에서도 따라 부르기 쉽습니다.",
        keyWords: ["전래동요", "달", "교과서", "1학년"],
        recommendedActivity:
          "교실 불을 살짝 낮추고 달 조명을 만든 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 달두 달두 밝다 초등 1학년",
        lyricsPreview: "달두 달두 밝다 밝다",
      },
      {
        id: "dec-3",
        title: "꼬마 눈사람",
        themeReason:
          "유치원·초등에서 겨울 조형·바깥놀이와 함께 많이 부르는 동요입니다. 교과서 「눈사람」과 짝지어 쓰기 좋습니다.",
        keyWords: ["눈사람", "유치원", "겨울놀이", "만들기"],
        recommendedActivity:
          "하얀 색종이로 꼬마 눈사람을 접거나 붙여 만들고 노래로 소개해 보세요.",
        youtubeSearchQuery: "동요 꼬마 눈사람",
        lyricsPreview: "꼬마 눈사람 하나가 되었네요",
      },
      {
        id: "dec-4",
        title: "썰매",
        themeReason:
          "유치원에서 신나는 겨울놀이를 노래할 때 쓰는 동요입니다. 초등 저학년 신체활동·리듬 표현에도 좋아요.",
        keyWords: ["썰매", "겨울놀이", "유치원", "율동"],
        recommendedActivity:
          "매트 위에서 앉아서 미끄러지기 흉내(썰매 율동)를 하며 불러 보세요.",
        youtubeSearchQuery: "동요 썰매",
        lyricsPreview: "썰매를 타고 바람 가르며",
      },
      {
        id: "dec-5",
        title: "고드름",
        themeReason:
          "유치원·초등 겨울 관찰 활동에 자주 쓰는 동요입니다. 고드름·얼음 등 겨울철 자연을 언어로 표현하게 돕습니다.",
        keyWords: ["고드름", "얼음", "유치원", "관찰"],
        recommendedActivity:
          "투명 비닐·반짝이로 고드름을 만들어 창문에 붙인 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 고드름",
        lyricsPreview: "고드름 고드름 수정 고드름",
      },
      {
        id: "dec-6",
        title: "루돌프 사슴코",
        themeReason:
          "유치원·초등 연말·크리스마스 행사에서 가장 많이 부르는 겨울 동요입니다. 한 해를 즐겁게 마무리하기 좋습니다.",
        keyWords: ["루돌프", "크리스마스", "유치원", "연말"],
        recommendedActivity:
          "빨간 코 스티커를 붙이고 루돌프 율동을 만들어 발표해 보세요.",
        youtubeSearchQuery: "동요 루돌프 사슴코",
        lyricsPreview: "루돌프 사슴코는 매우 반짝이는 코",
      },
    ],
  },

  "인성송": {
    theme: "인성 [인성송]",
    introduction:
      "마음을 따뜻하게 키워 주는 인성 동요들입니다. 수업 시작·종례·친구 관계 활동에 바로 활용해 보세요.",
    songs: [
      {
        id: "insung-5",
        title: "행복이 된대요",
        themeReason:
          "작은 실천이 모여 행복이 된다는 메시지를 전하는 인성 동요입니다. 긍정적인 교실 분위기와 마음 나누기에 잘 어울립니다.",
        keyWords: ["행복", "인성", "긍정", "실천"],
        recommendedActivity:
          "오늘 나를 행복하게 한 일·친구를 행복하게 해 준 일을 이야기한 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 행복이 된대요",
        lyricsPreview: "작은 마음이 모여 행복이 된대요",
      },
      {
        id: "insung-6",
        title: "너라서 참 좋은날",
        themeReason:
          "친구가 있어 좋은 날을 노래하며 우정과 감사의 마음을 키워 줍니다. 친구 관계·학급 단합 활동에 적합합니다.",
        keyWords: ["친구", "감사", "우정", "인성"],
        recommendedActivity:
          "옆 친구에게 '너라서 좋아' 칭찬 쪽지를 전한 뒤 다 같이 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 너라서 참 좋은날",
        lyricsPreview: "너라서 참 좋은날 함께라서 행복해",
      },
      {
        id: "insung-7",
        title: "틀린 게 아니야",
        themeReason:
          "실수해도 괜찮다는 위로와 용기를 담은 인성 동요입니다. 자존감·실패를 받아들이는 마음 기르기에 좋아요.",
        keyWords: ["자존감", "용기", "위로", "인성"],
        recommendedActivity:
          "틀려도 다시 해 본 경험을 나눈 뒤, '괜찮아, 다시 하면 돼'를 외치며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 틀린 게 아니야",
        lyricsPreview: "틀린 게 아니야 다시 하면 돼",
      },
      {
        id: "insung-8",
        title: "세잎클로버",
        themeReason:
          "소중함과 희망을 세잎클로버에 비유해 노래하는 동요입니다. 나를 아끼고 친구를 소중히 여기는 인성 주제에 잘 맞습니다.",
        keyWords: ["소중함", "희망", "인성", "나"],
        recommendedActivity:
          "세잎클로버 모양에 나의 장점 세 가지를 적어 교실에 붙여 보세요.",
        youtubeSearchQuery: "동요 세잎클로버",
        lyricsPreview: "세잎클로버 찾아 헤매던 그날",
      },
      {
        id: "insung-9",
        title: "꿈이 자라는 밭",
        themeReason:
          "꿈을 가꾸는 마음을 노래해 자기이해·미래 희망 활동과 잘 연결됩니다. 유치원·초등 인성·진로 도입에 적합합니다.",
        keyWords: ["꿈", "희망", "성장", "인성"],
        recommendedActivity:
          "내 꿈을 그림으로 그려 '꿈의 밭' 게시판에 붙인 뒤 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 꿈이 자라는 밭",
        lyricsPreview: "꿈이 자라는 밭에 씨앗을 심어요",
      },
      {
        id: "insung-10",
        title: "나무가 된다면",
        themeReason:
          "나무가 되어 나누고 지켜 주는 마음을 노래합니다. 배려·나눔·환경 사랑과 인성을 함께 다루기 좋습니다.",
        keyWords: ["나눔", "배려", "나무", "인성"],
        recommendedActivity:
          "내가 나무가 된다면 누구에게 무엇을 해 줄지 이야기하며 노래를 불러 보세요.",
        youtubeSearchQuery: "동요 나무가 된다면",
        lyricsPreview: "내가 만약 나무가 된다면",
      },
    ],
  },
};

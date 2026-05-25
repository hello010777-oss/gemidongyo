# 유초이음 놀이주제별 맞춤 동요 추천앱

유치원 및 초등학교 저학년(1~2학년) 선생님을 위한 AI 동요 큐레이터입니다.  
놀이 주제를 입력하면 Google Gemini AI가 교육과정에 맞는 동요를 추천해 드립니다.

## 기술 스택

- **Frontend**: React 19, Vite 6, Tailwind CSS v4, Motion
- **Backend**: Express (로컬 개발) / Vercel Serverless Functions (배포)
- **AI**: Google Gemini 2.5 Flash (`@google/genai`)

---

## 로컬 개발 환경 실행

**필수 조건:** Node.js 18 이상

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 환경 변수 설정:
   ```bash
   cp .env.example .env.local
   ```
   `.env.local` 파일을 열고 `GEMINI_API_KEY`에 실제 API 키를 입력하세요.  
   API 키는 [Google AI Studio](https://aistudio.google.com/apikey)에서 발급받을 수 있습니다.

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:3000` 접속

---

## GitHub 업로드

1. GitHub에서 새 저장소(Repository) 생성

2. 로컬 프로젝트를 GitHub에 연결 및 푸시:
   ```bash
   git init
   git add .
   git commit -m "초기 커밋: 동요찾기 앱"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[repo-name].git
   git push -u origin main
   ```

> `.env.local` 파일은 `.gitignore`에 포함되어 있어 API 키가 GitHub에 올라가지 않습니다.

---

## Vercel 배포

### 방법 1: Vercel 웹 대시보드 (권장)

1. [vercel.com](https://vercel.com)에 접속하여 GitHub 계정으로 로그인
2. **Add New → Project** 클릭
3. GitHub 저장소 선택 후 **Import**
4. **Environment Variables** 섹션에서 환경 변수 추가:
   - `GEMINI_API_KEY` = `실제_API_키_값`
5. **Deploy** 클릭

Vercel이 자동으로 `vite build`를 실행하고 `api/recommend.ts`를 서버리스 함수로 배포합니다.

### 방법 2: Vercel CLI

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포 (처음 실행 시 로그인 및 프로젝트 연결)
vercel

# 프로덕션 배포
vercel --prod
```

CLI로 배포할 때 환경 변수 설정:
```bash
vercel env add GEMINI_API_KEY
```

---

## 프로젝트 구조

```
동요찾기/
├── api/
│   └── recommend.ts      # Vercel 서버리스 API 함수
├── src/
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── components/
│   │   └── SongCard.tsx   # 동요 카드 컴포넌트
│   ├── data/
│   │   └── themes.ts      # 월별 놀이 주제 데이터
│   ├── types.ts           # TypeScript 타입 정의
│   └── index.css          # 글로벌 스타일
├── server.ts              # 로컬 개발용 Express 서버
├── vercel.json            # Vercel 배포 설정
├── vite.config.ts         # Vite 빌드 설정
└── package.json
```

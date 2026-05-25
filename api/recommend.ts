import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { theme, excludeSongs } = req.body;
    if (!theme) {
      return res.status(400).json({ error: "놀이 주제가 입력되지 않았습니다." });
    }

    const excludeText =
      excludeSongs &&
      Array.isArray(excludeSongs) &&
      excludeSongs.length > 0
        ? `\n★ 중복 제외 원칙: 다음 곡들은 이미 제시되어 사용자가 제외하거나 확인한 곡이므로 **이번엔 절대 배제하고 새로운 노래로만 추천해 주세요**: ${excludeSongs.join(", ")}`
        : "";

    const prompt = `유치원(만 3~5세) 및 초등학교 저학년(1~2학년)이 배우고 부르기에 가장 잘 어울리는 대표 동요 5~6곡을 세심하게 추천해 주세요.
${excludeText}

★ 극도로 중요한 테마 정합성 원칙:
- 추천해 주는 모든 노래는 반드시 사용자가 입력하거나 선택한 구체적인 놀이 주제인 "${theme}"(와)과 **직접적이고 명확하게 연관**되어야 합니다.
- 예컨대 "우주"나 "행성", "로켓" 등의 주제가 지정되었다면 반드시 우주여행, 행성, 별, 외공상 여행 등 과학/우주 콘셉트의 실제 존재하는 우수한 아동 동요(예: "우주 자전거", "로켓", "별나라 여행", "은하수 여행", "달나라 열차" 등)만 엄선해야 하며, 전혀 다른 봄꽃이나 일상 동요 등 뚱딴지같은 매칭을 섞어서는 절대 안 됩니다. 
- 한 단어라도 주제의 핵심 키워드가 노래의 중심 소재와 100% 한몸처럼 일치해야 하며, 억지 연결은 엄격히 금지됩니다.

★ 매우 중요한 연령 및 선곡 원칙:
- 대상 연령대: 유치원 ~ 초등 1·2학년 (너무 아기 같지도 않고, 그렇다고 너무 어렵지도 않은 중간의 풍성한 음악 수준)
- 영유아 중심의 너무 단순반복적인 동요(예: 뽀로로, 핑크퐁, 상어가족 등 '애기 같은' 느낌)는 가급적 제외해 주세요.
- 동시에 초등학교 고학년 수준의 너무 길고 가창이 어려운 다성부 합창곡이나 고난도 음역대 노래도 엄격히 배제해 주세요 (쉬우면서도 고품격인 난이도의 동요를 원합니다).
- 초등학교 1학년 국어 교과서, 통합교과서(봄·여름·가을·겨울), 혹은 1학년 권장 도서 및 유명 동화책(예: 수박 수영장, 알사탕 등)에 수록되거나 잘 연계되는 친숙하고 수준 높은 아름다운 창작 동요를 대거 포함해 주십시오.
- 예시: 3월 '유치원과 친구'에는 친구 사귀기를 다룬 "친구가 되는 멋진 방법", 4월 '봄'에는 싱그러운 가사와 적절한 선율의 "행복의 씨앗", 5월에는 자아 존중감을 키워주는 "이 세상의 모든 것들을 다 준다 해도 (누구보다 소중해 / 이 세상 누구보다 소중한 나)" 등이 모범적인 선곡 기준입니다.

각 곡마다 다음 정보를 성실하고 자세하게 작성해 주세요:
1. 곡 제목
2. 노래 추천 이유 (유치원/초등 1,2학년 발달에 어떻게 어울리는지, 어떻게 "${theme}" 주제 및 교과서/동화책과 완벽히 정밀 매칭되는지 2-3문장 설명)
3. 대표적인 연계 놀이 활동 제안 (교실에서 선생님이 초등 1~2학년 및 유치원생들과 즉시 수업에 활용 가능한 구체적이고 적절한 수준의 놀이 활동 제안)
4. 관련 키워드 3~4개
5. 유튜브 검색어 (유튜브에서 우수한 가창 동요나 교과서 가창 영상이 가장 먼저 나오도록 키워드 포맷 보장, 예: '동요 친구가 되는 멋진 방법')
6. 가사 요약/한 줄 preview (멜로디를 직관적으로 상기시켜 줄 대표적인 아름다운 핵심 가사 한 구절)`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction:
          "당신은 유치원 및 초등학교 저학년(1~2학년) 교육 과정 전문가이자 동요 큐레이터입니다. 너무 영유아 중심의 단순한 아동 동요뿐 아니라, 초등학교 저학년 교과서(통합교과 및 1학년 국어), 1학년 동화책 수록 및 권장 작가 연계 동요, 그리고 부르기 쉬우되 음악적 아름다움을 지닌 품격 있고 싱그러운 창작 동요들을 융합하여 큐레이션해야 합니다. 출력은 반드시 한국어로 작성하고, JSON 형식으로 지정된 스키마에 정확히 맞추어 주시기 바랍니다.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            theme: {
              type: Type.STRING,
              description: "입력된 놀이 주제",
            },
            introduction: {
              type: Type.STRING,
              description:
                "선생님을 위한 놀이 주제와 연동된 응원 메시지 및 해당 추천 동요 패키지의 교육적 목표 (2-3문장)",
            },
            songs: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "동요 제목" },
                  themeReason: {
                    type: Type.STRING,
                    description:
                      "놀이 주제와 융합되는 구체적인 이유 및 정서적/인지적 발달 효과",
                  },
                  keyWords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "주요 어휘나 노래 관련 태그 키워드 3~4개",
                  },
                  recommendedActivity: {
                    type: Type.STRING,
                    description:
                      "교실에서 아이들과 손쉽게 실천할 수 있는 율동(손유희), 게임, 미술 활동 등 실질적 수업 꿀팁",
                  },
                  youtubeSearchQuery: {
                    type: Type.STRING,
                    description:
                      "유튜브에서 곧바로 검색할 수 있는 보장된 키워드 (예: '동요 봄나들이')",
                  },
                  lyricsPreview: {
                    type: Type.STRING,
                    description:
                      "멜로디를 한눈에 떠올릴 주옥같은 대표 가사 한 줄 혹은 후렴 부분",
                  },
                },
                required: [
                  "title",
                  "themeReason",
                  "keyWords",
                  "recommendedActivity",
                  "youtubeSearchQuery",
                  "lyricsPreview",
                ],
              },
            },
          },
          required: ["theme", "introduction", "songs"],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("AI가 응답 신호를 반환하지 못했습니다.");
    }

    const result = JSON.parse(responseText.trim());
    return res.status(200).json(result);
  } catch (error: any) {
    console.error("AI Recommendation error:", error);
    return res.status(500).json({
      error:
        error.message || "추천 동요를 생성하는 중 서버 내부 문제가 발생했습니다.",
    });
  }
}

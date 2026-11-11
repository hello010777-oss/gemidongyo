import type { VercelRequest, VercelResponse } from "@vercel/node";

/** API 추천은 더 이상 사용하지 않습니다. 월별 동요는 프론트 로컬 데이터를 사용합니다. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(410).json({
    error:
      "AI 추천 API는 종료되었습니다. 앱에서 월별 주제를 선택해 추천 동요를 확인해 주세요.",
  });
}

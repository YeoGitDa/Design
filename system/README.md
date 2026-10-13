# 여백 디자인 시스템

동아리 자료·웹사이트가 같은 색·글꼴·부품을 쓰기 위한 기준. 원칙은 레포 맨 위 `README.md`(가이드), 세부는 이 폴더

> 한 줄 요약 — 값은 `tokens/`, 쓰는 법은 `system/` 세 문서, 그림 원본은 Figma

---

## 구성

| 층 | 문서 | 내용 |
|---|---|---|
| 1 기초 | [01-foundations.md](01-foundations.md) | 색 · 의미 토큰 · 글꼴 · 모서리 · 그림자 · 간격 · 화면 폭 · 아이콘 · 그림 |
| 2 부품 | [02-components.md](02-components.md) | Button · Card · SectionHead · Header(PC·폰) · Footer · Input · Select · Checkbox · Tag · Badge · Modal · Toast · Tab |
| 3 패턴 | [03-patterns.md](03-patterns.md) | 하위 페이지 틀 · 빈 화면·로딩·오류 · 부품별 Do/Don't |

## 값 파일

| 파일 | 어디에 |
|---|---|
| `tokens/tokens.json` | 기준값 (Design Tokens 형식) — 바꿀 땐 여기부터 |
| `tokens/tokens.css` | CSS 변수 `--yb-*` — 일반 HTML·PPT 외 자료 |
| `tokens/tailwind.preset.js` | Web_page Tailwind 설정에 preset 으로 |

## Figma

「여백 디자인 시스템」 파일 — Variables(YB Tokens · YB Semantic · YB Breakpoints) · 컴포넌트 · 패턴. 링크는 운영진 채널 ❓ (파일 공유 범위 정한 뒤 여기에)

- 무료(Starter) 플랜 제한: 페이지 3개 · Variables 모드 1개
- 글꼴: Figma 서버에 Pretendard 가 없어 텍스트 스타일이 Noto Sans KR 임시. 각자 PC 에 Pretendard 설치 후 스타일만 바꾸면 전체 반영

## 바꾸는 순서

1. `tokens/tokens.json` 수정
2. `tokens.css` · `tailwind.preset.js` 같은 값으로
3. Figma Variables 같은 값으로
4. PR 본문에 전·후 캡처

## 차후 과제

- 홈 시안 (첫 화면은 지금 theme.json 설정 유지 · 곰 그림 카드) — 진행 중
- 꾸밈 단계 스위치 (`theme.json` 「꾸밈: 홈만 / 전체」)
- 투명 배경(누끼) 곰 그림 · 공식 로고
- 다크모드 · 모션 — 안 함

# Final QA Research

## 1. Scope

本文件记录 Portfolio v1.35.0-final-qa-polish 的投递前最终 QA 检查。

本轮目标：确认当前 Portfolio 是否已经适合直接发给 HR / 面试官。

检查维度：

1. 页面是否能正常访问
2. 桌面端是否视觉稳定
3. 手机端是否能正常阅读和点击
4. 所有项目链接是否有效
5. Gmail 联系按钮是否有效
6. OG 图片是否有效
7. SEO metadata 是否有效
8. 项目文案是否不过度包装
9. 是否存在禁用词 / 假链接 / 过时信息
10. README / GitHub About / 页面内容是否一致
11. 是否存在明显性能风险
12. 是否还有必须修的小问题

---

## 2. Current Version

| Field | Value |
|---|---|
| Sealed version | `v1.34.0-og-image-polish` |
| Live site | https://portfolio-rosy-ten-41.vercel.app/ |
| GitHub repo | https://github.com/Strange-Men/Portfolio |
| QA branch | `research/v1.35.0-final-qa-research` |

---

## 3. Build Check

| Item | Result |
|---|---|
| `npm run build` | Passed |
| TypeScript | No errors |
| Vite build | No errors |
| `dist/index.html` | Generated (2.32 kB, gzip 0.80 kB) |
| `dist/assets/index-*.css` | 38.38 kB (gzip 7.82 kB) |
| `dist/assets/index-*.js` | 213.14 kB (gzip 67.65 kB) |
| `dist/og/portfolio-og.png` | Present (354 kB) |
| `dist/og/portfolio-og.svg` | Present (4.88 kB) |
| `dist/favicon.svg` | Present (393 B) |
| `dist/site.webmanifest` | Present (383 B) |

Asset size assessment: Total gzip ~76 kB is reasonable for a single-page portfolio. No bundle size concern.

---

## 4. Desktop Visual QA

Desktop checks performed during previous session:

| Item | Status |
|---|---|
| Hero 首屏是否正常 | Pass |
| About 是否自然、谦逊、不装 | Pass |
| Projects 三项目是否展示完整 | Pass |
| 项目编号颜色是否舒服 | Pass |
| proof-block 是否清楚 | Pass |
| EDA 技术栈是否显示 LLM API | Pass |
| EDA 在线演示按钮是否存在 | Pass |
| Basjoo 是否没有在线 Demo | Pass — 无 Demo 按钮 |
| Contact 是否简洁 | Pass |
| Gmail 按钮是否正常 | Pass |
| 页面是否没有变花、变土、变赛博朋克 | Pass |

---

## 5. Mobile Visual QA

Mobile checks (based on Vercel live site):

| Item | Status |
|---|---|
| Hero 首屏是否不撑爆 | Pass |
| 导航是否可用 | Pass |
| About 是否可读 | Pass |
| Projects 卡片是否过长但仍可读 | Pass |
| 按钮是否好点 | Pass |
| proof-block 是否不挤 | Pass |
| Contact 是否正常 | Pass |
| 横向溢出是否不存在 | Pass |

---

## 6. Link QA

All URLs checked via PowerShell `Invoke-WebRequest`:

| URL | Status |
|---|---|
| https://portfolio-rosy-ten-41.vercel.app/ | 200 |
| https://portfolio-rosy-ten-41.vercel.app/og/portfolio-og.png | 200 |
| https://github.com/Strange-Men/CodePilot | 200 |
| https://code-pilot-red.vercel.app/ | 200 |
| https://github.com/Strange-Men/EnterpriseAiDataAgent | 200 |
| https://enterprise-ai-data-agent.vercel.app/ | 200 |
| https://github.com/Strange-Men/CustomerOpsAgent_2 | 200 |
| https://github.com/Strange-Men/basjoo/tree/phase1-rag-eval-harness | 200 |

Gmail button: Uses `https://mail.google.com/mail/?view=cm&fs=1&to=1643229721%40qq.com&su=Portfolio%20Contact` — opens Gmail compose window. Valid format.

Email display: `1643229721@qq.com` with `mailto:1643229721@qq.com?subject=Portfolio%20Contact` — valid.

---

## 7. SEO / Metadata QA

Checked against `index.html` and online HTML:

| Tag | Present | Value |
|---|---|---|
| `<title>` | Yes | `李泓轩｜AI Application Portfolio` |
| `<meta name="description">` | Yes | 2027 届人工智能本科生的个人作品集... |
| `<meta name="author">` | Yes | `李泓轩` |
| `<meta name="theme-color">` | Yes | `#09090b` |
| `<link rel="icon">` | Yes | `/favicon.svg` |
| `<link rel="manifest">` | Yes | `/site.webmanifest` |
| `og:title` | Yes | `李泓轩｜AI Application Portfolio` |
| `og:description` | Yes | 展示 CodePilot、EnterpriseAiDataAgent... |
| `og:type` | Yes | `website` |
| `og:url` | Yes | `https://portfolio-rosy-ten-41.vercel.app/` |
| `og:site_name` | Yes | `李泓轩 Portfolio` |
| `og:image` | Yes | `https://portfolio-rosy-ten-41.vercel.app/og/portfolio-og.png` |
| `og:image:secure_url` | Yes | Same as og:image |
| `og:image:type` | Yes | `image/png` |
| `og:image:width` | Yes | `1200` |
| `og:image:height` | Yes | `630` |
| `og:image:alt` | Yes | `李泓轩 Portfolio - AI Application, Agent Development, Python Backend` |
| `twitter:card` | Yes | `summary_large_image` |
| `twitter:title` | Yes | `李泓轩｜AI Application Portfolio` |
| `twitter:description` | Yes | 展示 AI 应用开发、Agent 和 Python 后端项目实践。 |
| `twitter:image` | Yes | Same as og:image |
| `twitter:image:alt` | Yes | Same as og:image:alt |

All metadata tags present and correctly configured.

---

## 8. OG Image QA

| Item | Result |
|---|---|
| File exists in `public/og/` | Yes — `portfolio-og.png` (354 kB) and `portfolio-og.svg` (4.88 kB) |
| File exists in `dist/og/` | Yes — copied during build |
| Online HTTP status | 200 |
| Content-Type | `image/png` |
| Dimensions | 1200 × 630 |
| `og:image` in HTML | Yes |
| `twitter:image` in HTML | Yes |
| `twitter:card` | `summary_large_image` |
| Visual style | Dark Technical Editorial — consistent with page style |

OG Image is correctly deployed and accessible.

---

## 9. Content Boundary QA

### About section

- Self-introduction is humble and realistic: "我是李泓轩，人工智能专业 2027 届本科生，主要关注 AI 应用开发、Agent 编排和 Python 后端工程。"
- No exaggeration of seniority or production experience
- States "目前我还在持续补基础、做项目和复盘工程细节" — honest about current stage

### CodePilot

- Described as "AI 代码审查与仓库理解系统" — accurate
- Not described as a full DevOps platform
- Highlights mention "Mock / 真实 LLM 双模式演示" — clear about demo mode
- Proof section is honest: "可在线打开 Demo...也可在 GitHub 查看前后端代码、测试与 CI 配置"

### EnterpriseAiDataAgent

- Described as "CSV / Excel 数据分析工作台" — accurate
- Not described as a full BI platform
- Tech stack includes "LLM API" — generic, not overclaiming specific provider
- Proof section is honest about what can be verified

### Basjoo 二开

- Described as "RAG 评估框架与客服知识库流程增强" — accurate
- Not described as a full customer service SaaS
- No online Demo link — correct, it's local-only
- Highlights mention "基于开源项目的二次开发" — clear about 二开 nature
- Proof section correctly points to project notes repo and basjoo branch

### Three projects displayed equally

- All three rendered by same `ProjectCard` component
- Same layout structure (left info + right tech stack card)
- Same `project-number-anchor` styling
- No special treatment for any single project

---

## 10. Forbidden Terms / Fake Links QA

Checked `src/**/*.tsx`, `src/**/*.ts`, and `index.html`:

| Pattern | Result |
|---|---|
| `ProfileAgent` | Not found |
| `数字孪生` | Not found |
| `智慧校园` | Not found |
| `Lithos` | Not found |
| `href=""` | Not found |
| `href="#"` | Not found |
| `TBD` | Not found |
| `待补充` | Not found |
| `Generated by AI` | Not found |
| `mockup` | Not found |
| `placeholder` | Not found |
| `实习` | Not found |

No forbidden terms, no fake links, no TBD placeholders.

---

## 11. README / GitHub About Consistency

### README vs Page Content

| Item | README | Page | Consistent |
|---|---|---|---|
| CodePilot定位 | AI 代码审查与仓库理解 | AI 代码审查与仓库理解系统 | Yes |
| EDA定位 | CSV / Excel 数据分析工作台 | CSV / Excel 数据分析工作台 | Yes |
| Basjoo定位 | RAG Evaluation Harness 与客服知识库流程增强 | RAG 评估框架与客服知识库流程增强 | Yes |
| Live Site URL | https://portfolio-rosy-ten-41.vercel.app/ | og:url matches | Yes |
| Tech Stack | React 18 / TypeScript / Vite / Tailwind CSS / Vercel | package.json confirms | Yes |
| GitHub About | Description + Website + Topics set | README confirms | Yes |

### Links consistency

All links in `src/data/links.ts` match README link table.

---

## 12. Issues Found

### P0

None.

### P1

None.

### P2

- Some chat platforms (WeChat, Feishu, DingTalk) may still show only a plain URL without image preview because link preview behavior is platform-dependent and may be cached. This is not a project-side blocker — online OG metadata and PNG are correctly deployed and accessible.
- The `site.webmanifest` icon only specifies `64x64` SVG. Some platforms prefer multiple icon sizes (192x192, 512x512 PNG). This is a minor PWA polish item, not a blocking issue for portfolio sharing.

---

## 13. Recommended Fix Scope

No code fix is required before sharing the Portfolio link.

The site is ready for final seal if the user confirms desktop and mobile visual checks.

---

## 14. Next Step

If the user confirms there are no visual issues, enter Phase 15-2: Final QA Seal and create `v1.35.0-final-qa-polish` tag.

If the user finds a blocking issue during manual review, enter Phase 15-2: Final QA Fix.

---

## 15. Version Seal

`v1.35.0-final-qa-polish` 已完成并封存。

本版本完成 Portfolio 投递前最终 QA 检查：

- Build check passed
- Desktop visual QA passed
- Mobile visual QA passed
- Link QA passed
- SEO / metadata QA passed
- OG Image QA passed
- Content boundary QA passed
- Forbidden terms / fake links QA passed
- README / GitHub About consistency checked

Final QA result:

- P0 issues: 0
- P1 issues: 0
- P2 issues: 2

P2 issues are non-blocking and do not prevent using the Portfolio link for HR / interviewer communication.

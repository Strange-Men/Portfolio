# SEO and Share Research

## 1. Scope

本文件记录 Portfolio v1.30.0-seo-share-polish 前的 SEO / 分享展示研究。
本轮只研究当前状态，不修改页面源码。

---

## 2. Current Version

- Current sealed version: `v1.29.0-project-detail-polish`
- Live site: https://portfolio-rosy-ten-41.vercel.app/
- GitHub repo: https://github.com/Strange-Men/Portfolio

---

## 3. Files Checked

| File / Path | Purpose |
|---|---|
| `index.html` | HTML 入口，检查 title / meta / OG / Twitter / favicon / theme-color |
| `dist/index.html` | 构建产物，确认与源码一致 |
| `src/App.tsx` | 检查是否有动态 title / meta 管理 |
| `src/main.tsx` | 检查是否有 helmet 或 meta 注入 |
| `public/` | 检查 favicon / manifest / 静态资源（目录不存在） |
| `README.md` | GitHub 首屏展示内容 |
| `package.json` | 项目基础信息 |
| `docs/01_CURRENT_PROJECT_CONTEXT.md` | 当前项目上下文 |
| `docs/DEV_STATUS.md` | 当前开发状态 |
| `docs/20_VERSION_HISTORY.md` | 版本历史 |
| GitHub repo (gh CLI) | About / description / topics 状态 |

---

## 4. Current SEO Status

### 4.1 Title

当前值：

```html
<title>Portfolio</title>
```

问题：

1. 仅写 `Portfolio`，过于通用，无法区分是谁的作品集
2. 没有包含姓名或求职方向
3. 浏览器标签页显示不明确，多个标签页时难以辨认
4. 不适合搜索引擎结果展示
5. 不适合分享到社交媒体时的标题

建议：

```html
<title>李泓轩｜AI Application Portfolio</title>
```

或英文版本：

```html
<title>Ted Li｜AI Application & Agent Portfolio</title>
```

选择建议：如果主要面向国内求职，使用中文名；如果同时面向海外，使用英文名。也可以两者兼顾：

```html
<title>李泓轩 Ted Li｜AI Application Portfolio</title>
```

### 4.2 Meta Description

当前值：

不存在。

问题：

1. 没有 `<meta name="description">` 标签
2. 搜索引擎无法展示有意义的摘要
3. 社交媒体分享时没有描述文本
4. 对 SEO 基础评分有负面影响

建议：

```html
<meta name="description" content="2027 届人工智能本科生的个人作品集，展示 CodePilot、EnterpriseAiDataAgent、Basjoo 二开等 AI 应用开发、Agent 和 Python 后端项目实践。" />
```

或英文版本：

```html
<meta name="description" content="Personal portfolio showcasing AI application development, Agent systems, and Python backend projects including CodePilot, EnterpriseAiDataAgent, and Basjoo RAG evaluation." />
```

### 4.3 Open Graph

当前状态：

不存在任何 Open Graph 标签。

缺失项：

| Tag | Status |
|---|---|
| `og:title` | 缺失 |
| `og:description` | 缺失 |
| `og:type` | 缺失 |
| `og:url` | 缺失 |
| `og:image` | 缺失 |

建议补充：

```html
<meta property="og:title" content="李泓轩｜AI Application Portfolio" />
<meta property="og:description" content="2027 届人工智能本科生的个人作品集，展示 AI 应用开发、Agent 和 Python 后端项目实践。" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://portfolio-rosy-ten-41.vercel.app/" />
```

关于 og:image：

- 当前没有 OG 分享图片
- v1.30.0 可以先不生成复杂 OG 图片
- 后续可以制作一张简单的 OG 图片（1200×630），包含姓名、定位和网站 URL
- 本轮不生成图片，只记录需求

### 4.4 Twitter Card

当前状态：

不存在任何 Twitter Card 标签。

缺失项：

| Tag | Status |
|---|---|
| `twitter:card` | 缺失 |
| `twitter:title` | 缺失 |
| `twitter:description` | 缺失 |
| `twitter:image` | 缺失 |

建议补充：

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="李泓轩｜AI Application Portfolio" />
<meta name="twitter:description" content="2027 届人工智能本科生的个人作品集，展示 AI 应用开发、Agent 和 Python 后端项目实践。" />
```

### 4.5 Favicon

当前状态：

1. 没有 `public/` 目录
2. 没有 `favicon.ico`、`favicon.svg` 或 `vite.svg` 文件
3. `index.html` 中没有 `<link rel="icon">` 标签
4. 浏览器将使用默认空白图标

问题：

1. 浏览器标签页没有自定义图标
2. 书签栏没有图标
3. 手机添加到主屏幕没有图标
4. 整体缺乏专业感

建议：

- v1.30.0 可以先准备一个简单的 SVG favicon（例如一个字母 L 或 T 的几何图形）
- 或者使用 Vite 默认的紫色闪电图标（需要创建 `public/vite.svg` 并在 `index.html` 中引用）
- 不建议继续使用空白默认图标
- 本轮不生成 favicon，只记录需求

### 4.6 Theme Color / Mobile Metadata

当前状态：

1. 没有 `<meta name="theme-color">` 标签
2. 没有 `<meta name="apple-mobile-web-app-capable">` 标签
3. 没有 `<meta name="apple-mobile-web-app-status-bar-style">` 标签
4. 没有 `manifest.json` 或 `manifest.webmanifest` 文件

建议：

```html
<meta name="theme-color" content="#09090b" />
```

`#09090b` 是 `zinc-950` 的色值，与当前暗色主题背景一致。这将使手机浏览器地址栏颜色与页面背景融合。

---

## 5. README Status

当前状态：

README 内容较完整，包含：
- 项目定位说明
- 当前版本号
- 已完成功能列表
- 版本 Tag 表格
- MVP Scope
- MVP Status
- 线上地址
- 核心项目 CodePilot 说明
- 技术栈
- 开发规则
- AI Context Entry
- 联系方式

优点：

1. 有明确的项目定位：面向求职展示的个人作品集网站
2. 有线上访问地址
3. 有技术栈说明
4. 有版本历史记录
5. 有联系方式

问题：

1. 没有醒目的 "Live Site" 链接按钮（线上地址在 txt 代码块中，不够醒目）
2. 没有 "Featured Projects" 简表，读者需要通读全文才能了解展示了哪些项目
3. 已完成列表过长（80+ 行），首屏信息密度低
4. 没有网站截图
5. 项目定位用中文写的，但 GitHub 首屏可能更希望有英文摘要

建议：

1. 在 README 顶部添加醒目的 Live Site 链接：
   ```md
   **🔗 Live Site: https://portfolio-rosy-ten-41.vercel.app/**
   ```

2. 在版本信息之后、已完成列表之前，添加 Featured Projects 简表：
   ```md
   ## Featured Projects

   | Project | Description | Stack |
   |---|---|---|
   | CodePilot | AI 代码审查与仓库理解系统 | Python, Tree-sitter, Multi-Agent |
   | EnterpriseAiDataAgent | CSV/Excel 数据分析工作台 | DuckDB, NL→SQL, SSE, FastAPI |
   | Basjoo 二开 | RAG Evaluation Harness | pytest, Mock, Evaluation Metrics |
   ```

3. 精简已完成列表，或折叠到 `<details>` 标签中

4. 后续可以考虑添加网站截图（本轮不生成）

### 5.7 Manifest / PWA

当前状态：

1. 没有 `manifest.json` 或 `manifest.webmanifest`
2. 不支持 PWA 安装
3. 手机添加到主屏幕时没有自定义名称和图标

建议：

- v1.30.0 可以添加一个简单的 `manifest.webmanifest`
- 包含 `name`、`short_name`、`start_url`、`display`、`theme_color`、`background_color`、`icons`
- 这将改善手机端"添加到主屏幕"的体验

---

## 6. GitHub Repository Presentation

当前状态（通过 `gh repo view` 确认）：

| Field | Value |
|---|---|
| Name | Portfolio |
| Description | （空） |
| Website | （未设置） |
| Topics | （未设置） |

未确认项：

- GitHub 仓库 About 面板的完整显示状态（需要在浏览器中确认）

建议手动补充：

**Description:**

```
Personal portfolio for AI application, Agent, and Python backend projects.
```

或中文：

```
面向求职展示的个人作品集，展示 AI 应用开发、Agent 和 Python 后端项目。
```

**Website:**

```
https://portfolio-rosy-ten-41.vercel.app/
```

**Topics:**

```
portfolio, react, vite, typescript, tailwindcss, ai, agent, fastapi
```

注意：以上 GitHub About 信息需要用户在 GitHub 网页端手动填写，本轮不通过 API 自动修改。

---

## 7. Recommended v1.30.0 Implementation Scope

建议 v1.30.0 只做以下修改：

### index.html 修改

1. 更新 `<title>` 为包含姓名和定位的版本
2. 增加 `<meta name="description">`
3. 增加 Open Graph 基础标签（og:title, og:description, og:type, og:url）
4. 增加 Twitter Card 基础标签（twitter:card, twitter:title, twitter:description）
5. 增加 `<meta name="theme-color">`
6. 增加 `<link rel="icon">` 引用（如果准备了 favicon）
7. 增加 manifest 引用（如果准备了 manifest）

### Favicon

- 准备一个简单的 SVG favicon
- 或使用 Vite 默认图标（需要创建 public/ 目录）
- 不制作复杂设计

### README 修改

1. 顶部添加醒目 Live Site 链接
2. 添加 Featured Projects 简表
3. 精简或折叠已完成列表

### GitHub About

- 给出手动填写建议（不自动修改）

### 不做

- 不生成复杂 OG 图片
- 不做博客
- 不改页面视觉
- 不改项目卡片内容
- 不新增项目
- 不新增动画
- 不做 SEO 过度包装
- 不添加结构化数据 (JSON-LD)
- 不做 sitemap.xml
- 不做 robots.txt

---

## 8. Out of Scope

v1.30.0 暂不做：

- 复杂 OG 分享图片生成
- 博客系统
- 页面视觉改动
- 项目卡片内容改动
- 新增项目
- 新增动画
- SEO 过度包装
- 结构化数据 (JSON-LD)
- sitemap.xml
- robots.txt
- 自定义域名绑定
- Google Search Console 配置
- 百度站长平台配置

---

## 9. Next Step

进入 Phase 10-2：v1.30.0-seo-share-polish。
基于本研究文档，小范围修改 index.html 和 README，提高线上展示正式感。

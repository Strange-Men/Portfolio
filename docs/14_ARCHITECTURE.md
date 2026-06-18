# Portfolio 轻量架构设计

## 1. 架构目标

Portfolio 第一版是静态单页作品集。

架构目标：

- 简单
- 清晰
- 可维护
- 可上线
- 方便后续扩展
- 防止一坨代码
- 内容和组件分离
- 样式和数据可控

当前不是复杂应用，不需要过度架构。

---

## 2. 整体架构

第一版采用前端静态架构：

```txt
React + Vite + TypeScript + Tailwind CSS
```

整体分层：

```txt
App 层
Section 组件层
UI 组件层
Data 数据层
Style 样式层
Asset 静态资源层
```

说明：

* App 层负责组合页面。
* Section 层负责 Hero / About / CodePilot / Contact。
* UI 层负责按钮、标签、链接、卡片等可复用小组件。
* Data 层集中管理文案、链接、技术栈。
* Style 层管理全局样式和 Tailwind 基础样式。
* Asset 层后续存放静态图片或图标，但第一版可尽量少用。

---

## 3. 未来目录结构建议

后续初始化工程后，建议目录结构：

```txt
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   ├── profile.ts
│   ├── codepilot.ts
│   └── links.ts
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CodePilotSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── Tag.tsx
│       └── ExternalLink.tsx
└── styles/
    └── tokens.css
```

说明：

这只是架构规划，不在本轮创建这些文件。

---

## 4. App 层职责

`App.tsx` 后续只负责页面组合。

允许：

* 引入四个 Section
* 按顺序渲染 Hero / About / CodePilot / Contact
* 提供整体背景容器

不允许：

* 在 App.tsx 写大量文案
* 在 App.tsx 写复杂业务逻辑
* 在 App.tsx 堆所有样式
* 在 App.tsx 写外链配置

---

## 5. Section 层职责

第一版固定四个 Section：

### 5.1 HeroSection

职责：

* 展示身份
* 展示求职方向
* 展示 CodePilot 一句话
* 展示 CTA

不负责：

* 展示完整 CodePilot 详情
* 展示 Skills
* 展示 Workflow
* 展示简历下载

### 5.2 AboutSection

职责：

* 展示简短背景
* 展示技术关注点
* 衔接 CodePilot

不负责：

* 长篇自我介绍
* 大量经历堆叠
* 未确认奖项或数据

### 5.3 CodePilotSection

职责：

* 展示 CodePilot 项目定位
* 展示核心流程
* 展示技术栈
* 展示可讲技术点
* 展示 GitHub 链接

这是页面核心 Section。

不负责：

* 展示 Demo 按钮
* 展示虚假指标
* 展示过长版本迭代
* 展示其他项目

### 5.4 ContactSection

职责：

* 展示 Email
* 展示 GitHub
* 提供真实联系入口

不负责：

* 表单提交
* 后端请求
* 简历下载
* 未确认平台入口

---

## 6. UI 组件层职责

UI 组件只做复用视觉单元，不包含业务含义。

建议组件：

### Button

用于 CTA。

要求：

* 支持内部锚点
* 支持外部链接
* 可聚焦
* 文案清楚

### ExternalLink

用于 GitHub / Email。

要求：

* 外链安全
* 文案明确
* 不只靠图标表达

### Tag

用于技术栈标签。

要求：

* 展示短文本
* 不承担交互

### SectionLabel

用于区块标题或小标签。

要求：

* 保持视觉统一
* 不堆复杂样式

---

## 7. Data 层职责

所有可变内容必须集中管理。

建议文件：

### profile.ts

管理：

* 姓名
* 身份
* 求职方向
* Hero 文案
* About 文案

### codepilot.ts

管理：

* 项目名称
* 项目定位
* 核心流程
* 技术栈
* 可讲技术点
* GitHub 链接
* Demo 状态

### links.ts

管理：

* Email
* GitHub 主页
* CodePilot GitHub
* mailto 链接

要求：

* 不在组件里散落链接
* 不写空链接
* 不写假链接
* Demo 未确认则不提供按钮数据
* 简历未确认则不提供下载数据

---

## 8. Style 层职责

样式组织原则：

* Tailwind 负责大部分布局和视觉
* 少量全局 CSS 负责字体、基础背景、滚动行为
* 如有设计 token，可放在 tokens.css
* 不把所有样式堆成一个巨大 CSS 文件

允许：

* 暗色背景
* 响应式布局
* hover
* focus-visible
* 简单 transition

不允许：

* 复杂动画库
* WebGL
* canvas spotlight
* 大量自定义复杂 CSS
* 视频背景

---

## 9. Asset 层职责

第一版尽量少依赖图片。

允许：

* favicon
* 简单静态图标或 SVG
* 后续真实截图，前提是文件体积可控

不允许：

* 未确认远程图片
* 大体积视频
* WebGL 资源
* 参考品牌图片
* 与 Portfolio 无关的素材

---

## 10. 链接架构

当前真实链接：

```txt
GitHub 主页：https://github.com/Strange-Men
CodePilot GitHub：https://github.com/Strange-Men/CodePilot
Email：1643229721@qq.com
```

后续实现时：

* Email 使用 `mailto:1643229721@qq.com`
* 外链使用安全打开方式
* Demo 未确认则不展示
* 简历 PDF 未确认则不展示

---

## 11. 后续可替换点

后续可以替换或增强：

* 字体方案
* 轻量动效
* 部署平台
* 简历 PDF 入口
* Skills 简洁模块
* Workflow 简洁模块
* CodePilot Demo 链接
* AI Agent 能力

但这些都不进入当前 MVP。

任何新增模块必须重新经过边界确认。

---

## 12. 禁止架构

当前禁止：

* 多页面路由
* 后端服务
* API 层
* 数据库层
* Agent 层
* AI 问答层
* 表单提交层
* CMS
* 博客系统
* 大型状态管理
* 动画编排库
* 图标库，除非后续确认

说明：

当前是静态单页作品集，不需要复杂架构。

---

## 13. 架构验收标准

本阶段完成后，必须满足：

1. 目录规划清楚。
2. App / Section / UI / Data / Style 分层清楚。
3. Hero / About / CodePilot / Contact 职责清楚。
4. CodePilot 是核心模块。
5. 链接集中管理。
6. 文案集中管理。
7. 不出现前端代码。
8. 不初始化工程。
9. 不引入后端、数据库、AI 问答。
10. 可以进入下一阶段：建立全局上下文文档。

# Portfolio 全局项目上下文

> 本文档是后续每轮 Claude / Codex 开发前必须读取的全局上下文。
> 如果本文档与单轮 Prompt 冲突，以本文档和最新 DEV_STATUS 为准。
> AI 不允许脱离本文档自由发挥。

---

## 1. 项目定位

Portfolio 是一个面向实习投递的静态个人作品集网站。

核心目标：

1. 让招聘方快速理解用户的求职方向。
2. 重点讲清楚 CodePilot。
3. 提供真实 GitHub 和 Email 联系入口。
4. 完成一个可上线、可维护、可迭代的前端项目。

当前定位：

- Portfolio 是展示载体。
- CodePilot 是核心项目。
- 当前不是 AI Agent 项目。
- 当前不是后端项目。
- 当前不是博客系统。

---

## 2. 当前 MVP 范围

第一版只做 4 个模块：

```txt
Hero
About
CodePilot
Contact
```

页面顺序固定：

```txt
Hero → About → CodePilot → Contact
```

不允许在当前 MVP 中新增其他模块。

---

## 3. 已确认真实信息

```txt
Email: 1643229721@qq.com
GitHub: https://github.com/Strange-Men
CodePilot GitHub: https://github.com/Strange-Men/CodePilot
CodePilot Demo: 未确认，当前不展示
简历 PDF: 未确认，当前不展示下载按钮
```

---

## 4. Hero 内容方向

Hero 必须表达：

* 2027 届人工智能本科生
* 求职方向：AI 应用开发 / Agent 开发 / Python 后端
* 当前核心项目：CodePilot

文案方向：

```txt
2027 届人工智能本科生，聚焦 AI 应用开发 / Agent 开发 / Python 后端。
当前核心项目是 CodePilot，一个面向 GitHub 仓库理解与代码审查的 AI 应用项目。
```

要求：

* 中文为主，技术词保留英文。
* 不写"精通"。
* 不写虚假数据。
* 不放简历下载按钮。

---

## 5. CodePilot 展示要求

CodePilot 是页面核心模块。

必须展示：

* 项目名称：CodePilot
* 项目定位：GitHub 仓库理解与 AI 代码审查应用
* 一句话说明：输入 GitHub 仓库链接，解析源码结构，构建结构化上下文，并生成代码审查报告。
* 核心流程：

  1. 输入 GitHub 仓库链接
  2. 解析源码结构
  3. 构建结构化上下文
  4. 生成 Markdown 审查报告
* 技术栈：

  * Python
  * FastAPI
  * React
  * Tree-sitter
  * LLM API
  * Markdown Report
* GitHub 链接：

  * https://github.com/Strange-Men/CodePilot

当前不展示：

* Demo 按钮
* 虚假指标
* 未确认上线链接
* 过长版本迭代
* 其他项目

---

## 6. Contact 展示要求

Contact 第一版只展示：

```txt
Email: 1643229721@qq.com
GitHub: https://github.com/Strange-Men
```

不展示：

* 简历下载按钮
* Resume: TBD
* 未确认平台
* 空链接
* 表单

---

## 7. 设计基调

当前设计方向：

```txt
Dark Technical Editorial Portfolio
```

关键词：

* 暗色高级
* 技术编辑感
* 内容优先
* CodePilot 优先
* 大字号 Hero
* serif italic 视觉点缀
* 胶囊式导航参考
* 克制动效

视觉参考只借鉴风格，不照抄参考品牌内容。

当前不做：

* cursor spotlight
* canvas mask
* WebGL
* ReactBits
* GSAP
* Framer Motion
* 视频背景
* 复杂滚动动画

---

## 8. 页面结构

第一版为单页静态结构。

模块职责：

### Hero

负责第一眼定位和 CTA。

### About

负责简短说明背景和技术关注点。

### CodePilot

负责核心项目展示，是页面最重要模块。

### Contact

负责提供真实联系入口。

---

## 9. 核心交互

用户主路径：

```txt
Hero → CodePilot → GitHub
Hero → Contact → Email
```

允许交互：

* 锚点跳转
* GitHub 外链
* Email mailto 链接
* hover / focus-visible

当前不做：

* AI 输入框
* 表单提交
* 登录
* 后端请求
* 数据保存
* 复杂 loading
* 复杂 error 页面

---

## 10. 技术栈

第一版固定使用：

```txt
React
Vite
TypeScript
Tailwind CSS
npm
静态单页
Vercel 倾向部署
```

当前不使用：

* Next.js
* 后端框架
* 数据库
* CMS
* 登录系统
* LLM API
* LangChain
* Agent 框架
* 动画库
* 图标库，除非后续确认

---

## 11. 轻量架构

后续代码采用：

```txt
App 层
Section 组件层
UI 组件层
Data 数据层
Style 样式层
Asset 静态资源层
```

未来目录建议：

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

要求：

* 内容和组件分离。
* 链接集中管理。
* 文案集中管理。
* 不允许一坨代码。
* 不允许所有内容堆在 App.tsx。

---

## 12. 环境与路径规则

项目路径：

```txt
D:\Claude_workfile\Portfolio
```

允许使用系统 Node：

```txt
C:\Program Files\nodejs
```

但要求：

* 项目文件必须在 `D:\Claude_workfile\Portfolio`
* npm cache 必须在 `D:\Claude_workfile\Portfolio\.npm-cache`
* 构建产物必须在项目目录内
* 不把依赖或生成物放到 C 盘项目路径

---

## 13. 当前明确禁止

当前 MVP 禁止：

* 新增项目
* 编造经历
* 编造数据
* 编造 Demo
* 空链接
* 假链接
* 简历下载按钮
* AI Agent
* AI 问答
* 后端
* 登录
* 数据库
* 博客
* Skills 大而全展示
* Workflow 详细展示
* Portfolio 开发过程展示
* 多页面路由
* ReactBits
* GSAP
* Framer Motion
* WebGL
* cursor spotlight
* canvas mask
* 视频背景

---

## 14. 每轮开发必须遵守

每轮 Prompt 必须包含：

* 当前阶段
* 当前目标
* 允许修改范围
* 禁止修改范围
* 验收标准
* 检查命令
* Git 提交要求

每轮完成后必须：

* 更新 DEV_STATUS.md
* 需要时更新 CHANGELOG.md
* 运行相关检查
* git status
* git commit
* 不在未提交状态下继续下一轮

代码阶段每轮必须运行：

```bash
npm run build
```

构建失败不能进入下一轮。

---

## 15. 当前阶段状态

当前仍处于开发前准备阶段。

还没有：

* 初始化 Vite
* 安装依赖
* 创建 package.json
* 创建 src/
* 写前端代码
* 部署

下一步：

```txt
Phase 4-6：固化开发规范
```

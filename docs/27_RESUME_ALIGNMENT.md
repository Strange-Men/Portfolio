# Portfolio Resume Alignment

## Current Portfolio Positioning

面向实习投递的个人作品集网站。

核心展示项目是 CodePilot。

目标岗位方向是 AI 应用开发 / Agent 开发 / Python 后端。

网页端负责快速建立可信度，详细技术细节交给 GitHub README。

---

## Website One-line Positioning

适合网页使用的一句话定位：

```txt
CodePilot 是一个面向公开 GitHub 仓库的 AI 代码理解与审查项目，展示了我从源码解析、结构化上下文构建到 LLM 报告生成的完整 AI 应用开发能力。
```

要求：

- 短
- 真实
- 适合 HR 快速浏览
- 不写虚假指标
- 不写企业落地
- 不写 Demo

---

## Resume Project Title

简历项目标题：

```txt
CodePilot｜GitHub 仓库理解与 AI 代码审查系统
```

---

## Resume Project Description

适合简历的项目经历，3–4 条 bullet：

```md
- 基于 Python / FastAPI 构建后端服务，支持输入公开 GitHub 仓库链接后自动完成仓库解析、任务流程调度与审查报告生成。
- 使用 Tree-sitter / AST 提取源码结构信息，构建面向 LLM 的结构化上下文，提升代码审查报告的可读性和可追溯性。
- 设计 CodePilot 前端展示页与 Markdown 报告渲染流程，支持将 AI 审查结果以架构概览、代码问题和重构建议等形式展示。
- 通过 Mock 默认模式、真实 LLM 可选模式和版本化迭代记录，保证项目可演示、可部署、可持续扩展。
```

要求：

- 每条 1–2 行
- 突出技术和结果
- 不堆太多细节
- 不编造数据
- 不写未实现功能
- 不写企业落地
- 不写用户数量

---

## Interview Pitch

30 秒面试讲法：

```txt
CodePilot 是我做的一个 AI 代码审查项目，目标是让用户输入 GitHub 仓库链接后，系统自动解析源码结构、构建结构化上下文，并生成可阅读的审查报告。这个项目主要体现了我在 Python 后端、源码解析、LLM 应用和前端结果展示上的完整实践。网页里只保留了简短介绍，详细实现和版本迭代我放在 GitHub README 里。
```

要求：

- 自然
- 不背稿
- 能解释项目价值
- 能引出技术细节

---

## Website vs Resume Boundary

### Portfolio 网页

- 一句话定位
- 3 个技术证明点
- GitHub / README 链接
- 适合快速浏览

### 简历

- 项目职责
- 技术实现
- 可讲亮点
- 与岗位匹配度

### GitHub README

- 完整架构
- 运行方式
- 版本历史
- 技术细节

---

## Consistency Checklist

检查项：

- [x] 网页求职方向是否和简历一致：AI 应用开发 / Agent 开发 / Python 后端
- [x] CodePilot 项目名是否一致：CodePilot
- [x] 技术栈是否一致：Python / FastAPI / Tree-sitter / LLM API
- [x] GitHub 链接是否一致：https://github.com/Strange-Men/CodePilot
- [x] 是否没有 Demo 假链接：demoUrl: null
- [x] 是否没有简历下载假按钮：未新增
- [x] 是否没有虚假指标：未编造数据

---

## Current Data Alignment

### profile.ts 当前状态

```ts
identity: '2027 届人工智能本科生'
directions: ['AI 应用开发', 'Agent 开发', 'Python 后端']
heroTitle: '聚焦 AI 应用开发、Agent 开发与 Python 后端工程'
heroDescription: '我正在用 CodePilot 展示从仓库解析、结构化上下文构建、LLM 报告生成到前端展示的完整 AI 应用开发能力。'
about: '我是一名 2027 届人工智能本科生，当前求职方向聚焦 AI 应用开发、Agent 开发和 Python 后端。第一版 Portfolio 重点展示 CodePilot 项目：它不是静态作品展示，而是用于说明我如何把代码解析、后端接口、LLM 调用和前端报告展示串成一个可运行的 AI 应用。'
focusTags: ['AI Application', 'Agent Development', 'Python Backend']
```

### codepilot.ts 当前状态

```ts
name: 'CodePilot'
subtitle: 'GitHub Repository Understanding & AI Code Review'
description: '面向公开 GitHub 仓库的 AI 代码理解与审查项目：输入仓库链接，解析源码结构，生成可阅读的 Markdown 审查报告。'
proofPoints: ['仓库解析', '结构化上下文', 'AI 审查报告']
flow: ['GitHub 仓库链接', '源码解析', '结构化上下文', 'Markdown 报告']
techStack: ['Python', 'FastAPI', 'Tree-sitter', 'LLM API']
githubUrl: links.codepilotGithub
demoUrl: null
```

### links.ts 当前状态

```ts
github: 'https://github.com/Strange-Men'
codepilotGithub: 'https://github.com/Strange-Men/CodePilot'
email: '1643229721@qq.com'
emailHref: 'mailto:1643229721@qq.com'
```

### 结论

网页端数据层与简历表达一致，不需要修改 src/。

---

## Summary

本轮完成：

- 明确 Portfolio 网页、简历、GitHub README 的职责边界
- 生成 CodePilot 简历项目标题
- 生成 CodePilot 简历项目 bullet（4 条）
- 生成 30 秒面试讲法
- 检查网页端数据层与简历表达一致性
- 确认网页端保持短促有力
- 未新增简历下载按钮
- 未新增 Demo
- 未新增虚假指标
- 未新增项目

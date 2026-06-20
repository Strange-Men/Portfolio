# Career Material Sync

## Scope

本文件记录 Portfolio v1.28.0-career-material-sync 阶段的表达对齐工作。

本轮只同步 Portfolio 内的页面文案，不修改 CodePilot README。
CodePilot README 将在 CodePilot 项目目录中单独处理。

## Goal

让 Portfolio、简历、CodePilot 项目介绍和后续投递话术使用同一套表达。

## Portfolio Copy Direction

- 面向中国 HR / 面试官
- 中文表达为主
- CodePilot 作为核心项目
- Portfolio 作为展示载体
- 强调 AI 应用开发 / Agent 开发 / Python 后端方向
- 不新增未完成项目
- 不新增假 Demo / 假下载

## CodePilot Unified Description

CodePilot 是一个面向 GitHub 仓库的 AI 代码审查与仓库理解系统。用户输入仓库地址后，系统会自动克隆代码、解析项目结构，并生成架构概览、代码问题、可维护性分析和重构建议，帮助快速理解中小型代码仓库。

## Modified Files

- `src/data/profile.ts` — 调整 Hero 描述、About 文案、focusTags
- `src/data/codepilot.ts` — 调整 subtitle、description、painPoint、proofPoints、flow

## Phase 8-1.1：Project Navigation and Future Expansion Copy

本轮根据人工检查继续优化 Portfolio 文案结构：

- Hero 主按钮从单项目导向改为通用项目入口
- 导航栏从 CodePilot 改为 Projects
- Hero 右侧从完整项目卡改为求职方向 / 能力概览 / 项目索引
- 保留少量英文视觉标签，不强制网页全中文
- CodePilot 项目区增加 GitHub 与在线演示两个链接
- 为后续多项目扩展补充统一项目卡片规则

## Future Project Card Rules

后续新增项目时，每个项目必须满足：

- 项目真实存在
- 有明确项目名称
- 有一句话项目简介
- 有解决问题 / 使用场景
- 有 3 个以内技术亮点
- 有 GitHub 链接
- 如有线上演示，再提供 Demo / Vercel 链接
- 不添加未完成项目
- 不添加假 Demo
- 不添加无法访问链接
- 页面设计复用当前 CodePilot 项目卡片结构

## Not Modified

- 未修改组件结构
- 未修改视觉 / 动效 / 背景
- 未新增项目 / Demo / 简历下载
- 未修改 CodePilot 仓库
- 未修改 CodePilot README

## Next

后续在 CodePilot 项目目录中单独处理 CodePilot README 中文化与项目包装。

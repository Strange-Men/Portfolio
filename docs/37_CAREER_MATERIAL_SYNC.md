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

## Not Modified

- 未修改组件结构
- 未修改视觉 / 动效 / 背景
- 未新增项目 / Demo / 简历下载
- 未修改 CodePilot 仓库
- 未修改 CodePilot README

## Next

后续在 CodePilot 项目目录中单独处理 CodePilot README 中文化与项目包装。

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

## Phase 8-2：Projects Expansion and Contact Link Fix

本轮继续完善 Portfolio 求职材料同步：

- 修复 Contact 区域 Email 按钮的 mailto 链接
- Projects 区域从单一 CodePilot 扩展为多个项目展示
- 当前项目包括：
  - CodePilot
  - EnterpriseAiDataAgent
  - Basjoo 二开项目
- CodePilot 保持重点项目展示
- 新增项目暂不添加假链接，等待后续补充 GitHub / Demo
- 项目卡片遵守统一结构：项目名、简介、痛点 / 场景、技术亮点、技术栈、链接

## Not Modified

- 未修改组件结构
- 未修改视觉 / 动效 / 背景
- 未新增项目 / Demo / 简历下载
- 未修改 CodePilot 仓库
- 未修改 CodePilot README

## Next

后续在 CodePilot 项目目录中单独处理 CodePilot README 中文化与项目包装。

## Phase 8-2.1：Equal Project Cards and Link Completion

本轮继续优化 Portfolio 多项目展示：

- 删除 Hero 底部重复方向标签
- Hero 右侧改为 3 个 AI 应用实践项目概览
- Projects 区域从 Featured + More Projects 调整为三个项目平级展示
- EnterpriseAiDataAgent 补充 GitHub 链接
- Basjoo 二开项目补充项目说明链接和代码仓库链接
- 保持 CodePilot / EnterpriseAiDataAgent / Basjoo 二开使用统一项目卡片结构
- 保持 Email mailto 修复
- Hero 背景做小幅质感优化

## Phase 8-2.2：Mature Hero Summary and Equal Project Structure

本轮继续优化 Portfolio 多项目展示：

- Hero 右侧改为更成熟的 Selected Work / 项目索引摘要
- 去掉 AI 感较强的长段说明
- 三个项目统一为平级 ProjectCard 结构
- 每个项目都补充项目简介、痛点 / 场景、项目流程、技术栈和链接
- Contact 主按钮改为 Gmail compose 链接
- 保留邮箱文本作为复制备用

## Phase 8-2.4：Version Seal

`v1.28.1-projects-contact-link` 封存当前 Portfolio 多项目展示版本。

当前展示项目：

- CodePilot
- EnterpriseAiDataAgent
- Basjoo 二开项目

当前重点：

- 三项目平级展示
- 统一项目结构
- Contact Gmail 联系入口
- GitHub / Demo / 项目说明链接清晰

## Phase 9-4：Project Detail Polish Version Seal

`v1.29.0-project-detail-polish` 封存当前 Portfolio 三项目真实内容优化版本。

本版本基于 `docs/38_PROJECT_DETAIL_RESEARCH.md`，将三个项目的页面表达从泛泛介绍优化为更具体、可验证、边界清晰的项目展示。

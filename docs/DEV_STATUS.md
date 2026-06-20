# DEV_STATUS

当前阶段：Phase 8-1

## 已完成

- Portfolio MVP 已封板
- Portfolio 已部署到 Vercel
- 当前线上地址：https://portfolio-rosy-ten-41.vercel.app/
- Phase 6-1：内容表达优化
- Phase 6-2：导航与排版优化
- Phase 6-3：中文友好 Typography System
- Phase 6-4：参考风格转译与设计规格
- Phase 6-5：Hero Spotlight Layout
- Phase 6-6：轻量 Hero 入场动画
- Phase 6-7：CodePilot 紧凑项目证明
- Phase 6-8：简历与投递表达对齐文档
- Phase 6-9：信息架构与文案修正
- Phase 6-10：最终视觉、响应式、链接和构建终检
- Phase 6-11：动画交互规范沉淀
- Phase 6-12：投递版本冻结
- Phase 6-12.2：Contact HR 视角文案 hotfix
- Phase 7-1：BorderGlow 项目卡片实验
- Phase 7-2：页面背景与 Section 入场动效统一
- Phase 7-3：合并 BorderGlow Motion System 并锁定设计规范
- Phase 7-3.1：创建 v1.24.0-borderglow-motion-system tag

## v1.24.0-borderglow-motion-system 结论

本轮完成 v1.24 动效增强版本记录：

- v1.24.0-borderglow-motion-system tag 已创建并推送
- tag 指向 commit：64467c0
- 已合并 BorderGlowCard 作为主要玻璃卡片 hover 交互
- 已合并 RevealOnScroll 作为 Hero 之后 Section 入场动效
- 已合并 low-contrast ambient background
- 已保留 Hero 独立 spotlight / hero-anim 动效
- 已新增 docs/34_DESIGN_MOTION_RULES.md
- 已更新 Motion / BorderGlow / Motion System 相关文档最终结论
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装 ogl
- 未新增 Demo
- 未新增简历下载
- 未新增未确认项目

## 版本状态

当前最新版本：

```txt
v1.27.0-production-verify
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## Phase 8-1：v1.28.0-career-material-sync

进入 Portfolio 文案与简历 / CodePilot 表达对齐阶段。

Phase 8-1 完成：

- 调整 `src/data/profile.ts` 中的 Hero 描述、About 文案、focusTags
- 调整 `src/data/codepilot.ts` 中的 subtitle、description、painPoint、proofPoints、flow
- 新增 `docs/37_CAREER_MATERIAL_SYNC.md`
- build 通过
- 未修改组件结构
- 未修改视觉 / 动效 / 背景
- 未新增项目 / Demo / 简历下载
- 未修改 CodePilot 仓库
- 未修改 CodePilot README

## Phase 8-1.1：Portfolio Career Copy Structure Polish

本轮继续优化 v1.28.0-career-material-sync：

- 修正 Hero 主按钮过于 CodePilot 单项目化的问题
- 导航入口调整为更适合多项目扩展的 Projects
- Hero 右侧模块改为长期可用的求职方向 / 项目索引 / 能力概览
- 保留 Core Project / Tech Stack 等少量英文视觉标签
- CodePilot 项目区增加 GitHub 和在线演示链接
- 补充未来项目卡片统一规则
- 未修改 CodePilot README
- 未进入 CodePilot 文件夹
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未修改视觉 / 动效 / 背景

## Phase 8-2：Projects Expansion and Contact Link Fix

本轮完成：

- 修复 Contact 的"发送 Email"按钮 mailto 链接
- 新增 `src/data/projects.ts` 统一项目数据结构
- CodePilotSection 改为支持多项目展示
- CodePilot 保持为重点项目（Featured Project）
- 新增 EnterpriseAiDataAgent 项目卡片
- 新增 Basjoo 二开项目卡片
- 项目链接为空时不渲染按钮，避免假链接
- 未修改 CodePilot README
- 未进入 CodePilot 文件夹
- 未新增假 Demo
- 未新增简历下载
- 未修改视觉 / 动效 / 背景

## 当前最新版本

```txt
v1.28.0-career-material-sync (待确认)
v1.28.1-projects-contact-link (分支验收中)
```

## 当前线上地址

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 下一步

请用户先在桌面端预览：
1. Email 按钮是否正常
2. 三个项目卡片是否展示合理
3. 新项目是否没有假链接
4. CodePilot 的 GitHub / 在线演示是否正常
5. 页面布局是否正常

如果桌面端 OK，再合并到 main 并等待 Vercel 部署。
手机端最终仍以 Vercel 线上地址测试为准。
EnterpriseAiDataAgent 和 Basjoo 二开链接后续由用户补齐。

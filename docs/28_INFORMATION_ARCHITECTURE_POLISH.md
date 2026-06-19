# Information Architecture Polish

## Current Version

```txt
v1.20.0-information-architecture-polish
```

## User Feedback

- Hero 标题中英混排后换行不自然，"Agent" 那一行中间凸出，视觉很丑。
- About 区块标题"先把一个核心项目讲清楚"容易让人误解整个作品集只有一个项目。
- CodePilot 区块需要更清楚地说明"做什么 + 解决什么问题 + 怎么实现"。
- Contact 区块不应单独放某个项目仓库链接，最后一页应只负责联系。

## Decisions

- Hero 标题使用 `\n` 显式换行，拆成三行短标题：AI 应用开发 / Agent 开发 / Python 后端。
- About 区块标题改为"关于我"，正文改为自我介绍，明确当前第一版先重点展示 CodePilot，后续可扩展更多项目。
- About 卡片"核心项目"改为"当前重点"，避免暗示只有一个项目。
- CodePilot 区块补充痛点说明："接手一个陌生仓库时，难以快速理解结构、风险和改进方向"。
- CodePilot 技术栈补充 React / TypeScript / SQLite。
- CodePilot 流程改为 5 步编号列表，更清楚地展示完整流程。
- Contact 区块移除单独的 CodePilot 仓库按钮和卡片，只保留 Email / GitHub。
- Contact 卡片底部说明改为"项目详情请在上方项目区块查看；这里仅保留联系入口"。
- 项目链接留在对应项目区块，为未来多个项目扩展留空间。

## Modified Files

- `src/data/profile.ts`：heroTitle 改为多行，about 文案改为自我介绍
- `src/data/codepilot.ts`：补充 painPoint 字段，更新 flow 和 techStack
- `src/components/sections/HeroSection.tsx`：h1 按 `\n` 拆行渲染
- `src/components/sections/AboutSection.tsx`：标题改为"关于我"，卡片改为"当前重点"
- `src/components/sections/CodePilotSection.tsx`：渲染 painPoint，流程改为编号列表
- `src/components/sections/ContactSection.tsx`：移除 CodePilot 仓库按钮和卡片

## Not Changed

- Hero 背景、光晕、动画系统未修改
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未新增虚假指标
- 未新增后端 / 数据库

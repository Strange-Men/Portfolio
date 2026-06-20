# DEV_STATUS

当前阶段：Phase 7-5.1

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
v1.24.0-borderglow-motion-system
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 当前未做

* 没有自定义域名
* 没有新增更多项目
* 没有 Demo 链接
* 没有简历下载
* 没有后端
* 没有数据库
* 没有表单提交
* 没有接入 LineWaves
* 没有接入 ProfileCard

## Phase 7-4：Docs Context Index

本轮完成文档上下文索引与防爆 token 规范：

- 新增 docs/00_AI_CONTEXT_INDEX.md
- 新增 docs/01_CURRENT_PROJECT_CONTEXT.md
- 新增 docs/35_DOCS_MAINTENANCE_RULES.md
- 明确后续 AI 接管时默认只读 hot context
- 明确视觉、动效、版本、投递等任务按需读取专项文档
- 明确历史阶段文档默认不读
- 明确新增文档不应复制大段日志和重复内容
- 未修改 src/
- 未安装依赖
- 未接入新功能

## 版本状态

当前最新版本：

```txt
v1.26.1-layout-copy-background-hotfix
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## Phase 7-5：Layout / Copy / Background Polish

用户在最终线上检查后提出 4 个细节优化：

- About 并排信息卡需要等宽
- 页面正式内容中的"实习"需要泛化为"工作 / 求职"
- Hero 小字补充"求职方向"
- Hero 之后背景需要比纯黑更有层次

本轮调整：

- 优化 About 信息卡布局，桌面端三卡等宽
- 将页面正式内容中的"实习"改为"工作 / 求职"
- 将 Hero 小字调整为 "2027 届人工智能本科生 · 求职方向"
- 增强 Hero 后 low-contrast ambient background
- 保持 BorderGlow / RevealOnScroll 不变
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未接入 LineWaves / ProfileCard

## Phase 7-5.1：Layout / Meta / Ambient Background Hotfix

用户检查 Phase 7-5 后发现：

- 小字有发糊感
- About 三个信息卡仍未真正等宽
- 身份卡不应显示 "· 求职方向"
- Hero 后背景仍不明显

本轮调整：

- 修复 RevealOnScroll 初始 blur 从 8px 降至 4px，is-visible 后使用 filter: none + will-change: auto
- 修复 About 三个信息卡桌面端等宽等高（RevealOnScroll wrapper 加 h-full min-w-0）
- 拆分 `identity` 与 `heroMeta`：identity = "2027 届人工智能本科生"，heroMeta = "2027 届人工智能本科生 · 求职方向"
- Hero 使用 `profile.heroMeta`
- About 身份卡使用 `profile.identity`
- 修复 ambient background 层级：从负 z-index 伪元素改为正 z-index 显式 div 层
- 移除 About / CodePilot / Contact section 的 bg-zinc-950，让 ambient 背景可见
- 保持 BorderGlow 核心机制不变
- 保持 RevealOnScroll 组件逻辑不变
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未接入 LineWaves / ProfileCard

## Phase 7-5.2：Background / Card Glow / Mobile Polish

用户继续人工检查后发现：

- Hero 与后续页面背景过渡偏硬
- BorderGlow 卡片内部仍有粉色雾感
- 手机端卡片没有 touch 动态效果
- 手机端 ambient background 过于集中，像一坨颜色

本轮调整：

- 为 Hero 底部增加柔和背景过渡
- 关闭 BorderGlow 的内部 fill 层，保留边框追光和轻微边缘外光
- 为 BorderGlowCard 增加移动端 touch active 交互
- 为移动端 ambient background 增加单独降噪规则
- 保持桌面端 BorderGlow 核心机制不变
- 保持 RevealOnScroll 不变
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未接入 LineWaves / ProfileCard

## 下一步

建议进入：

```txt
v1.27.0-production-verify
```

目标：人工确认 Vercel 线上页面已更新到 v1.26.2 版本，并做最终线上可用性检查。

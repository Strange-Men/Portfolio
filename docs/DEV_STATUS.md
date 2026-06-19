# DEV_STATUS

当前阶段：Phase 7-1

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
- Phase 6-12：投递版本冻结文档
- Phase 6-12.1：创建 v1.23.0-release-freeze tag
- Phase 6-12.2：创建 v1.23.1-contact-copy tag
- Phase 7-1：BorderGlow 项目卡片试点

## v1.24.0-borderglow-experiment 结论

本轮在实验分支中完成 BorderGlow 项目卡片试点：

- 创建 experiment/borderglow-card 分支
- 新增轻量 BorderGlowCard 组件
- 只在 CodePilot 项目卡片上试点
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装 ogl
- 未新增动画库
- 未新增 Demo
- 未新增简历下载
- 未新增项目
- 支持移动端降级
- 支持 prefers-reduced-motion
- npm run build：待记录

## 版本状态

当前稳定投递版本：

```txt
v1.23.1-contact-copy
```

当前实验分支：

```txt
experiment/borderglow-card
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 当前未做

* 没有自定义域名
* 没有接入 LineWaves
* 没有接入 ProfileCard
* 没有安装 ogl
* 没有 Demo 链接
* 没有后端
* 没有数据库
* 没有表单提交
* 没有新增更多项目

## 下一步

用户人工确认效果后再决定：

1. 合并到 main 并创建 v1.24.0-borderglow-experiment tag
2. 或放弃实验，保留 v1.23.1-contact-copy 作为稳定投递版本

# BorderGlow Experiment

## Scope

本轮只在 CodePilot 项目卡片上试点 BorderGlow 交互。

## Why BorderGlow

- 与当前暗色玻璃风格匹配
- 适合未来多个项目卡片复用
- 不需要额外依赖
- 比 LineWaves / ProfileCard 更适合当前阶段

## Implementation

- 新增 BorderGlowCard 轻量组件
- 使用 CSS variables 跟随鼠标位置
- 只用于 CodePilot 项目卡片
- 移动端和 reduced motion 降级

## Constraints

- 不接入 LineWaves
- 不接入 ProfileCard
- 不安装 ogl
- 不新增假链接
- 不改变页面信息架构

## Review Notes

用户需要人工确认：

- glow 是否太亮
- 是否影响文字阅读
- 移动端是否自然
- 是否值得合并 main

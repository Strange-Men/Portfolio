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

## Phase 7-1.1 Adjustment

用户人工测试后认为上一版效果更像普通内部光晕，不像参考图里的边缘追光。

本轮将实现从 cursor radial fill 调整为 edge-proximity + cursor-angle 的边缘光辉逻辑：

- 使用 --edge-proximity 判断鼠标是否靠近边缘
- 使用 --cursor-angle 控制光辉方向
- 使用 .edge-light 提供外侧边缘 glow
- 继续只作用于 CodePilot 项目流程卡片
- 不接入 LineWaves / ProfileCard
- 不安装依赖

## Review Notes

用户需要人工确认：

- glow 是否太亮
- 是否影响文字阅读
- 移动端是否自然
- 是否值得合并 main

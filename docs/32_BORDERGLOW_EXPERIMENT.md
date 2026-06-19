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

## Phase 7-1.2 Direction and Coverage Fix

用户人工测试发现：

- 鼠标位于右上角时，光出现在左上角，说明 cursor-angle / conic mask 方向存在反向问题。
- 只有 CodePilot 流程卡有动效，其他主要玻璃卡片没有统一动态风格。

本轮调整：

- 将主光源从 cursor-angle / conic-gradient 改为 pointer-position border glow
- 使用 --glow-x / --glow-y 让最亮位置直接跟随鼠标
- 保留 --edge-proximity 控制只有靠近边缘时增强光效
- 将 BorderGlowCard 扩展到 Hero 信息卡、About 信息卡、CodePilot 流程卡、Contact 信息卡
- 不应用到按钮、tag、chip、导航和正文
- 仍不接入 LineWaves / ProfileCard
- 仍不安装依赖

## Review Notes

用户需要人工确认：

- 鼠标在右上角，光是否在右上角
- 鼠标在左上角，光是否在左上角
- 鼠标在右下角，光是否在右下角
- 光是否主要贴着边缘，不是整块内部大光斑
- Hero 信息卡是否有统一效果
- About 三个小卡是否有轻微统一效果
- CodePilot 流程卡是否效果正常
- Contact 联系卡是否效果正常
- 按钮 / tag / chip 是否没有乱加动效
- 移动端是否正常降级
- 文字是否始终清晰
- 是否值得合并 main

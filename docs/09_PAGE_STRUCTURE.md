# Portfolio 页面结构规划

## 1. 页面整体结构

第一版是单页静态作品集。

页面顺序固定为：

1. Hero
2. About
3. CodePilot
4. Contact

说明：

- Hero 负责第一眼定位。
- About 负责补充背景。
- CodePilot 是页面核心。
- Contact 负责转化和联系。
- 不新增其他模块。

## 2. 全局布局原则

设计基调：

Dark Technical Editorial Portfolio

布局原则：

- 暗色高级
- 内容优先
- CodePilot 优先
- 信息层级清楚
- 视觉服务内容
- 不做复杂动效
- 不做 cursor spotlight
- 不做 WebGL
- 不做 ReactBits

## 3. Header / Navigation

是否需要 Header：

第一版可以有一个轻量顶部导航。

导航项建议：

- CodePilot
- Contact

可选：

- About

不放：

- Skills
- Workflow
- Blog
- Resume

结构建议：

桌面端：

- 左侧：姓名或 Portfolio 标识
- 中间或右侧：简洁胶囊导航
- 右侧：GitHub 链接

移动端：

- 可以简化为顶部姓名 + GitHub / Contact
- 不做复杂菜单

## 4. Hero 区块结构

目标：

用户 5 秒内知道：

- 我是谁
- 我投什么方向
- 我最核心的项目是什么

内容结构：

1. 小标签：
   2027 届人工智能本科生

2. 主标题：
   聚焦 AI 应用开发 / Agent 开发 / Python 后端

3. 副标题：
   当前核心项目是 CodePilot，一个面向 GitHub 仓库理解与代码审查的 AI 应用项目。

4. CTA：
   - 查看 CodePilot
   - GitHub
   - 联系我

布局建议：

桌面端：

- 接近全屏 Hero
- 中央或偏左布局
- 大字号标题
- 下方放 CTA
- 可有底部辅助信息，但不要太多

移动端：

- 标题字号收敛
- CTA 纵向或换行排列
- 保证第一屏不拥挤

## 5. About 区块结构

目标：

简短说明个人背景和技术关注点。

内容结构：

1. 区块标题：
   About

2. 简短介绍：
   - 2027 届人工智能本科生
   - 求职方向：AI 应用开发 / Agent 开发 / Python 后端
   - 当前重点项目：CodePilot
   - 关注真实工程化、小步迭代、可上线项目

3. 辅助信息：
   可以用 2-3 个短标签表达方向，例如：
   - AI Application
   - Agent Development
   - Python Backend

注意：

- 不写长篇自我介绍。
- 不写"精通"。
- 不写夸张自评。

## 6. CodePilot 区块结构

目标：

CodePilot 是页面核心模块，必须比其他模块更详细。

内容结构：

### 6.1 项目标题

- CodePilot
- GitHub Repository Understanding & AI Code Review

### 6.2 项目一句话

输入 GitHub 仓库链接，解析源码结构，构建结构化上下文，并生成代码审查报告。

### 6.3 核心流程

用 4 步表达：

1. 输入 GitHub 仓库链接
2. 解析源码结构
3. 构建结构化上下文
4. 生成 Markdown 审查报告

### 6.4 技术栈

展示：

- Python
- FastAPI
- React
- Tree-sitter
- LLM API
- Markdown Report

### 6.5 可讲技术点

可以展示 3-5 个：

- 仓库解析
- 源码结构分析
- 结构化上下文
- AI 审查报告生成
- Mock / 真实 LLM 模式

### 6.6 链接

- GitHub：https://github.com/Strange-Men/CodePilot
- Demo：不展示或标记为后续补充，不编造链接

布局建议：

桌面端：

- CodePilot 使用大卡片或重点展示区
- 左侧讲项目定位和流程
- 右侧放技术栈 / 可讲技术点 / 链接
- 视觉权重高于 About 和 Contact

移动端：

- 单列展示
- 先项目定位，再流程，再技术栈，再链接
- 保证不堆太长

## 7. Contact 区块结构

目标：

提供真实联系入口。

内容结构：

1. 标题：
   Contact

2. 一句话：
   如果你对 AI 应用开发、Agent 开发或 Python 后端实习岗位感兴趣，可以通过以下方式联系我。

3. 入口：

- Email：1643229721@qq.com
- GitHub：Strange-Men

不放：

- 简历下载按钮
- 未确认平台
- 空链接
- Resume: TBD

布局建议：

- 简洁
- 按钮或链接清晰
- 移动端容易点击

## 8. 页面信息优先级

从高到低：

1. 求职方向
2. CodePilot
3. 个人背景
4. GitHub / Email

说明：

如果页面空间有限，优先保证 Hero 和 CodePilot，不要为了装饰压缩核心内容。

## 9. 响应式结构原则

桌面端：

- Hero 可以接近全屏
- CodePilot 可以双栏
- About 和 Contact 保持简洁

移动端：

- 全部单列
- 标题字号降低
- CTA 可以换行
- 不做复杂导航
- 不出现横向滚动

## 10. 暂不进入实现的内容

本轮不实现：

- React 组件
- Tailwind 样式
- 动效
- cursor spotlight
- 图片背景
- 字体引入
- 真实部署

## 11. 页面结构验收标准

页面结构规划完成后，应满足：

1. 只包含 Hero / About / CodePilot / Contact。
2. 每个模块目标明确。
3. CodePilot 是页面核心。
4. Contact 只包含真实 Email 和 GitHub。
5. 不出现未确认链接。
6. 不新增 PRD 之外的功能。
7. 可以进入下一步：规划核心交互流程。

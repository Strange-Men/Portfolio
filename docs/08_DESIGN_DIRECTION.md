# Portfolio 设计基调

## 1. 设计关键词

本项目第一版采用：

- Dark Technical Editorial
- 暗色技术档案风
- 高级但克制
- 内容优先
- CodePilot 优先
- 静态优先
- 可上线优先

说明：

设计目标不是炫技，而是让招聘方更快理解用户的 AI 应用开发方向和 CodePilot 项目能力。

## 2. 参考风格提炼

用户提供的参考风格可提炼为：

- 全屏暗色 Hero
- 大字号 editorial 标题
- Serif italic 作为视觉点缀
- Inter 风格 UI 字体
- 胶囊式顶部导航
- 中央聚焦内容
- 底部辅助信息块
- 低饱和暗色背景
- 轻微高级入场动画
- 后续可探索 cursor spotlight reveal

注意：

这些是风格提炼，不是直接复制。
不得出现参考项目品牌、地质内容或自然石材相关元素。

## 3. Portfolio 转译方式

### 3.1 Hero

Hero 应该表达：

- 用户身份
- 求职方向
- CodePilot 是核心项目
- 页面是实习投递入口

Hero 文案方向：

```txt
2027 届人工智能本科生
聚焦 AI 应用开发 / Agent 开发 / Python 后端
当前核心项目：CodePilot
```

视觉方向：

- 接近全屏 Hero
- 暗色背景
- 大字号标题
- serif italic 可用于关键词点缀
- CTA 指向 CodePilot 和 Contact
- 不放简历下载按钮

### 3.2 About

About 要短，不做长篇自我介绍。

视觉方向：

- 简洁文本块
- 控制阅读宽度
- 强调真实背景和求职方向
- 不写夸张自评

### 3.3 CodePilot

CodePilot 是页面核心模块。

视觉方向：

- 做成最重要的内容卡片或主展示区
- 信息层级清楚
- 展示项目定位、流程、技术栈、GitHub 链接
- 不被动效和背景抢走重点

### 3.4 Contact

Contact 只提供真实入口：

- Email：1643229721@qq.com
- GitHub：Strange-Men

视觉方向：

- 简洁
- 可点击
- 不放未确认平台
- 不放简历下载按钮

## 4. 字体方向

推荐字体策略：

- UI / 正文字体：Inter 或系统 sans-serif
- 视觉点缀字体：Playfair Display italic 或同类 serif italic

说明：

当前只是设计基调，不安装字体，不写代码。
后续技术栈阶段再决定是否通过 Google Fonts 引入。

## 5. 色彩方向

第一版倾向暗色高级。

建议方向：

- 背景：接近黑色 / 深灰
- 主文字：白色或浅灰
- 次级文字：低饱和灰色
- 边框：半透明白色或深灰
- 强调色：克制使用，可以偏冷色或中性色
- CTA：明确但不刺眼

禁止：

- 高饱和大面积渐变
- 花哨霓虹
- 过多发光
- 视觉盖过内容

## 6. 动效原则

MVP 阶段不做复杂动效。

允许后续考虑：

- 轻微 fade-in
- hover transition
- 按钮 hover
- 卡片轻微浮动
- 首屏标题轻微入场

当前不做：

- cursor spotlight
- canvas mask
- WebGL
- ReactBits
- GSAP
- Framer Motion
- 视频背景
- 复杂滚动动画

cursor-following spotlight 可以作为后续增强方向，但不进入当前 MVP。

## 7. 导航方向

第一版导航必须简单。

建议导航项：

- CodePilot
- Contact

可选：

- About

不建议放：

- Skills
- Workflow
- Blog
- Projects 多项目导航
- Resume 下载

因为第一版 MVP 不包含这些模块。

## 8. 信息层级

页面信息优先级：

1. 我是谁、投什么方向
2. CodePilot 是什么
3. CodePilot 为什么能证明能力
4. 如何联系我 / 查看 GitHub

视觉层级必须服务以上顺序。

## 9. 设计边界

第一版设计不能突破最终 PRD。

不得新增模块：

- Skills
- Workflow
- Blog
- Portfolio 开发过程
- 多项目展示

不得新增功能：

- AI Agent
- AI 问答
- 后端
- 登录
- 数据库
- 简历下载

## 10. 最终设计结论

Portfolio 第一版设计基调确定为：

```txt
Dark Technical Editorial Portfolio
```

解释：

这是一个暗色、高级、技术编辑感的静态作品集页面。
它借鉴 full-screen dark hero、editorial typography、pill navigation 和克制入场动画的视觉语言，但当前阶段只固化设计方向，不进入实现。

下一步进入：

```txt
Phase 3-2：规划页面结构
```

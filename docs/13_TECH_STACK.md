# Portfolio 技术栈锁定

## 1. 技术栈选择原则

Portfolio 第一版是静态个人作品集网站。

技术选择原则：

- 可快速上线
- 可维护
- 可构建
- 成本低
- 依赖少
- 不为炫技牺牲内容
- 不引入后端复杂度
- 不引入当前 MVP 不需要的库

当前优先级：

```txt
稳定可交付 > 可维护 > 性能 > 视觉实现 > 动效复杂度
```

---

## 2. 固定技术栈

第一版固定使用：

| 层级   | 技术           |
| ---- | ------------ |
| 前端框架 | React        |
| 构建工具 | Vite         |
| 语言   | TypeScript   |
| 样式   | Tailwind CSS |
| 包管理  | npm          |
| 部署倾向 | Vercel       |
| 项目类型 | 静态单页作品集      |

说明：

* 当前只做前端静态页面。
* 不做后端。
* 不做数据库。
* 不做登录。
* 不做 AI 问答。
* 不接入 LLM API。

---

## 3. 版本策略

后续初始化工程时：

* 使用 Vite 创建 React + TypeScript 项目。
* React / Vite / Tailwind 使用当时稳定默认版本。
* 不手动追求最新实验版本。
* 不引入不必要 polyfill。
* 不为了动画或图标额外堆依赖。

如果工具链安装失败，必须先报告错误，不允许盲目换技术栈。

---

## 4. 样式技术

第一版样式使用：

```txt
Tailwind CSS
少量全局 CSS
CSS variables 可选
```

允许：

* 暗色主题
* 响应式布局
* hover / focus-visible
* 简单 transition
* 少量自定义 keyframes，后续如果明确允许

不允许：

* 大量手写复杂 CSS
* 一切样式堆在单个巨大文件
* 为了动效引入重型动画库
* 用 WebGL / Canvas 做 MVP 视觉

---

## 5. 字体策略

设计方向参考：

* UI / 正文：Inter 或系统 sans-serif
* 视觉点缀：Playfair Display italic 或同类 serif italic

当前技术栈锁定阶段不引入字体。

后续实现时可以二选一：

### 方案 A：系统字体优先

优点：

* 性能最好
* 无外部字体请求
* 更稳

### 方案 B：Google Fonts

可考虑：

* Inter
* Playfair Display

限制：

* 只能引入必要字重
* 不阻塞核心文字展示
* 如果影响性能，退回系统字体

---

## 6. 图标策略

第一版不强制使用图标库。

默认策略：

* 优先使用文字链接和按钮
* GitHub / Email 不必须使用图标
* 如果需要图标，后续单独确认

当前不引入：

* lucide-react
* react-icons
* 其他图标库

原因：

* 第一版 Contact 入口很少
* 文字按钮更清晰
* 减少依赖

---

## 7. 动效技术策略

MVP 阶段不引入动画库。

当前不使用：

* ReactBits
* GSAP
* Framer Motion
* WebGL
* canvas mask
* cursor spotlight
* 视频背景

后续允许的轻量方式：

* Tailwind transition
* CSS hover
* CSS focus-visible
* 少量 CSS keyframes
* prefers-reduced-motion 降级

动效原则：

```txt
动效只服务阅读和反馈，不服务炫技。
```

---

## 8. 数据与内容管理

第一版内容可以使用静态数据文件管理。

后续实现时建议：

```txt
src/data/profile.ts
src/data/codepilot.ts
src/data/links.ts
```

内容应集中管理：

* Email
* GitHub
* CodePilot 链接
* Hero 文案
* CodePilot 技术栈
* CTA 链接

禁止：

* 文案散落在多个组件里难以维护
* 假链接
* 空链接
* 未确认 Demo
* 未确认简历入口

---

## 9. 路由策略

第一版使用单页结构。

不使用：

* React Router
* 多页面路由
* 动态路由
* 博客路由
* 项目详情页路由

页面锚点：

```txt
#hero
#about
#codepilot
#contact
```

---

## 10. 后端与 API 策略

第一版不需要后端。

不做：

* API 服务
* 数据库
* 用户登录
* 表单提交
* AI 问答
* LLM 调用
* Serverless Function
* CMS

原因：

当前目标是先完成静态网页并上线，用于实习投递。

---

## 11. 构建与检查策略

后续进入代码阶段后，每轮必须运行：

```bash
npm run build
```

如果后续配置 lint，也应运行：

```bash
npm run lint
```

但 lint 是否启用在工程初始化阶段再确认。

构建失败时：

* 不进入下一轮
* 不继续加功能
* 先最小修改修复
* 记录问题原因

---

## 12. 部署策略

部署倾向：

```txt
Vercel
```

原因：

* 适合 Vite 静态站
* 上线快
* 适合个人作品集
* 后续迭代方便

备选：

```txt
GitHub Pages
```

当前阶段不部署。
部署在后续阶段单独执行。

---

## 13. 环境与路径策略

本地项目路径：

```txt
D:\Claude_workfile\Portfolio
```

允许使用系统 Node：

```txt
C:\Program Files\nodejs
```

但要求：

* 项目文件必须在 `D:\Claude_workfile\Portfolio`
* npm cache 必须在项目目录内
* 构建产物必须在项目目录内
* 不把依赖或生成物放到 C 盘项目路径

npm cache 目标：

```txt
D:\Claude_workfile\Portfolio\.npm-cache
```

---

## 14. 禁止技术清单

当前 MVP 禁止：

* Next.js
* 后端框架
* 数据库
* CMS
* 登录系统
* 表单服务
* LLM API
* LangChain
* Agent 框架
* ReactBits
* GSAP
* Framer Motion
* WebGL
* Three.js
* canvas spotlight
* 视频背景
* 图标库，除非后续明确确认

说明：

以上技术不是永久禁止，而是不进入当前 MVP。

---

## 15. 技术栈验收标准

本阶段完成后，必须满足：

1. 固定技术栈清楚。
2. 禁止技术清楚。
3. 不做后端、不做 AI 问答、不做数据库。
4. 不引入动画库。
5. 不引入图标库，除非后续确认。
6. 内容管理方式有初步方向。
7. 部署倾向明确。
8. 环境路径规则明确。
9. 当前仍不初始化工程。
10. 可以进入下一阶段：设计轻量架构。

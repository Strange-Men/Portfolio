# Portfolio 开发规范

## 1. 开发总原则

后续代码开发必须遵守：

- 每轮只做一个小任务。
- 先读上下文，再改代码。
- 先确认范围，再实现。
- 先静态，再动效。
- 先内容清楚，再视觉细节。
- 不允许一次性生成完整项目。
- 不允许无关重构。
- 不允许编造项目、链接、数据和经历。

每轮开发前必须读取：

```txt
docs/00_WORKFLOW_LOCK.md
docs/15_PROJECT_CONTEXT.md
docs/DEV_STATUS.md
```

---

## 2. 目录结构规范

后续工程初始化后，目录必须遵守轻量架构：

```txt
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   ├── profile.ts
│   ├── codepilot.ts
│   └── links.ts
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CodePilotSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── Tag.tsx
│       └── ExternalLink.tsx
└── styles/
    └── tokens.css
```

禁止：

* 把所有内容写在 App.tsx。
* 把所有样式写进一个巨大 CSS 文件。
* 把链接散落在多个组件中。
* 新增未经确认的目录结构。

---

## 3. 文件命名规范

组件文件：

* 使用 PascalCase。
* 示例：`HeroSection.tsx`、`CodePilotSection.tsx`、`ExternalLink.tsx`

数据文件：

* 使用 lowercase。
* 示例：`profile.ts`、`codepilot.ts`、`links.ts`

样式文件：

* 使用 lowercase。
* 示例：`tokens.css`

文档文件：

* 使用编号 + 大写英文。
* 示例：`16_DEV_RULES.md`

---

## 4. 组件拆分规范

### 4.1 App 层

`App.tsx` 只负责组合页面。

允许：

* 引入 Section
* 渲染页面顺序
* 包裹全局布局

禁止：

* 写大量文案
* 写链接配置
* 写复杂逻辑
* 写所有样式

### 4.2 Section 层

只允许四个核心 Section：

* HeroSection
* AboutSection
* CodePilotSection
* ContactSection

每个 Section 只负责自己的内容。

禁止新增：

* SkillsSection
* WorkflowSection
* BlogSection
* ProjectsSection
* ResumeSection

除非后续重新经过边界确认。

### 4.3 UI 层

UI 组件只做复用视觉单元。

允许：

* Button
* ExternalLink
* Tag
* SectionLabel

禁止：

* UI 组件直接写业务文案
* UI 组件硬编码真实链接
* UI 组件承担业务逻辑

---

## 5. Data 层规范

所有可变内容集中在 `src/data/`。

必须集中管理：

* Email
* GitHub 主页
* CodePilot GitHub
* Hero 文案
* About 文案
* CodePilot 技术栈
* CTA 链接

真实信息：

```txt
Email: 1643229721@qq.com
GitHub: https://github.com/Strange-Men
CodePilot GitHub: https://github.com/Strange-Men/CodePilot
```

禁止：

* 假链接
* 空链接
* Demo 按钮
* 简历下载按钮
* Resume: TBD
* 未确认平台入口
* 未确认项目

---

## 6. 样式规范

样式使用：

* Tailwind CSS 为主
* 少量全局 CSS
* tokens.css 可用于基础 token

允许：

* 暗色背景
* 响应式布局
* hover
* focus-visible
* 简单 transition

禁止：

* 复杂动效
* ReactBits
* GSAP
* Framer Motion
* WebGL
* cursor spotlight
* canvas mask
* 视频背景
* 大量自定义复杂 CSS

---

## 7. 设计实现规范

设计基调：

```txt
Dark Technical Editorial Portfolio
```

实现时必须保证：

* 内容优先
* CodePilot 优先
* 视觉服务内容
* 不为了效果牺牲阅读
* 不使用参考品牌内容
* 不照抄任何外部项目文案

Hero 可以接近全屏，但不能影响移动端阅读。

---

## 8. 链接规范

当前允许链接：

```txt
GitHub: https://github.com/Strange-Men
CodePilot GitHub: https://github.com/Strange-Men/CodePilot
Email: mailto:1643229721@qq.com
```

外链要求：

* 必须真实
* 必须可点击
* 后续实现时外链使用安全打开方式
* 不允许空链接
* 不允许假链接

未确认内容：

* Demo 不展示
* 简历不展示
* 其他平台不展示

---

## 9. 可访问性规范

后续实现时必须保证：

* 语义化 HTML
* 链接和按钮可聚焦
* focus-visible 可见
* 文本对比度足够
* 图标不能替代文字
* Email / GitHub 必须有文本说明
* 动效尊重 prefers-reduced-motion

禁止：

* hover 才能看到关键信息
* 只有图标没有文字
* 颜色对比过低
* 动效影响阅读

---

## 10. 响应式规范

必须考虑：

```txt
375px
430px
768px
1024px
1440px
1920px
```

要求：

* 不出现横向滚动
* 移动端单列展示
* CTA 可点击区域足够大
* CodePilot 信息可读
* Contact 入口容易点击

---

## 11. 环境规范

项目路径：

```txt
D:\Claude_workfile\Portfolio
```

允许使用系统 Node：

```txt
C:\Program Files\nodejs
```

但要求：

* npm cache 必须在 `D:\Claude_workfile\Portfolio\.npm-cache`
* 依赖安装在项目目录
* 构建产物在项目目录
* 不把项目生成物放到 C 盘路径

---

## 12. Git 规范

每轮开发前：

```bash
git status
```

每轮完成后：

```bash
git status
git add .
git commit -m "清晰的提交信息"
```

要求：

* 工作区不干净时，不进入下一轮。
* 不在未提交状态下连续开发。
* 不 force push。
* 不 reset --hard。
* 不 clean -fd。
* 不提交 `.env`、缓存、临时文件。

阶段性重要节点再打 tag，普通文档阶段不强制打 tag。

---

## 13. 构建与检查规范

进入代码阶段后，每轮必须运行：

```bash
npm run build
```

如果配置了 lint，则运行：

```bash
npm run lint
```

构建失败时：

1. 停止新增功能。
2. 记录完整错误。
3. 判断最可能根因。
4. 只修改最小相关文件。
5. 重新运行 build。
6. 修复后更新 DEV_STATUS。

---

## 14. 错误处理规范

遇到报错时禁止盲目重构。

流程：

1. 复现错误。
2. 保留完整报错。
3. 判断错误类型。
4. 定位最小相关文件。
5. 只做最小修复。
6. 重新运行检查。
7. 说明修复原因。

禁止：

* 为修一个小错重写整个项目。
* 同时改多个无关模块。
* 删除测试或检查。
* 绕过错误继续开发。

---

## 15. 文档更新规范

每轮完成后必须更新：

```txt
docs/DEV_STATUS.md
```

如果有重要变化，还要更新：

```txt
docs/15_PROJECT_CONTEXT.md
```

如果进入代码阶段并产生用户可见变化，后续可新增或更新：

```txt
docs/CHANGELOG.md
```

当前还没有代码，因此暂不强制 CHANGELOG。

---

## 16. 禁止事项总表

当前 MVP 禁止：

* 新增项目
* 编造经历
* 编造数据
* 编造 Demo
* 空链接
* 假链接
* 简历下载按钮
* AI Agent
* AI 问答
* 后端
* 登录
* 数据库
* 博客
* Skills 大而全展示
* Workflow 详细展示
* Portfolio 开发过程展示
* 多页面路由
* ReactBits
* GSAP
* Framer Motion
* WebGL
* cursor spotlight
* canvas mask
* 视频背景

---

## 17. 开发规范验收标准

本阶段完成后，必须满足：

1. 目录规范明确。
2. 组件拆分规范明确。
3. Data 层规范明确。
4. 样式规范明确。
5. 链接规范明确。
6. 可访问性和响应式规范明确。
7. Git 规范明确。
8. 构建检查规范明确。
9. 错误处理规范明确。
10. 当前仍不写代码、不初始化工程。

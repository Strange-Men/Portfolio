# Portfolio 参考文件夹与参考代码规则

## 1. 本阶段目标

本阶段目标不是寻找代码，也不是复制参考项目。

本阶段只做：

- 指定参考文件夹用途
- 明确参考代码使用边界
- 明确哪些内容可以参考
- 明确哪些内容禁止复制
- 防止后续开发阶段 AI 因参考内容失控

当前结论：

```txt
当前没有可直接复用的参考代码。
当前不下载外部代码。
当前不复制任何参考页面。
当前只建立参考规则。
```

---

## 2. 参考文件夹位置

参考文件夹固定为：

```txt
references/
```

当前只创建：

```txt
references/README.md
```

后续如果需要补充参考资料，可以放入：

```txt
references/
├── README.md
├── design/
├── components/
└── screenshots/
```

但必须注意：

* `references/` 不属于正式源码。
* `references/` 不参与构建。
* `references/` 里的内容只用于参考。
* 不允许直接把参考内容复制进正式页面。

---

## 3. 当前参考来源

当前 Portfolio 只允许参考以下内容：

### 3.1 项目内容来源

正式项目内容来源：

* docs/15_PROJECT_CONTEXT.md
* docs/07_PRD_FINAL.md
* docs/09_PAGE_STRUCTURE.md
* docs/10_INTERACTION_FLOW.md
* docs/11_PROJECT_SCOPE.md

CodePilot 只作为 Portfolio 的展示内容来源。

允许引用：

* CodePilot 项目名称
* CodePilot 项目定位
* CodePilot 核心流程
* CodePilot 技术栈
* CodePilot GitHub 链接

不允许：

* 编造 CodePilot Demo
* 编造 CodePilot 指标
* 编造 CodePilot 未确认功能
* 把 Portfolio 包装成 CodePilot
* 把 Portfolio 包装成当前 AI Agent 项目

### 3.2 设计风格来源

当前设计风格已固化为：

```txt
Dark Technical Editorial Portfolio
```

允许参考：

* 暗色高级感
* 大字号 Hero
* 技术编辑感
* serif italic 点缀
* 胶囊式导航风格
* 克制 hover 和 transition
* 内容优先的信息层级

不允许：

* 复制外部品牌名称
* 复制外部页面文案
* 复制外部图片
* 复制外部动效代码
* 复制 cursor spotlight 实现
* 引入 WebGL / canvas mask / ReactBits / GSAP / Framer Motion

---

## 4. 参考代码规则

当前没有允许直接复用的参考代码。

后续如果确实需要引入参考代码，必须先单独确认：

1. 来源 URL
2. 作者或项目名称
3. License
4. 是否允许商业或个人作品集使用
5. 是否会引入额外依赖
6. 是否突破当前 MVP 边界
7. 是否需要改动技术栈
8. 是否影响性能和可维护性
9. 是否可以用更简单方式自己实现

未经确认，不允许复制任何外部代码。

---

## 5. 可以参考什么

允许参考：

* 组件拆分思路
* 数据集中管理思路
* Tailwind class 组织方式
* 响应式布局思路
* 按钮和卡片的结构思路
* 信息层级组织方式
* 设计节奏和留白方式

---

## 6. 禁止参考什么

禁止复制：

* 完整页面
* 外部项目源码
* 外部品牌内容
* 外部文案
* 外部图片
* 外部视频
* 外部复杂动画
* 外部未确认 license 的代码
* 外部需要付费或授权的素材
* 外部 AI 生成素材链接

禁止引入：

* ReactBits
* GSAP
* Framer Motion
* WebGL
* Three.js
* canvas spotlight
* 视频背景
* 图标库，除非后续确认
* 后端服务
* 数据库
* AI 问答能力

---

## 7. 参考文件夹使用规范

`references/` 只允许放：

* 参考说明
* 设计风格笔记
* 组件模式说明
* 截图说明
* license 记录
* 外部链接记录

不允许放：

* 可运行源码
* node_modules
* 构建产物
* 外部完整模板
* 未确认 license 的代码
* 大体积图片或视频
* 与 Portfolio 无关素材

---

## 8. 后续开发时如何使用参考

后续每次开发如果要使用参考内容，必须在 Prompt 中说明：

```txt
参考目标：
参考范围：
允许借鉴：
禁止复制：
是否涉及 license：
是否引入依赖：
是否影响 MVP 边界：
```

没有说明清楚时，Claude / Codex 不允许主动使用参考内容。

---

## 9. 当前 Portfolio 的实际参考结论

当前阶段：

```txt
没有可直接复用的参考代码。
没有外部模板。
没有外部素材。
没有外部组件库。
```

当前只允许使用已有项目文档作为参考：

```txt
docs/00_WORKFLOW_LOCK.md
docs/15_PROJECT_CONTEXT.md
docs/16_DEV_RULES.md
docs/DEV_STATUS.md
```

后续代码实现必须自己按照已锁定架构实现，不复制外部代码。

---

## 10. 参考规则验收标准

本阶段完成后，必须满足：

1. 明确 references/ 文件夹用途。
2. 明确当前没有可直接复用参考代码。
3. 明确禁止复制外部页面、代码、文案、图片。
4. 明确参考代码必须先确认 license。
5. 明确外部参考不能突破 MVP。
6. 明确不下载、不复制、不引入模板。
7. 当前仍不写代码、不初始化工程。
8. 可以进入下一阶段：建立 Git 回滚策略。

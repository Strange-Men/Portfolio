# Portfolio 项目边界

## 1. 当前项目定位

Portfolio 第一版是一个面向实习投递的静态个人作品集网站。

核心目标：

- 展示用户的求职方向
- 讲清楚 CodePilot
- 提供真实 GitHub 和 Email 联系入口
- 完成一个可上线、可维护、可迭代的静态网页

当前不是：

- AI Agent 项目
- 后端项目
- 博客系统
- 全功能个人主页
- 多项目展示平台

## 2. 当前 MVP 范围

第一版只做 4 个模块：

1. Hero
2. About
3. CodePilot
4. Contact

模块顺序固定：

```txt
Hero → About → CodePilot → Contact
```

不允许新增其他页面模块。

---

## 3. 当前阶段允许做什么

当前第一版允许做：

### 3.1 Hero

允许展示：

- 2027 届人工智能本科生
- AI 应用开发 / Agent 开发 / Python 后端
- 当前核心项目 CodePilot
- CTA：查看 CodePilot / GitHub / 联系我

### 3.2 About

允许展示：

- 简短个人背景
- 求职方向
- 当前核心项目
- 技术关注点

要求：

- 简短
- 真实
- 不夸大

### 3.3 CodePilot

允许展示：

- 项目名称
- 项目定位
- 核心流程
- 技术栈
- 可讲技术点
- GitHub 链接

真实链接：

```txt
https://github.com/Strange-Men/CodePilot
```

Demo 未确认，第一版不展示 Demo 按钮。

### 3.4 Contact

允许展示：

- Email：1643229721@qq.com
- GitHub：Strange-Men

不展示其他未确认平台。

---

## 4. 当前阶段明确不做什么

第一版明确不做：

- AI Agent
- AI 问答
- 后端
- API 服务
- 登录
- 数据库
- 博客系统
- 多项目展示
- Skills 大而全展示
- Workflow 详细展示
- Portfolio 开发过程展示
- 简历下载按钮
- Demo 按钮
- 表单提交
- 评论系统
- 数据统计
- 国际化
- 多页面路由
- 复杂动效
- ReactBits
- WebGL
- cursor spotlight
- GSAP
- Framer Motion
- 视频背景

说明：

以上内容不是永久禁止，而是不进入当前 MVP。

---

## 5. 后续版本可以考虑什么

第一版 MVP 完成、上线、可投递后，后续可以再评估：

- 简历 PDF 下载
- Skills 简洁展示
- Workflow 小步迭代展示
- Portfolio 开发过程展示
- CodePilot Demo 链接
- 轻量动效
- 响应式增强
- AI Agent 能力
- AI 问答入口

但任何后续扩展都必须重新经过边界确认，不能在当前 MVP 中提前实现。

---

## 6. 内容边界

### 6.1 允许出现的项目

当前只允许出现：

- CodePilot
- Portfolio

### 6.2 禁止新增的内容

不允许新增：

- 未确认项目
- 未确认经历
- 未确认比赛或奖项
- 虚假数据
- 虚假 Demo
- 虚假效率提升指标
- 虚假链接
- 空链接
- Resume: TBD

### 6.3 简历入口边界

当前简历 PDF 未确认。

因此第一版：

- 不放简历下载按钮
- 不写 Resume: TBD
- 不展示空按钮
- 后续有真实 PDF 后再加

---

## 7. 设计边界

当前设计方向：

```txt
Dark Technical Editorial Portfolio
```

允许：

- 暗色高级视觉
- 大字号 Hero
- serif italic 视觉点缀
- 胶囊式导航参考
- 克制 hover
- 后续轻微入场动效

当前不允许：

- 复杂动效
- cursor spotlight
- canvas mask
- WebGL
- ReactBits
- 视频背景
- 动效抢走 CodePilot 重点

设计必须服务内容，不能反客为主。

---

## 8. 交互边界

当前只允许静态浏览和真实跳转。

允许交互：

- 页面锚点跳转
- GitHub 外链
- Email mailto 链接
- 按钮 hover
- 链接 focus-visible

不允许交互：

- AI 输入框
- 表单提交
- 登录
- 后端请求
- 数据保存
- 复杂 loading
- 复杂 error 页面
- 复杂滚动监听

---

## 9. 技术边界

当前尚未进入技术栈锁定阶段。

因此本阶段不决定具体实现细节。

但基于已有方向，后续可以倾向：

- React
- Vite
- TypeScript
- Tailwind CSS
- 静态部署

当前不允许：

- 现在初始化工程
- 现在安装依赖
- 现在写组件
- 现在引入动画库
- 现在引入后端

技术栈必须在下一阶段单独锁定。

---

## 10. 文件与模块边界

当前项目只有文档，不应出现前端代码。

当前允许存在：

```txt
docs/
.gitignore
```

当前不应出现：

```txt
src/
public/
package.json
vite.config.ts
tsconfig.json
index.html
node_modules/
dist/
```

如果后续进入工程初始化阶段，必须先完成：

1. 非功能需求
2. 技术栈锁定
3. 轻量架构
4. 开发规范
5. Git 回滚策略

---

## 11. 每轮开发边界

后续每轮任务必须包含：

- 当前阶段
- 当前目标
- 允许修改范围
- 禁止修改范围
- 验收标准
- 测试或检查命令
- Git 提交要求

每轮只允许做一个小任务。

禁止：

- 一个 Prompt 完成多个阶段
- 无关重构
- 未确认就新增功能
- 未提交就连续开发多轮

---

## 12. 边界验收标准

本项目边界完成后，必须满足：

1. 当前 MVP 范围清楚。
2. 当前不做事项清楚。
3. 后续可扩展事项清楚。
4. CodePilot 是核心项目。
5. Portfolio 是展示载体。
6. 不允许新增未确认项目。
7. 不允许提前进入代码开发。
8. 不允许把后续功能塞进当前 MVP。
9. 可以进入下一阶段：明确非功能需求。

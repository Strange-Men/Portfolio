# Portfolio 核心交互流程规划

## 1. 交互目标

第一版 Portfolio 的交互目标不是复杂操作，而是让招聘方快速完成 3 个判断：

1. 这个人是谁，投什么方向？
2. CodePilot 是什么，是否值得看？
3. 如何查看 GitHub 或联系本人？

页面交互必须服务这 3 个目标。

## 2. 用户进入路径

用户可能从以下入口进入 Portfolio：

- 简历中的作品集链接
- GitHub 个人主页链接
- 实习投递时附带的项目链接
- 面试官手动打开链接

进入后，用户默认落在 Hero 第一屏。

## 3. 主浏览路径

推荐主路径：

1. 打开页面
2. 看到 Hero，判断方向是否匹配
3. 点击或滚动到 CodePilot
4. 阅读 CodePilot 项目定位、流程、技术栈
5. 点击 CodePilot GitHub
6. 返回页面或继续查看 Contact
7. 通过 Email 联系，或点击 GitHub 查看更多代码

这个路径必须尽量短，不制造无关跳转。

## 4. Hero 交互流程

### 4.1 用户看到什么

Hero 第一屏展示：

- 2027 届人工智能本科生
- AI 应用开发 / Agent 开发 / Python 后端
- 当前核心项目：CodePilot
- CTA：查看 CodePilot / GitHub / 联系我

### 4.2 用户能做什么

用户可以：

- 点击"查看 CodePilot"跳转到 CodePilot 区块
- 点击 GitHub 打开 GitHub 入口
- 点击"联系我"跳转到 Contact 区块

### 4.3 成功状态

- 点击锚点后平滑滚动到对应区块
- 点击 GitHub 后打开真实链接
- CTA 文案明确，不让用户猜

### 4.4 失败或空状态

- 如果某个链接未确认，不显示按钮
- 不出现空链接
- 不出现 TBD 按钮
- 不放简历下载按钮

## 5. About 交互流程

### 5.1 用户看到什么

About 只补充背景：

- 2027 届人工智能本科生
- 求职方向
- 当前重点项目 CodePilot
- 关注工程化、小步迭代、可上线项目

### 5.2 用户能做什么

About 不需要复杂交互。

可以提供：

- 向下继续阅读 CodePilot 的视觉引导
- 简单标签帮助快速识别方向

### 5.3 成功状态

用户能在 10 秒内理解背景，不需要读长篇文字。

### 5.4 失败或空状态

- 不写长篇自我介绍
- 不写"精通"
- 不写无法证明的经历

## 6. CodePilot 交互流程

### 6.1 用户看到什么

CodePilot 是页面核心模块，展示：

- 项目名称
- 一句话定位
- 4 步核心流程
- 技术栈
- 可讲技术点
- GitHub 链接

### 6.2 用户能做什么

用户可以：

- 阅读项目介绍
- 查看核心流程
- 查看技术栈
- 点击 GitHub 链接：
  https://github.com/Strange-Men/CodePilot

### 6.3 成功状态

- 用户能理解 CodePilot 是 GitHub 仓库理解与 AI 代码审查应用
- 用户能看到真实 GitHub 链接
- 用户能判断这个项目是否值得在面试中追问

### 6.4 失败或空状态

- Demo 未确认，不展示 Demo 按钮
- 不写虚假在线演示
- 不写虚假指标
- 不展示过长版本迭代
- 不把 Portfolio 自己包装成核心 AI 项目

## 7. Contact 交互流程

### 7.1 用户看到什么

Contact 展示真实联系入口：

- Email：1643229721@qq.com
- GitHub：Strange-Men

### 7.2 用户能做什么

用户可以：

- 点击 Email 打开邮件客户端
- 点击 GitHub 打开 GitHub 页面

### 7.3 成功状态

- Email 可复制或可点击
- GitHub 链接真实
- 联系入口清晰可见

### 7.4 失败或空状态

- 不放未确认平台
- 不放简历下载按钮
- 不写 Resume: TBD
- 不放空链接

## 8. 页面锚点与 CTA 规划

建议锚点：

```txt
#hero
#about
#codepilot
#contact
```

建议 CTA：

Hero：

- 查看 CodePilot → #codepilot
- GitHub → https://github.com/Strange-Men
- 联系我 → #contact

CodePilot：

- 查看 CodePilot GitHub → https://github.com/Strange-Men/CodePilot

Contact：

- Email → mailto:1643229721@qq.com
- GitHub → https://github.com/Strange-Men

## 9. Loading / Error / Empty 状态

第一版是静态页面，原则上不需要复杂 loading。

但仍需规划：

### 9.1 Loading

- 静态页面无需业务 loading
- 图片或字体后续若引入，不能阻塞核心文字展示

### 9.2 Error

- 外链打不开属于外部问题，页面不做复杂错误页
- 但不能放空链接或假链接

### 9.3 Empty

- Demo 不存在：不展示 Demo 按钮
- 简历 PDF 不存在：不展示简历下载按钮
- 未确认平台：不展示入口

## 10. 移动端交互原则

移动端要求：

- CTA 可点击区域足够大
- 不做复杂导航
- 不出现横向滚动
- Hero 不挤压 CodePilot
- CodePilot 信息单列展示
- Contact 链接容易点击和复制

## 11. 暂不进入实现的交互

当前不做：

- AI 问答输入
- 表单提交
- 登录
- 后端请求
- 数据库存储
- 复杂 loading
- 复杂 error 页面
- cursor spotlight
- WebGL
- ReactBits 动效
- 复杂滚动监听

## 12. 交互流程验收标准

本轮规划完成后，应满足：

1. 用户路径清晰：Hero → CodePilot → Contact。
2. 每个 CTA 都有明确目标。
3. 不存在空链接和假链接。
4. Demo 未确认时不展示。
5. 简历 PDF 未确认时不展示。
6. CodePilot 是核心转化路径。
7. Contact 只展示真实 Email 和 GitHub。
8. 可以进入下一阶段：明确项目边界。

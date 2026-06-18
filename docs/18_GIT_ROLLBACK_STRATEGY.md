# Portfolio Git 回滚策略

## 1. 目标

Git 的作用不是最后保存成果，而是每一轮开发的安全网。

本项目 Git 策略目标：

- 每轮都有可回滚点
- 每个阶段都有清晰历史
- 不在未提交状态下连续开发
- 出错时优先最小修复
- 严禁危险回滚命令破坏已有成果
- 后续工程初始化和代码开发可安全推进

---

## 2. 当前仓库状态

当前仓库：

```txt
路径：D:\Claude_workfile\Portfolio
分支：main
远程：origin -> https://github.com/Strange-Men/Portfolio.git
当前阶段：开发前准备阶段
```

当前已经完成：

* 九准备第 1-9 步
* 项目边界
* 非功能需求
* 技术栈
* 轻量架构
* 全局上下文
* 开发规范
* 参考规则

当前还没有：

* package.json
* src/
* 前端代码
* 构建产物
* 部署

---

## 3. Commit 策略

每一轮完成后必须 commit。

要求：

* 每轮只做一个小任务。
* 每轮 commit 只包含本轮相关文件。
* 不把多个阶段混在一个 commit。
* commit 前必须 `git status`。
* commit 后必须确认 working tree clean。
* push 到 origin/main。

推荐提交格式：

```txt
docs: add xxx
docs: update xxx
chore: init xxx
feat: implement xxx
fix: repair xxx
style: refine xxx
```

当前文档阶段优先使用：

```txt
docs: ...
```

后续工程初始化阶段可以使用：

```txt
chore: init vite project
chore: configure tailwind
```

后续功能开发阶段可以使用：

```txt
feat: implement hero section
feat: implement codepilot section
fix: resolve build error
```

---

## 4. Tag 策略

普通文档阶段不强制打 tag。

以下节点建议打 tag：

### 4.1 准备阶段完成

当完成所有开发前准备，并确认可以初始化工程时，打：

```txt
prep-complete
```

### 4.2 工程初始化完成

当 Vite + React + TypeScript + Tailwind 初始化成功，且 build 通过时，打：

```txt
foundation-init
```

### 4.3 MVP 页面完成

当 Hero / About / CodePilot / Contact 全部实现，build 通过，移动端基本可用时，打：

```txt
mvp-page-complete
```

### 4.4 部署完成

当首次成功部署并可访问时，打：

```txt
mvp-deployed
```

说明：

* tag 只在明确里程碑使用。
* 不为每个小文档阶段打 tag。
* 打 tag 前必须 working tree clean。

---

## 5. 分支策略

当前默认使用：

```txt
main
```

当前项目足够小，不强制每个小任务开分支。

但以下情况建议创建临时分支：

* 尝试工程初始化失败风险较高
* 大范围样式调整
* 尝试复杂动效
* 接入部署配置
* 修改多个模块

临时分支命名建议：

```txt
experiment/init-vite
experiment/style-refine
experiment/deploy-vercel
fix/build-error
```

说明：

* 没有明确需要时，不主动开复杂分支。
* 分支合并前必须 build 通过。
* 不允许长期维护多个分支。

---

## 6. 禁止命令

Claude / Codex 不允许执行：

```bash
git reset --hard
git clean -fd
git push --force
git push -f
rm -rf .git
```

不允许：

* 删除 Git 历史
* 删除远程仓库
* 强制覆盖远程
* 清空工作区
* 未确认就回滚多个 commit

如果确实需要回滚，必须先向用户说明原因和影响，不允许直接执行危险命令。

---

## 7. 推荐安全回滚方式

### 7.1 查看历史

```bash
git log --oneline -10
```

### 7.2 查看当前改动

```bash
git status
git diff
```

### 7.3 放弃某个未提交文件的改动

必须先说明影响，再使用：

```bash
git restore path/to/file
```

### 7.4 回退某个提交

优先使用：

```bash
git revert <commit>
```

说明：

* revert 会新增一个反向提交
* 不破坏历史
* 比 reset --hard 安全

### 7.5 创建备份分支

在不确定时先创建：

```bash
git switch -c backup/before-risky-change
```

---

## 8. 错误处理流程

如果后续出现错误：

1. 停止新增功能。
2. 执行 `git status`。
3. 保存完整错误信息。
4. 判断错误是否由本轮修改引起。
5. 只检查本轮相关文件。
6. 优先最小修复。
7. 修复后运行检查命令。
8. 如果无法修复，提交错误报告，不继续乱改。

代码阶段必须重新运行：

```bash
npm run build
```

---

## 9. 进入下一轮前检查

每轮进入下一步前必须满足：

```txt
git status clean
本轮 commit 已完成
push 已成功
DEV_STATUS 已更新
没有未确认文件
没有构建失败
没有未记录错误
```

代码阶段还必须满足：

```txt
npm run build 通过
```

---

## 10. 代码阶段 Git 节奏

后续代码阶段建议节奏：

1. 工程初始化：1 个 commit
2. Tailwind 配置：1 个 commit
3. Data 层创建：1 个 commit
4. UI 基础组件：1 个 commit
5. HeroSection：1 个 commit
6. AboutSection：1 个 commit
7. CodePilotSection：1 个 commit
8. ContactSection：1 个 commit
9. 响应式修正：1 个 commit
10. 最终 build / 部署前清理：1 个 commit

每轮都要能回滚到上一个稳定点。

---

## 11. 里程碑建议

当前准备阶段完成后，建议下一轮在确认所有准备文档齐全后打：

```txt
prep-complete
```

但本轮不打 tag。
是否打 tag 留到下一阶段单独执行。

---

## 12. Git 回滚策略验收标准

本阶段完成后，必须满足：

1. Commit 策略明确。
2. Tag 策略明确。
3. 分支策略明确。
4. 禁止危险命令明确。
5. 安全回滚方式明确。
6. 错误处理流程明确。
7. 代码阶段 Git 节奏明确。
8. 当前仍不写代码、不初始化工程。
9. 可以进入下一阶段：准备阶段总审计。

# Portfolio 版本历史

## 版本规则

本项目从开发前准备阶段开始补充版本记录。

版本含义：

- v0：开发前准备阶段，包括想法验证、PRD、设计基调、页面结构、项目边界、技术栈、架构、开发规范、Git 策略。
- v1：正式代码开发阶段，从 Vite React TypeScript 工程初始化开始。

版本记录通过 Git tag 和本文档共同维护。

---

## v0：准备阶段

| Version | Commit | 阶段 | 说明 |
|---|---|---|---|
| v0.0.0-prep-complete | bb45fd2 | Phase 4-9 | 准备阶段审计通过，九准备和打地基完成。 |

已有里程碑 tag：

| Tag | Commit | 说明 |
|---|---|---|
| prep-complete | bb45fd2 | 准备阶段完成里程碑。 |

---

## v1：代码开发阶段

| Version | Commit | 阶段 | 说明 |
|---|---|---|---|
| v1.0.0-foundation-init | 9577c4d | Phase 5-1 | 初始化 Vite + React + TypeScript 工程基线。 |
| v1.1.0-tailwind | 2bb6d24 | Phase 5-2 | 配置 Tailwind CSS。 |
| v1.2.0-data-layer | a3d3a55 | Phase 5-3 | 创建 Data 层，集中管理 Profile / CodePilot / Links。 |
| v1.3.0-ui-components | 52d14b0 | Phase 5-4 | 创建 UI 基础组件。 |
| v1.4.0-hero | 86b07a7 | Phase 5-5 | 实现 HeroSection。 |
| v1.5.0-about | 869727f | Phase 5-6 | 实现 AboutSection。 |
| v1.6.0-codepilot | 112fc07 | Phase 5-7 | 实现 CodePilotSection，展示核心项目定位、流程、技术栈、可讲技术点和真实 GitHub 链接。 |
| v1.7.0-contact | c01d844 | Phase 5-8 | 实现 ContactSection，提供 Email、GitHub、CodePilot GitHub 三个真实联系入口。 |
| v1.8.0-page-complete | f53ca34 | Phase 5-9 | 完整组合 Hero / About / CodePilot / Contact 四个 Section，并完成页面顺序、锚点、CTA、真实链接和禁止项检查。 |

---

## 当前版本

当前最新已完成版本：

```txt
v1.8.0-page-complete
```

当前已完成页面模块：

```txt
HeroSection
AboutSection
CodePilotSection
ContactSection
完整页面组合
```

当前未完成：

```txt
部署
响应式专项优化
最终 MVP 构建审计
```

---

## 后续版本计划

建议后续版本：

| Version | 阶段 | 计划 |
|---|---|---|
| v1.9.0-responsive-polish | Phase 5-10 | 响应式和细节修正。 |
| v1.10.0-mvp-build | Phase 5-11 | MVP 构建检查完成。 |
| v1.11.0-deploy-ready | Phase 5-12 | 部署前检查与部署准备。 |

---

## 版本维护规则

1. 不修改旧 commit message。
2. 不 rebase。
3. 不 force push。
4. 不覆盖已有 tag。
5. 每个重要阶段完成后再创建 tag。
6. tag 必须指向 build 通过、working tree clean 的 commit。
7. 每次新增 tag 后更新本文档。

---

## Commit Message 版本命名规则

从 `v1.7.0-contact` 之后，所有阶段性 commit message 必须带版本号。

格式：

```txt
<type>(<version>): <description>
```

允许类型：

```txt
feat
fix
docs
refactor
style
chore
test
```

示例：

```txt
feat(v1.8.0-page-complete): compose final page
docs(v1.8.0-page-complete): update version docs
fix(v1.9.0-responsive-polish): fix mobile spacing
```

说明：

* 旧 commit 不改写。
* 不 rebase。
* 不 force push。
* 不 amend 旧 commit。
* 版本号同时维护在 Git tag、README、VERSION_HISTORY 和 DEV_STATUS 中。

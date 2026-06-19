# AI Context Index

这个文件是后续 Claude / Codex / ChatGPT 接管 Portfolio 项目时的第一入口。
它不保存所有细节，只告诉 AI：先读哪些文档，什么任务再读哪些文档，哪些文档只作为历史归档。

---

## 1. Always Read

后续每次接管 Portfolio 项目，默认只需要读取：

1. `docs/00_AI_CONTEXT_INDEX.md`
2. `docs/01_CURRENT_PROJECT_CONTEXT.md`
3. `docs/DEV_STATUS.md`

如果任务涉及版本/tag，再读取：

4. `docs/20_VERSION_HISTORY.md`

不要默认读取 docs/ 下所有历史文档。

---

## 2. Read By Task Type

### 页面视觉 / 动效 / 背景 / 卡片交互

读取：

- `docs/34_DESIGN_MOTION_RULES.md`
- `docs/30_MOTION_INTERACTION_SPEC.md`
- `docs/32_BORDERGLOW_EXPERIMENT.md`
- `docs/33_MOTION_SYSTEM_POLISH.md`

### 简历 / 投递 / 项目表达

读取：

- `docs/27_RESUME_ALIGNMENT.md`
- `docs/31_RELEASE_FREEZE.md`

### 信息架构 / 页面文案结构

读取：

- `docs/28_INFORMATION_ARCHITECTURE_POLISH.md`
- `docs/34_DESIGN_MOTION_RULES.md`

### 版本记录 / tag / release

读取：

- `docs/20_VERSION_HISTORY.md`
- `docs/DEV_STATUS.md`

### 历史追溯

只有在需要追溯某阶段为什么这样做时，才读取对应历史文档。

---

## 3. Do Not Read By Default

以下文档属于阶段归档，不要在每次开发时默认读取全文：

- `docs/00_WORKFLOW_LOCK.md` — 早期工作流锁定
- `docs/01_IDEA.md` — 想法验证
- `docs/02_IDEA_PRESSURE_TEST.md` — 想法压力测试
- `docs/03_IDEA_DECISION.md` — 想法决策
- `docs/04_PRD_DRAFT.md` — PRD 草稿
- `docs/05_PRD_ALIGNMENT_QUESTIONS.md` — PRD 对齐问题
- `docs/06_PRD_ALIGNMENT_RESULT.md` — PRD 对齐结果
- `docs/07_PRD_FINAL.md` — PRD 最终版
- `docs/08_DESIGN_DIRECTION.md` — 设计方向
- `docs/09_PAGE_STRUCTURE.md` — 页面结构
- `docs/10_INTERACTION_FLOW.md` — 交互流程
- `docs/11_PROJECT_SCOPE.md` — 项目范围
- `docs/12_NON_FUNCTIONAL_REQUIREMENTS.md` — 非功能需求
- `docs/13_TECH_STACK.md` — 技术栈
- `docs/14_ARCHITECTURE.md` — 架构
- `docs/15_PROJECT_CONTEXT.md` — 项目上下文（已被 01_CURRENT_PROJECT_CONTEXT.md 吸收）
- `docs/16_DEV_RULES.md` — 开发规则（已被 01_CURRENT_PROJECT_CONTEXT.md 吸收）
- `docs/17_REFERENCES.md` — 参考资料
- `docs/18_GIT_ROLLBACK_STRATEGY.md` — Git 回滚策略
- `docs/19_PREP_AUDIT.md` — 准备阶段审计
- `docs/21_MVP_BUILD_AUDIT.md` — MVP 构建审计
- `docs/22_VERCEL_DEPLOYMENT_GUIDE.md` — Vercel 部署指南
- `docs/23_NEXT_SESSION_PLAN.md` — 旧版下次会话计划
- `docs/24_FRONTEND_STAGE_REVIEW.md` — 前端阶段回顾
- `docs/25_TYPOGRAPHY_SYSTEM.md` — 字体系统
- `docs/26_REFERENCE_STYLE_SPEC.md` — 参考风格规格
- `docs/29_FINAL_POLISH_REPORT.md` — 最终打磨报告
- `docs/35_DOCS_MAINTENANCE_RULES.md` — 文档维护规则（需要了解规则时再读）

---

## 4. Context Budget Rules

后续 AI 接管时遵守：

- 先读当前上下文，再按任务读取专项文档
- 不一次性读取所有 docs
- 不把历史长文档重复复制进 prompt
- 每次开发 prompt 只引用必要文档
- 新增文档要短，优先写结论和决策，不重复复制大段代码
- 长代码不要放进 md，除非是关键接口或规范
- 阶段执行结果写入 `DEV_STATUS.md` 时要摘要，不要堆完整日志

---

## 5. Current Source of Truth

当前项目状态以以下文件为准：

- 当前项目状态：`docs/01_CURRENT_PROJECT_CONTEXT.md`
- 当前开发状态：`docs/DEV_STATUS.md`
- 版本历史：`docs/20_VERSION_HISTORY.md`
- 设计与动效规则：`docs/34_DESIGN_MOTION_RULES.md`

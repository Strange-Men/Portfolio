# Docs Maintenance Rules

## 1. Why This Exists

Portfolio 已经积累了大量阶段文档。
如果后续每次开发都读取全部 md，会造成 token 浪费、上下文混乱和决策重复。
本文件用于规范后续 md 的创建、保存和调用方式。

## 2. Document Layers

### Hot Context

每次默认读取：

- `docs/00_AI_CONTEXT_INDEX.md`
- `docs/01_CURRENT_PROJECT_CONTEXT.md`
- `docs/DEV_STATUS.md`

### Task Context

按任务读取：

- 视觉 / 动效：`docs/34_DESIGN_MOTION_RULES.md`
- 动画来源与取舍：`docs/30_MOTION_INTERACTION_SPEC.md`
- BorderGlow：`docs/32_BORDERGLOW_EXPERIMENT.md`
- Motion System：`docs/33_MOTION_SYSTEM_POLISH.md`
- 简历投递：`docs/27_RESUME_ALIGNMENT.md`
- Release：`docs/31_RELEASE_FREEZE.md`
- 版本：`docs/20_VERSION_HISTORY.md`

### Archive Context

历史阶段文档默认不读，除非需要追溯原因。

## 3. New Document Rules

新增文档必须满足：

- 标题清晰
- 先写结论
- 再写范围
- 再写规则
- 不复制大段日志
- 不重复已有文档全文
- 不保存完整第三方组件源码，除非是正在实现的关键组件
- 尽量控制在 200-400 行以内

## 4. DEV_STATUS Rules

`docs/DEV_STATUS.md` 只记录：

- 当前阶段
- 完成结果
- 当前版本
- 下一步
- 关键风险

不要把完整终端输出全部塞进去。

## 5. Prompt Rules

后续 prompt 应遵守：

- 不再要求读取全部 docs
- 只列出本轮必需文件
- 如果是视觉任务，读取设计规范
- 如果是版本任务，读取版本历史
- 如果是投递任务，读取 release / resume 文档
- 如果是普通小修，读取 hot context 即可

## 6. Cleanup Rules

不要随意删除旧文档。
不要随意改名旧文档。
需要归档时，先新增索引说明，再考虑移动。

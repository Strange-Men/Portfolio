# Portfolio Release Freeze

## 1. Release Status

当前 Portfolio 已进入可投递稳定版本。
该版本适合放入简历、投递实习、发给 HR 或面试官查看。

| Item | Value |
|---|---|
| Current Stable Version | v1.22.0-motion-interaction-spec |
| Release Freeze Candidate | v1.23.0-release-freeze |
| Production URL | https://portfolio-rosy-ten-41.vercel.app/ |
| GitHub Repository | https://github.com/Strange-Men/Portfolio |
| CodePilot Repository | https://github.com/Strange-Men/CodePilot |
| Contact Email | 1643229721@qq.com |

---

## 2. What This Portfolio Shows

当前 Portfolio 是一个面向实习投递的个人作品集网站。
第一版重点展示 CodePilot 项目，用来说明 AI 应用开发、Agent 开发和 Python 后端方向的实践能力。
网页端保持短促表达，详细技术细节通过 CodePilot GitHub README 承接。

---

## 3. Current Page Structure

| Section | Purpose |
|---|---|
| Hero | 求职方向与第一印象 |
| About | 自我介绍与当前作品集定位 |
| CodePilot | 当前重点项目，说明做什么、解决什么问题、技术栈和流程 |
| Contact | Email / GitHub 联系方式 |

项目链接应放在对应项目区块内。
Contact 区块只负责联系。
未来新增项目时，应扩展项目区块，而不是把项目仓库放到 Contact。

---

## 4. Release Checks

- npm run build 已通过
- 最终视觉终检已完成
- 响应式终检已完成
- 链接终检已完成
- 禁用词检查已完成
- 未新增 Demo 假链接
- 未新增简历下载假按钮
- 未新增不存在的项目
- 未接入重型动画组件

线上页面需由用户人工确认是否已显示最新版本内容。

---

## 5. Stable Version Boundary

冻结后，除非发现阻断问题，不应继续频繁修改主页面。

### Allowed Fixes

- 修复错别字
- 修复链接错误
- 修复明显移动端问题
- 更新真实联系方式
- 更新真实项目链接

### Not Recommended

- 大改 Hero 视觉
- 重写 About / CodePilot / Contact
- 新增未完成项目
- 新增假 Demo
- 新增简历下载按钮但没有真实 PDF
- 接入 LineWaves / WebGL 背景动画
- 为了炫技堆叠动画

---

## 6. Future Expansion Rules

### New Projects

未来新增项目时：
- 每个项目应在项目区块中有自己的项目卡片
- 每个项目卡片内放对应 GitHub / README / Demo 链接
- Contact 仍然只保留联系方式
- 不把单个项目链接塞到 Contact 页

### Motion Enhancements

如果后续做动画增强：
- 优先从 BorderGlow 项目卡片小范围试点开始
- 不直接接入 LineWaves
- 不完整接入 ProfileCard
- 所有动画必须支持 prefers-reduced-motion
- 动画不能影响阅读和投递稳定性

---

## 7. Resume Usage

简历中可以填写 Portfolio 链接：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

简历项目经历中可以使用 `docs/27_RESUME_ALIGNMENT.md` 中的 CodePilot 项目标题和 bullets。

---

## 8. Final Decision

当前版本可以作为 Portfolio 第一版投递版本。
后续开发应以新版本或实验分支推进，避免破坏当前稳定投递版本。

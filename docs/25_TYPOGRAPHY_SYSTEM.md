# Portfolio Typography System

## Current Version

v1.15.0-typography-system

## Goal

建立统一的字体层级、行高、字间距和文字密度规则，让 Portfolio 从"能用的暗色页面"提升到"更像高级技术作品集"。

## Font Stack

不引入外部字体文件，不使用 Google Fonts。
采用系统字体栈，兼顾英文和中文显示。

推荐字体栈：

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
```

## Typography Scale

> **中文排版说明**
>
> 本项目主要是中文内容，不采用英文项目常见的超大 display scale。
> 中文长标题优先保证稳定、易读、克制。
> 参考方向：Ant Design 克制字号阶梯、Apple 中文官网短句留白、腾讯/阿里云技术产品页排版。

### Display / Hero Title

用途：Hero 主标题。
目标：视觉锚点，但保证中文长句稳定、不压迫。

建议：

```txt
font-size: clamp(2.75rem, 5.6vw, 4rem)
line-height: 1.14
letter-spacing: -0.025em
font-weight: 600
```

### Section Title

用途：About / CodePilot / Contact 主标题。
目标：统一区块层级，克制不夸张。

建议：

```txt
font-size: clamp(2rem, 3.8vw, 3rem)
line-height: 1.18
letter-spacing: -0.02em
font-weight: 600
```

### Card Title

用途：卡片标题。

建议：

```txt
font-size: 1.125rem
line-height: 1.45
font-weight: 600
```

### Body Large

用途：Hero 描述、Section 说明。

建议：

```txt
font-size: 1.0625rem
line-height: 1.72
font-weight: 400
```

### Body

用途：普通说明文字。

建议：

```txt
font-size: 1rem
line-height: 1.68
font-weight: 400
```

### Label / Kicker

用途：PORTFOLIO、SectionLabel、小标签。

建议：

```txt
font-size: 0.75rem
line-height: 1
letter-spacing: 0.14em
font-weight: 600
text-transform: uppercase
```

## Layout Rhythm

### Section Padding

建议：

```txt
section padding-y: clamp(4.5rem, 8vw, 6.5rem)
```

### Content Width

建议：

```txt
reading width: max-w-2xl / max-w-3xl
content shell: max-w-6xl or max-w-7xl
```

## Rules

* Hero h1 不再使用过紧 line-height
* 中文长标题使用 text-balance
* Section h2 统一使用同一套 title class
* 正文不超过舒适行宽
* 卡片文字不堆太满
* 标签统一 uppercase / tracking
* 不通过加粗解决层级问题
* 不新增未确认内容
* 中文长标题控制在 2–3 行，不追求越大越高级
* 中文标题 letter-spacing 不过度负值
* 页面标题层级控制在 3–5 种

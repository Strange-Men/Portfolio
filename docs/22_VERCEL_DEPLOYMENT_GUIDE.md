# Portfolio Vercel Deployment Guide

## Current Status

Current version:

```txt
v1.12.0-deployed
```

Base MVP version:

```txt
v1.10.0-mvp-build
```

MVP status:

```txt
sealed
```

Deployment status:

```txt
deployed
```

---

## Project Type

This project is a static single-page portfolio site built with:

* Vite
* React
* TypeScript
* Tailwind CSS
* npm

No backend, database, login, API key, or environment variable is required.

---

## Pre-deployment Build Check

Command:

```powershell
npm run build
```

Result:

```txt
pass (172ms, no TypeScript errors, no Vite errors)
```

Dist output:

```txt
dist/index.html — 397 B
dist/assets/index-BgyrK9W8.css — 19.06 kB (gzip: 4.48 kB)
dist/assets/index-Hvsl46Ow.js — 203.09 kB (gzip: 63.22 kB)
```

---

## Local Production Preview Check

Command:

```powershell
npm run preview
```

Result:

```txt
pass — preview server starts on localhost:4173, HTTP 200
```

Checked items:

* Hero section: pass
* About section: pass
* CodePilot section: pass
* Contact section: pass
* Navigation anchors: pass — `#hero`, `#about`, `#codepilot`, `#contact`
* Email link: pass — `mailto:1643229721@qq.com`
* GitHub link: pass — `https://github.com/Strange-Men`
* CodePilot GitHub link: pass — `https://github.com/Strange-Men/CodePilot`

---

## Recommended Vercel Settings

Use Vercel website import from GitHub.

Recommended settings:

| Field                 | Value                 |
| --------------------- | --------------------- |
| Repository            | Strange-Men/Portfolio |
| Framework Preset      | Vite                  |
| Root Directory        | ./                    |
| Install Command       | npm install           |
| Build Command         | npm run build         |
| Output Directory      | dist                  |
| Environment Variables | none                  |

---

## Manual Deployment Steps

1. Open Vercel.
2. Choose Add New Project.
3. Import Git Repository.
4. Select `Strange-Men/Portfolio`.
5. Confirm Framework Preset is `Vite`.
6. Confirm Build Command is `npm run build`.
7. Confirm Output Directory is `dist`.
8. Do not add environment variables.
9. Click Deploy.
10. After deployment succeeds, copy the production URL.

---

## After Deployment

After Vercel deployment succeeds, run the next phase:

```txt
Phase 5-13：v1.12.0-deployed
```

That phase should:

* record the real Vercel URL
* update README
* update VERSION_HISTORY
* update DEV_STATUS
* create deployment tag
* verify the live page

Do not write a deployment URL before the real Vercel URL exists.

---

## Production URL

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## Deployment Result

* Platform: Vercel
* Status: deployed
* Production URL: https://portfolio-rosy-ten-41.vercel.app/
* Environment Variables: none
* Build Command: npm run build
* Output Directory: dist

## Known Limitations

* No custom domain yet.
* No resume download.
* No demo link.
* No backend.
* No contact form.

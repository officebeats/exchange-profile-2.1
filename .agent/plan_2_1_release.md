# Exchange Profile v2.1 — Release Plan

## Completed ✅

- [x] Remove "Non-Union" badge from hero (services section already shows it)
- [x] Documentation rows: add file icon SVG before each doc name
- [x] Layout: Trust & Safety → full-width below Certifications/Associations
- [x] Layout: Documentation (left) | Compliance (right) side-by-side

## In Progress / Remaining 🔧

### 1. Association Logo Tiles — Fix quality & color

- Switch logo src from `logo.clearbit.com` → `icon.horse/icon/` (more reliable, full-color)
- Update CSS: ensure `.logo-item__img-wrapper img` has `filter: none` (no grayscale)
- Fix img-wrapper height so logos aren't cropped (increase from 54px to 64px)
- Update `.logo-grid` to use tighter column min (140px) for better spacing

### 2. Certifications — Animated Tile Grid

- Replace the current flat `.org-card` list in `renderOrgCards` with a tile grid
  matching the style of association tiles: centered logo + name + hover lift animation
- Use `icon.horse` for cert logos (clearbit is unreliable for certs too)
- Add CSS class `.cert-grid` and `.cert-tile` with hover transform

### 3. Video — Remove mute on premium-on state

- In `renderVideo`, change URL params:
  - **Default (premium ON)**: `autoplay=1&loop=1&enablejsapi=1` (no mute)
  - The fallback img for premium-off is already handled by CSS

### 4. Cleanup

- Delete `_fix_layout.py` temp script

### 5. GitHub Pages — Publish as `/exchange-profile-2.1`

- Create a new repo `exchange-profile-2.1` under `officebeats` organization
- Copy all current files (index.html, app.js, styles.css, about_us_fallback.jpg)
- Push to the new repo's `main` branch (or `gh-pages` branch)
- Enable GitHub Pages → will be accessible at `https://officebeats.github.io/exchange-profile-2.1/`
- **Leave original `exchange-profile` repo completely untouched**

## Order of Execution

1. Fix video (1 line change, low risk)
2. Update association logo URLs in companyData + CSS tweaks
3. Rewrite certifications as tiles with animations
4. Publish to GitHub Pages (`exchange-profile-2.1` new repo)
5. Cleanup temp files

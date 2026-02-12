# wearfits-seo

**Unified SEO landing pages for the WEARFITS domain network**

## Overview

This repository contains high-performance SEO-optimized landing pages for 5 domains, all driving traffic to [wearfits.com](https://wearfits.com).

## Domains

| Domain | Focus | Pages | Status |
|--------|-------|-------|--------|
| [tryon-api.com](domains/tryon-api.com) | Developer/API hub | 10 | In progress |
| [view-ar.com](domains/view-ar.com) | AR showcase | 5 | Planned |
| [arfits.com](domains/arfits.com) | AR fitting technology | 5 | Planned |
| [wearfits.me](domains/wearfits.me) | Gen-AI personalized try-on | 5 | Planned |
| [arviewer.mobi](domains/arviewer.mobi) | Mobile AR/WebAR | 5 | Planned |

**Total:** 35 SEO-optimized pages

## Structure

```
wearfits-seo/
├── domains/
│   ├── tryon-api.com/
│   │   ├── index.html
│   │   ├── compare/
│   │   ├── guide/
│   │   └── use-cases/
│   ├── view-ar.com/
│   ├── arfits.com/
│   ├── wearfits.me/
│   └── arviewer.mobi/
├── shared/
│   ├── components/    # Reusable HTML/JS components
│   ├── assets/        # Images, icons, logos
│   └── styles/        # Shared CSS (Tailwind config)
└── scripts/           # Build and deployment scripts
```

## Technology Stack

- **HTML5** — Semantic, accessible markup
- **Tailwind CSS** — Utility-first styling
- **Vanilla JS** — Minimal dependencies, fast load
- **Cloudflare Pages** — Global CDN, edge deployment
- **Google Analytics 4** — Unified tracking across domains

## Design Principles

1. **Performance:** Lighthouse 90+ on all metrics
2. **SEO:** Complete meta tags, structured data, sitemaps
3. **Mobile-first:** Responsive design, fast on 3G
4. **Conversion-focused:** Clear CTAs to wearfits.com
5. **Zero dependencies:** No frameworks, just fast HTML/CSS/JS

## Shared Components

All domains share:
- Navigation header
- Footer with WEARFITS branding
- CTA banners
- SEO meta tags template
- Analytics tracking codes

## Analytics Setup

Each domain includes:
- Google Analytics 4 (shared property)
- Google Search Console verification
- Bing Webmaster Tools verification
- Structured data (JSON-LD)

## Deployment

**Cloudflare Pages** with multi-domain routing:
- Each domain deploys from its own directory
- Shared assets served from CDN
- Automatic HTTPS/SSL
- Edge caching for global performance

## Local Development

```bash
# Clone the repo
git clone https://github.com/wearfits/wearfits-seo.git
cd wearfits-seo

# Serve locally (any static server)
npx serve domains/view-ar.com

# Or use Python
python3 -m http.server 8000 --directory domains/view-ar.com
```

## Build & Deploy

```bash
# Build (if using PostCSS/Tailwind)
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## Contributing

Managed by WearfitsCEO 👗

New pages should follow:
1. Use shared components from `/shared/components/`
2. Include complete SEO meta tags
3. Add clear CTAs to wearfits.com
4. Optimize for Lighthouse 90+
5. Test on mobile devices

## SEO Strategy

**Goal:** Drive 60,000+ organic visitors/month to wearfits.com

**Approach:**
- Each domain targets unique keywords (no cannibalization)
- Cross-linking between domains for authority
- All domains point to wearfits.com with clear CTAs
- Continuous content addition and optimization

## License

© 2026 WEARFITS. All rights reserved.

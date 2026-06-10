# darabonakdar.com

Personal website and portfolio of Dara Bonakdar, built with [Jekyll](https://jekyllrb.com/) and deployed via GitHub Pages.

## Stack

- **Jekyll** (via the `github-pages` gem, so local builds match production)
- **No frontend frameworks** — hand-written modern CSS (custom properties, grid, fluid type, automatic dark mode via `prefers-color-scheme`) and a small vanilla-JS file for the mobile nav and scroll-reveal animations
- **Plugins:** `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`

## Structure

| Path | Purpose |
| --- | --- |
| `_layouts/` | `default` (base), `home`, `page`, `project` |
| `_includes/` | head, nav, footer, inline SVG icons |
| `_projects/` | Portfolio entries (Jekyll collection, one Markdown file each) |
| `assets/css/main.css` | The entire stylesheet |
| `assets/js/main.js` | Nav toggle, scroll reveal, footer year |
| `assets/images/` | Site and project images |

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Adding or editing a project

Projects are fully data-driven — no HTML required. Each one is a Markdown
file in `_projects/` plus a matching image folder.

1. Copy `_projects/TEMPLATE.md` to `_projects/my-project-slug.md`
   (and delete the `published: false` line). The filename becomes the URL:
   `/projects/my-project-slug/`.
2. Put its images in `assets/images/projects/my-project-slug/`.
3. Fill in the front matter:

```yaml
---
title: My New Project
type: Virtual Reality            # category label shown on the card
timeframe: January 2026          # free-form date or range
thumbnail: thumbnail.jpg         # card + hero image
thumbnail_fit: contain           # optional, for logos that shouldn't be cropped
order: 4                         # position in the project grid
videos:                          # optional, rendered after the text
  - vimeo: 187430501
    title: My video
  - youtube: dQw4w9WgXcQ
    title: Another video
gallery:                         # optional, rendered after the videos
  - image: photo-1.jpg
    alt: Description of the photo
    caption: Optional caption
---

Markdown body — background, description, anything.
```

Keep images at most ~1600px wide and JPEG-compressed — page weight is the
main thing that hurts mobile performance.

To remove a project, delete its `.md` file and image folder. Card markup is
shared between the homepage and the projects page via
`_includes/project-card.html`.

## Deployment

Pushing to the default branch triggers GitHub Pages' built-in Jekyll build. The custom domain is configured in `CNAME`.

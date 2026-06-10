# Repository instructions

## Commenting policy (always applies)

All code in this repository must be commented so that a novice programmer
reading it for the first time can follow what's going on:

- Every file starts with a short comment block explaining what the file is
  for and how it connects to the rest of the site.
- Non-obvious techniques (CSS tricks, Liquid filters, browser quirks,
  accessibility attributes) get a brief inline explanation of what they do
  and why they're there.
- Plain-English over jargon; explain the "why", not just the "what".

Apply the same standard to any new code added to this repo.

## Project conventions

- Static Jekyll site, built by GitHub Pages from the default branch
  (`github-pages` gem locally to match production — build with a UTF-8
  locale, e.g. `LC_ALL=C.UTF-8 bundle exec jekyll build`).
- No frontend frameworks: hand-written CSS (assets/css/main.css) and
  vanilla JS (assets/js/main.js) only.
- Projects are data-driven: one Markdown file in `_projects/` plus an
  image folder `assets/images/projects/<slug>/`. See `_projects/TEMPLATE.md`.
- Keep images ≤ ~1600px wide and compressed (JPEG for photos) — mobile
  performance is a priority.
- Contact details and social usernames live in `_config.yml`, never
  hardcoded in templates.

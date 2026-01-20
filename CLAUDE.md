# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with Jekyll using the [al-folio](https://github.com/alshedivat/al-folio) theme. It is deployed to GitHub Pages at https://ManqingLiu.github.io.

## Development Commands

### Local Development with Docker (Recommended)
```bash
docker compose pull
docker compose up
```
Access the site at `http://localhost:8080`.

### Local Development without Docker
```bash
bundle install
pip install jupyter
bundle exec jekyll serve
```
Access the site at `http://localhost:4000`.

### Build for Production
```bash
bundle exec jekyll build
```
Output goes to `_site/`.

### Code Formatting
```bash
npx prettier --check .
npx prettier --write .
```
Uses Prettier with `@shopify/prettier-plugin-liquid` for Liquid template formatting.

## Architecture

### Key Configuration
- `_config.yml`: Main site configuration including personal info, theme settings, plugins, and Jekyll Scholar settings for bibliography
- Blog is named "Being and Algorithm" with tags: philosophy, math, AI, meaning

### Content Directories
- `_pages/`: Static pages (about, publications, cv, blog, projects, teaching)
- `_posts/`: Blog posts (format: `YYYY-MM-DD-title.md`)
- `_news/`: News/announcements shown on homepage
- `_projects/`: Project portfolio items
- `_bibliography/papers.bib`: BibTeX file for publications (uses Jekyll Scholar)
- `_data/cv.yml`: CV content in YAML format

### Layouts and Templates
- `_layouts/`: Page templates (post, page, bib, etc.)
- `_includes/`: Reusable components
- `_sass/`: SCSS stylesheets

### Assets
- `assets/img/`: Images
- `assets/pdf/`: PDF files (papers, CV)
- `assets/json/resume.json`: Optional JSON Resume format CV

## Key Features

- **Publications**: Generated from `_bibliography/papers.bib` using Jekyll Scholar. Add `selected: true` to feature papers.
- **CV**: Can use either `_data/cv.yml` or `assets/json/resume.json`
- **Comments**: Giscus configured for blog post discussions
- **Math**: MathJax enabled for LaTeX rendering
- **Dark mode**: Built-in light/dark mode toggle

## Deployment

Automatic deployment via GitHub Actions on push to main branch. The workflow builds the site with Jekyll, purges unused CSS, and deploys to `gh-pages` branch.

---
name: yt-dlp-skill
description: Professional video and audio downloader using yt-dlp. Supports YouTube, Twitter, TikTok, Bilibili and 1000+ sites. Use when the user provides a video/audio link and asks to download, extract audio, or handle media links.
---

# yt-dlp Professional Downloader

A high-performance, modular skill for downloading media from across the web.

## Quick Start

### Basic Download
```bash
python scripts/run.py download <URL>
```

### Extract Audio (MP3)
```bash
python scripts/run.py download <URL> --audio-only
```

### Age-Restricted / Login Required
```bash
python scripts/run.py download <URL> --cookies-from-browser chrome
```

## Features
- **Wide Support**: YouTube, X (Twitter), TikTok, Bilibili, and more.
- **Auto-Venv**: Automatically manages its own Python environment and dependencies.
- **Smart Formatting**: Attempts to fetch the best available quality by default.

## Advanced Guidance
For detailed troubleshooting, login issues, and advanced flags, see [usage_guide.md](references/usage_guide.md).

## Workflow
1. **Identify**: Extract the URL from the user request.
2. **Execute**: Run `scripts/run.py download <URL>` with appropriate flags.
3. **Downloads**: Files are saved to `C:/Users/Administrator/.gemini/antigravity/scratch/yt-dlp-skill-new/downloads/`.
4. **Follow-up**: If a download fails due to restrictions, check [usage_guide.md](references/usage_guide.md) and advise the user.

## Maintenance
To update internal dependencies:
```bash
python scripts/run.py setup
```

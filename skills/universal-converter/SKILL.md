---
name: universal-converter
description: A powerful multi-format conversion skill. Use this when you need to convert between documents, tables, ebooks, images, or media formats. It leverages world-class engines like Pandoc, MarkItDown, FFmpeg (if available), and ImageMagick (if available). 
---

# Universal Converter Skill

This skill provides a unified interface for converting files across different formats.

## Capabilities

1.  **Documents & Tables**: Convert Word, PDF, Excel, HTML, and more to Markdown or other formats using `Pandoc` and `MarkItDown`.
    *   *Best for:* Extracting clean text and tables for AI analysis.
2.  **E-Books**: Convert EPUB, MOBI, and metadata using `Pandoc` (or system tools).
3.  **Experimental Format Support**: Guidance on using specialized CLI tools for media and 3D files.

## Workflows

### 1. Converting Documents to Markdown

When a user provides a document (PDF, DOCX, XLSX) and wants to analyze it or convert it to Markdown:

```bash
python scripts/convert.py <input_file> <output.md>
```

*   **Tip:** `MarkItDown` is prioritized for Markdown output as it handles Excel tables and Office formatting exceptionally well.

### 2. General Document Conversion

For other document types (e.g., Markdown to PDF, HTML to DOCX):

```bash
python scripts/convert.py <input_file> <output_file>
```

*   Uses `Pandoc` as the primary engine.

## Tool Details

| Engine | Primary Use Case |
| :--- | :--- |
| **MarkItDown** | Advanced Office/PDF to Markdown (Best for tables) |
| **Pandoc** | Universal document format converter |
| **FFmpeg** | (System Dependent) Audio/Video processing |
| **ImageMagick** | (System Dependent) Image batch conversion |

## Handling Failures

If a conversion tool is missing from the environment:
1.  Check if an alternative engine exists in the skill scripts.
2.  Inform the user about the missing system dependency (e.g., "ImageMagick is required for this specific image task").

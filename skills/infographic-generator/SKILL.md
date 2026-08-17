---
name: infographic-generator
description: Generates high-quality, legible infographics summarizing an article and appends them to the document. Use when users ask to "summarize this as an image", "create an infographic", or "visualize this article".
---

# Infographic Generator Skill

This skill allows you to transform written articles into visually appealing and highly legible infographics. It automates the process of content extraction, visual design, and format integration.

## Workflow

### 1. Content & Style Analysis

Before generating anything, you must analyze the source text (article):

1.  **Language Identification**: Determine the primary language (e.g., Chinese, English, Japanese).
2.  **Core Extraction**: Extract **3-5** absolute core themes or key points.
    *   *Constraint*: Keep these extremely concise (keywords or short phrases only). Too much text fails the generation.
3.  **Style Definition**: Choose a "Text-Friendly" style based on the article's tone.
    *   *Approved Styles*: Flat Vector, Minimalist Poster, Clean Hand-drawn.
    *   *Avoid*: Complex backgrounds, 3D perspective distortion (makes text unreadable).

### 2. Deep Prompt Construction

You must construct a detailed prompt for the `generate_image` tool. Do not rely on simple descriptions.

**Required Keywords for Legibility**:
To ensure text is readable, you **MUST** include these exact terms in your prompt:
> `high legibility`, `clear typography`, `sharp text`, `bold sans-serif font`, `flat text plane`, `no text distortion`

**Prompt Structure**:
1.  **Visual Metaphor/Style**: e.g., "A flat vector infographic about [Topic]..."
2.  **Typography**: "Main title '[Title]' in bold sans-serif. Key points labeled: '[Point 1]', '[Point 2]'..."
3.  **Composition**: "White or solid light background, high contrast dark text, horizontal layout."
4.  **Negative Prompts**: "blurry text, distorted letters, 3d angle, messy background"

### 3. Execution Steps

1.  **Generate Image**: Use the constructed prompt with the `generate_image` tool.
    *   *Name*: `infographic_[slug]`
2.  **Save Image**: The tool handles saving, note the file path.
3.  **Append to Article**:
    *   Open the target markdown file.
    *   Append the following block at the very end:
    
    ```markdown
    
    ## Video/Article Summary Infographic
    
    ![Infographic Summary](path/to/generated/image.png)
    ```

## Reference Guidelines

For detailed design rules, see [references/design_principles.md](references/design_principles.md).

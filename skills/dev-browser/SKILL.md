---
name: dev-browser
description: Advanced browser automation with persistent page state. Use for navigating sites, filling forms, taking screenshots, extracting data (scraping), testing web apps, or any multi-step browser workflow. Supports "Standalone Mode" (fresh session) and "Extension Mode" (connect to user's Chrome).
---

# Dev Browser Skill

Execute browser automation tasks while maintaining page state across executions.

## Progressive Disclosure
- **API Reference**: See [references/api-reference.md](references/api-reference.md) for full Client API and ARIA Snapshot details.
- **Scraping Guide**: See [references/scraping.md](references/scraping.md) for network interception and API replay patterns.

## 1. Setup & Execution Modes

Identify the required mode based on user credentials/context:

### Standalone Mode (Fresh Session)
Launch a new Chromium browser. Useful for fresh automation or local dev testing.
```powershell
# Run from skill directory
Start-Job -ScriptBlock { Set-Location "C:\Users\Administrator\.gemini\skills\dev-browser"; npx tsx scripts/start-server.ts --headless }
```
*Wait for "Ready" signal before running scripts.*

### Extension Mode (Existing User Session)
Connect to user's Chrome browser. Use when user is already logged into websites.
```powershell
cd C:\Users\Administrator\.gemini\skills\dev-browser && npx tsx scripts/start-relay.ts
```
*Requires SawyerHood/dev-browser Chrome extension connected.*

## 2. Writing Automation Scripts

Run all scripts from `C:\Users\Administrator\.gemini\skills\dev-browser`. Use the `@/` import alias.

### Core Automation Pattern
```typescript
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("session-name"); // Persists after disconnect

await page.goto("https://example.com");
await waitForPageLoad(page);

// Perform actions using Playwright Page API
await page.screenshot({ path: "C:/Users/Administrator/.gemini/antigravity/scratch/debug.png" });

await client.disconnect(); // Keeps pages alive for next turn
```

## 3. Interaction Best Practices

1. **State Discovery**: Use `await client.getAISnapshot("name")` to get an accessibility tree (ARIA) and discover element `refs` (e.g., `e1`, `e2`).
2. **Ref Interaction**: Interact directly with discovered refs: `const el = await client.selectSnapshotRef("name", "e5"); await el.click();`.
3. **No TS in Evaluate**: Code inside `page.evaluate(() => { ... })` must be plain JavaScript (no types).
4. **Focused Scripts**: Perform one logical step per script (Navigate -> Validate -> Interact).

## 4. Debugging & Screenshots
Always log the current URL and take screenshots if an action fails or state is unclear:
```typescript
await page.screenshot({ path: "C:/Users/Administrator/.gemini/antigravity/scratch/error.png", fullPage: true });
console.log("Current URL:", page.url());
```

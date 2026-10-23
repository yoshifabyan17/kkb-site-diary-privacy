---
name: KKB Site Diary privacy pages
description: Plain text privacy notice and deletion instructions.
colors:
  page: "#fff"
  text: "#17212b"
  link: "#064f91"
  link-hover: "#12344f"
  divider: "#b9c3cc"
  selection: "#cbe7fa"
  warning-border: "#927119"
  warning-background: "#fff8dd"
  warning-text: "#43320b"
  muted-text: "#465563"
typography:
  headline:
    fontSize: "clamp(1.85rem, 5vw, 2.5rem)"
    lineHeight: 1.2
  title:
    fontSize: "1.4rem"
    lineHeight: 1.35
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.0625rem"
    lineHeight: 1.7
  organisation:
    fontWeight: 650
  review:
    fontSize: "1rem"
  metadata:
    fontSize: ".95rem"
spacing:
  half: ".5rem"
  three-quarters: ".75rem"
  one: "1rem"
  one-and-half: "1.5rem"
  two: "2rem"
  two-and-half: "2.5rem"
  three: "3rem"
components:
  link:
    textColor: "{colors.link}"
  link-hover:
    textColor: "{colors.link-hover}"
  draft-warning:
    backgroundColor: "{colors.warning-background}"
    textColor: "{colors.warning-text}"
    padding: "1rem"
  review-note:
    backgroundColor: "{colors.warning-background}"
    textColor: "{colors.warning-text}"
    padding: ".75rem 1rem"
---

# Design System: KKB Site Diary privacy pages

## Overview

**Creative North Star: "Plain reading page"**

The user selected a simple text-only page. The page uses one reading column, dark system text, a white background and blue underlined links. It has no images or motion.

This record describes the built pages in `index.html`, `data-deletion/index.html` and `styles.css`. It does not give legal approval. The draft warning and open review notes remain part of the page.

**Key Characteristics:**

- One reading column.
- System text and underlined links.
- Clear draft warnings and review notes.
- No images or motion.

## Colors

The palette supports reading. Yellow warning areas identify draft status and open checks.

### Primary

- **Link blue:** Links and keyboard focus outlines. The hover color is darker.

### Neutral

- **White:** Page and skip-link background.
- **Dark text:** Main text and selected text.
- **Muted text:** Update date and footer.
- **Grey divider:** Header and footer borders.
- **Light blue selection:** Selected-text background.

### Warning

- **Pale yellow:** Draft warning and review-note background.
- **Brown:** Warning borders.
- **Dark brown:** Warning text.

## Typography

Use the system font stack in the body token. No font files are loaded. The main heading uses the headline role; section headings use the title role. The browser supplies heading and strong-text weight. The organisation name has its own explicit weight.

At a viewport width of 420px or less, body text changes to 1rem. The review-note and metadata sizes remain as defined above. Printed body text uses 11pt.

## Layout

The header, main area and footer share a centred column with width `min(100% - 2.5rem, 72ch)`. At 420px or less, the width changes to `calc(100% - 2rem)`.

The header has top and bottom padding of 2rem and 1.5rem. The main area uses 2rem and 3rem. The footer uses 1.5rem and 2rem. Paragraphs have a 1rem bottom margin. Section headings have a 2.5rem top margin and a .75rem bottom margin. Navigation wraps with .5rem row gaps and 1.5rem column gaps. Lists use 1.5rem left padding and .6rem between adjacent items.

For print, the column uses the available width, navigation and the skip link are hidden, links inherit text color, and section headings avoid a page break immediately after them.

## Elevation & Depth

The page has no shadows or raised surfaces. Thin borders mark the header, footer and warning areas. Warning background color gives the only surface contrast.

## Shapes

Warning areas have square corners and a thin border. The draft warning uses a solid border. Review notes use a dashed border. No corner radius is set.

## Components

### Links

Links are underlined. The underline is offset by .2em. On hover, the color changes and underline thickness becomes .15em. Keyboard focus uses a 3px outline with a 4px offset. Long link text can wrap anywhere.

### Navigation

Two text links connect the privacy notice and deletion instructions. The active page has `aria-current="page"`. It has no separate visual style. Links wrap on narrow screens.

### Draft warning

A solid-bordered text area appears after the page date. It uses the warning colors and padding tokens. Its block margin is 1.5rem. Strong text starts the warning.

### Review note

A dashed-bordered paragraph marks an open review point. It uses the warning colors, review text size and review padding tokens. Strong text starts each note.

### Skip link

The skip link sits above the visible page until it receives focus. It then appears .5rem from the top and 1rem from the left. Its padding is .5rem 1rem. It moves focus to the main reading area.

## Do's and Don'ts

### Do

- Do keep the single reading column and system font.
- Do keep links underlined and keyboard focus visible.
- Do show the draft warning and open review notes while checks remain open.
- Do use the existing shared styles on both pages.

### Don't

- Don't add images, motion or a new visual style to this text-only brief.
- Don't add buttons, forms or cards that the pages do not use.
- Don't present this design record as legal approval or permission to publish.

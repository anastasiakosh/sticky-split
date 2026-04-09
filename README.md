# Sticky Split — Portfolio Layout

## Project Idea
The "Sticky Split" is an asymmetric layout pattern designed for modern portfolios, editorial pages, and deep-dive case studies. The core concept revolves around dual-pane navigation: the left column acts as a persistent anchor (displaying identity, context, and navigation), while the right column houses scrollable, detailed content blocks. This ensures the user never loses context or navigation access while exploring deep content, resulting in a seamless, "app-like" browsing experience.

## Technical Realization

This project is built using strictly vanilla web technologies, ensuring maximum performance, zero external dependencies, and clean maintainability.

### 1. Architecture
The codebase follows a strict separation of concerns across three files:
* `index.html` — Semantic structure and anchoring.
* `styles.css` — Layout, typography, and hardware-accelerated transitions.
* `script.js` — Scroll monitoring and dynamic class toggling.

### 2. Layout Mechanics (CSS)
* **The Split:** Implemented using CSS Flexbox (`display: flex`) to manage the asymmetric relationship between the navigation and the content stream.
* **The Sticky Behavior:** The left pane utilizes `position: sticky; top: 6rem;`, allowing it to lock into place relative to the viewport while the sibling content continues to scroll.
* **Native Smooth Scrolling:** CSS `scroll-behavior: smooth` is applied globally to enable fluid transitions when navigating via the sidebar links.
* **Scroll Offsets:** `scroll-margin-top` is applied to the right-side content blocks to ensure that when anchor links are clicked, the blocks align perfectly below the viewport edge rather than snapping uncomfortably to the absolute top.

### 3. Interaction & Animation (JavaScript & CSS)
* **Scroll Reveals:** JavaScript's native `IntersectionObserver` API is used to monitor the visibility of content blocks. As blocks enter the viewport, the observer toggles CSS classes (`.hidden` to `.visible`), triggering a smooth upward fade-in transition. This is highly performant as it offloads the animation to the GPU rather than relying on heavy scroll-event listeners.
* **Micro-interactions:** CSS transitions (`transition: all 0.4s cubic-bezier(...)`) are used to handle hover states, providing instant, premium feedback (color shifts and slight translations) on both the navigation links and the content cards without JavaScript overhead.

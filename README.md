# Trafly – Travel Recommendation Experience

Trafly is a single-page experience that lets travelers browse personalized destination ideas. It combines a sleek hero section, curated storytelling, and a dynamic recommendation panel powered by a lightweight JSON data source.

## Features

- Responsive landing page built with semantic HTML.
- Animated navigation + hero search bar tied to recommendation cards.
- Client-side filtering that loads data from `travel_recommendation_api.json`.
- Styled recommendation grid defined in `travel_recommendation.css`.
- Contact form scaffold with built-in validation attributes.

## Tech

- HTML5 for markup
- Modern CSS (variables, flex/grid, gradients) extracted to `travel_recommendation.css`
- Vanilla JavaScript (`travel_recommendation.js`) for data fetch + rendering
- JSON dataset describing countries, temples, and beaches

## Getting Started

1. **Clone / download** the repository.
2. Serve the directory (any static server works). Examples:
   - Python: `python -m http.server 5173`
   - Node: `npx serve .`
3. Visit `http://localhost:<port>/travel_recommendation.html`.

> Local hosting is required because the browser `fetch` call to `travel_recommendation_api.json` is blocked by CORS/file:// rules.

## Usage

1. Type a keyword that matches the JSON keys (`country`, `temple`, or `beach`) into the hero search bar.
2. Submit to render recommendation cards. Hit **Clear** to reset the grid.
3. Explore the About and Contact sections for supporting content.

## Customizing

- **Styling:** Adjust theme tokens or component rules in `travel_recommendation.css`.
- **Data:** Expand `travel_recommendation_api.json` with more categories or richer fields (image paths must be reachable from `assets/`).
- **Logic:** Extend `travel_recommendation.js` to support additional keywords, scoring, or error handling.

## Roadmap Ideas

- Hook the search form to a real API.
- Persist last search in `localStorage`.
- Add unit tests for the filtering logic.
- Enhance accessibility (skip links, reduced-motion styles).

---

Built with curiosity for mindful travelers. Feel free to fork and iterate.✈️

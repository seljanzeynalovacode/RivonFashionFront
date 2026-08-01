# Rivon — Fashion Store Landing Page (HTML/CSS/JS Clone)

A pixel-focused, front-end recreation of the **Rivon** Shopify fashion theme demo, built from scratch with **plain HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build tools, no dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🖼 Preview

Open `index.html` in your browser, or visit the [live demo](#) (add your GitHub Pages link here).

## ✨ Features

- **Fully static clone** of the Rivon homepage layout — top bar, main navigation, hero banner, featured products, promo banners, new arrivals, discount section, brand logos, product detail view, video banner, "Shop the Look", testimonials, Instagram feed, and footer.
- **Dynamic product rendering** — product cards are generated from a JS data array instead of hardcoded HTML.
- **Interactive product detail page:**
  - Thumbnail gallery with image swapping
  - Color swatch selector
  - Size selector
  - Quantity stepper (+ / −)
  - Expand/collapse accordion for Description & Return Policy
  - Add to Cart updates the cart badge count
- **Infinite scrolling marquee** announcement strip (CSS keyframe animation).
- **Newsletter subscription form** with submit handling.
- **Fully responsive** layout — adapts across desktop, tablet, and mobile breakpoints.
- Built with **semantic HTML** and organized, commented CSS/JS.

## 📁 Project Structure

```
rivon/
├── index.html      # Page markup/structure
├── style.css        # All styling (layout, colors, typography, responsiveness)
├── script.js         # Product data + all interactive behavior
└── README.md
```

## 🚀 Getting Started

No installation or build step required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/rivon-clone.git
   cd rivon-clone
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # or with Node
   npx serve .
   ```
3. Visit `http://localhost:8000` in your browser.

## 🛠 Tech Stack

| Layer      | Technology                     |
|------------|---------------------------------|
| Structure  | HTML5 (semantic markup)         |
| Styling    | CSS3 (Flexbox, Grid, custom properties, media queries) |
| Behavior   | Vanilla JavaScript (ES6+, no libraries) |
| Font       | [Jost](https://fonts.google.com/specimen/Jost) via Google Fonts |

## 📱 Responsive Breakpoints

| Breakpoint | Target       |
|------------|--------------|
| `≤ 1024px` | Tablets      |
| `≤ 768px`  | Small tablets / large phones |
| `≤ 480px`  | Phones       |

## 📌 Notes

- Product images are sourced from Unsplash placeholders for demonstration purposes only.
- This project is a **learning/demo clone** built for practicing pixel-accurate front-end implementation from a design reference. It is not affiliated with or endorsed by the original Rivon Shopify theme.

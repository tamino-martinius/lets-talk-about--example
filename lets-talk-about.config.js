export default {
  slides: "slides.md",
  styles: "./custom.css",
  theme: {
    colorTheme: "#032d42",
    colorForeground: "#000",
    colorBackground: "#fff",
    colorVignette: "#64df4e",
    colorSectionForeground: "#64df4e",
  },
  layout: {
    footer: "{{slideNumber}} / {{totalSlides}}",
  },
  templates: {
    "highlight-box": (slots) =>
      `<div class="template-highlight-box">
        <div class="highlight-box-accent">${slots.accent || ""}</div>
        <div class="highlight-box-body">${slots.default || ""}</div>
      </div>`,
  },
};

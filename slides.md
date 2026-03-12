---
title: Lets talk about ... Example
---

# H1

## H2

---
background: https://images.unsplash.com/photo-1548890126-91461beb4bf1?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

# Background Image

---
background: https://images.unsplash.com/photo-1548890126-91461beb4bf1?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
cover: true

# Cover Image

---

- Inline Image
- ![Inline](https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

---
build: true

## List

- Item 1
- Item 2
- Item 3
- Item 4

---

## Code

```
const code = 'without syntax highlighting';
```

```js
const code = 'with syntax highlighting';
```

---

## Code with Line Numbers

```js linenums
const greeting = 'Hello';
const name = 'World';
console.log(`${greeting}, ${name}!`);
```

---

## Code with Highlighted Lines

```js h2
const line1 = 'normal';
const line2 = 'highlighted';
const line3 = 'normal';
```

---

## Line Numbers + Highlights

```js linenums h2 h4-6
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
```

---

## Mermaid Diagram

```mermaid
graph TD
    A[Client] -->|HTTP| B[Server]
    B --> C[(Database)]
    C --> B
    B -->|Response| A
```

---
type: section

# New Section

---

- *Emphasis*
- _Italic_
- Inline *Emphasis* and _Italic_
- [Link](#)

---
type: section

# Layouts & Templates

---
template: two-column

::left::

## Left Column

- Layouts add persistent chrome
- Header, footer, watermark
- Supports slide number placeholders

::right::

## Right Column

- Templates arrange content
- Named slots with `::name::` syntax
- Built-in: default, two-column, title-content

---
template: title-content

::title::

## Template: title-content

::default::

- The title area is visually separated from the body
- Content flows naturally below the divider
- Great for slides with a clear heading and supporting details

---
template: two-column

## Code Comparison

```js
// Before
function greet(name) {
  return 'Hello ' + name;
}
```

::right::

## Improved

```js
// After
const greet = (name) =>
  `Hello ${name}`;
```

---
template: highlight-box

::accent::

## Custom Templates

::default::

- This slide uses a custom `highlight-box` template
- Defined in `lets-talk-about.config.js`
- Styled via `custom.css`
- Templates are just functions: `(slots) => html`

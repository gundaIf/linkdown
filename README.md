# Linkdown

Convert any webpage into **Markdown or PDF** instantly.

Linkdown is a minimal web tool that extracts the main content from a webpage and converts it into clean, readable **Markdown** or a printable **PDF**.
Paste a URL, click convert, and download the result.

---

## Features

* Convert webpages to **clean Markdown**
* Export articles as **PDF**
* Extract only the **readable content** (no clutter)
* Minimal interface designed for speed
* Works well with blogs, documentation pages, and articles
* Deployable on **Netlify** with serverless functions

---

## Demo

Paste a link like:

```
https://example.com/article
```

You will get:

* A clean **Markdown file**
* A downloadable **PDF version**

---

## Why Linkdown Exists

Saving webpages usually produces messy results full of navigation elements, ads, and layout noise.

Linkdown focuses on:

* extracting the **main readable content**
* generating **clean Markdown**
* exporting **print-friendly PDFs**

This makes it useful for developers, writers, and researchers who need structured content.

---

## Use Cases

Linkdown is useful for:

* Saving articles as Markdown for **Obsidian or Notion**
* Converting blog posts into **documentation**
* Archiving articles for **research**
* Extracting content for **knowledge bases**
* Creating printable versions of webpages

---

## How It Works

Conversion pipeline:

```
URL
↓
Fetch webpage HTML
↓
Extract readable content (Readability)
↓
Convert HTML → Markdown (Turndown)
↓
Generate PDF (Puppeteer)
```

Key libraries used:

* Mozilla Readability
* Turndown
* Puppeteer
* Netlify Functions

---

## Project Structure

```
linkdown
│
├── index.html
├── style.css
├── script.js
│
├── netlify
│   └── functions
│       └── convert.js
│
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

---

## Local Development

### 1. Clone the repository

```
git clone https://github.com/yourusername/linkdown
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally with Netlify

Install the Netlify CLI if needed:

```
npm install -g netlify-cli
```

Start the development server:

```
netlify dev
```

Open:

```
http://localhost:8888
```

---

## Deploying to Netlify

You can deploy Linkdown in seconds.

### Option 1: Netlify Drop

1. Zip the project folder
2. Upload it to

```
https://app.netlify.com/drop
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Connect the repo to Netlify
3. Set the publish directory to:

```
/
```

Netlify will automatically detect serverless functions inside:

```
netlify/functions
```

---

## Roadmap

Planned improvements include:

* Reader-mode preview
* Copy Markdown button
* Batch URL conversion
* Notion export
* Obsidian integration
* Browser extension
* CLI version

---

## Contributing

Contributions are welcome.

Areas where help is especially valuable:

* Improving content extraction accuracy
* Enhancing Markdown formatting
* Adding additional export formats
* UI improvements

Please see `CONTRIBUTING.md` for contribution guidelines.

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

## Acknowledgements

* Mozilla Readability
* Turndown
* Puppeteer
* Netlify Functions

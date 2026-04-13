# myHub

A minimal and personal start page.

## Features

- Search from multiple engines
- Lightweight: pure HTML, CSS and vanilla JavaScript
- Self-hosted via Docker

## Getting Started

```bash
git clone https://github.com/ahokponou/myhub.git
cd myhub
mv js/engines.default.js js/engines.js
```

Edit `js/engines.js` with your own search engines:

```js
export const DEFAULT_ENGINES = [
    { "name": "DuckDuckGo", "url": "https://duckduckgo.com/" },
    { "name": "Perplexity", "url": "https://www.perplexity.ai/" },
]
```

## Deploy

```bash
docker compose up -d
```

The app is available at `http://hub.localhost`.
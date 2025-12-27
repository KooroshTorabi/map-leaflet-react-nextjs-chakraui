# Interactive Leaflet Map Application

A modern web application for interactive mapping built with **Next.js 16**, **React 18**, and **Leaflet**. Features real-time map visualization with draggable markers, layer controls, geosearch capabilities, and custom popups.

## 🚀 Features

- **Interactive Maps** - Leaflet-based mapping with tile layers
- **Draggable Markers** - Move markers freely on the map
- **Layer Controls** - Toggle between multiple map layers
- **Geosearch** - Built-in location search functionality
- **Custom Popups** - Information popups on map features
- **Responsive Design** - Mobile-friendly interface
- **Type-Safe** - Full TypeScript support

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **React 18** with React Leaflet v5
- **TypeScript 5.9**
- **Emotion** (CSS-in-JS)
- **Leaflet 1.7** with Geosearch plugin

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the map.

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── api/hello/route.ts # API endpoint
├── components/            # Reusable React components
│   ├── LayersControlExample/
│   ├── DraggableMarker/
│   ├── PopupExample/
│   └── ...
├── styles/               # Global styles
├── consts/              # Constants and data
└── public/              # Static assets
```

## 🗺️ Available Components

- **LayersControlExample** - Multi-layer map with toggleable controls
- **DraggableMarker** - Movable markers on the map
- **PopupExample** - Information popups
- **MapInfo** - Map metadata display
- **Map1** - Basic map setup

## 📝 License

MIT

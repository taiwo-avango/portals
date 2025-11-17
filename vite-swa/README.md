# XDS Component Showcase - Vite + React

A comprehensive showcase of Munich Re XDS Design System components built with React 19 and Vite 7.

## Features

- **Comprehensive Component Library**: Buttons, cards, alerts, forms, tables, badges, progress bars, tabs, and more
- **React Router**: Client-side routing with 5 showcase pages
- **TypeScript**: Full type safety with custom XDS component declarations
- **Responsive Design**: Mobile-friendly layouts with CSS Grid and Flexbox
- **Modern Stack**: React 19, Vite 7.2, TypeScript 5.9

## Pages

1. **Home** (`/`) - Comprehensive overview of all XDS components
2. **Forms** (`/forms`) - Form components showcase (inputs, selects, checkboxes, radio buttons)
3. **Data** (`/data`) - Data display components (tables, cards, progress tracking)
4. **Layouts** (`/layouts`) - Layout components (cards, grids, tabs)
5. **Notifications** (`/notifications`) - Alerts, badges, and notification components

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

Build output will be in the `dist/` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Shared components
│   ├── Header.tsx      # Top navigation
│   ├── Footer.tsx      # Footer with version info
│   └── Sidebar.tsx     # Navigation sidebar
├── pages/              # Page components
│   ├── HomePage.tsx    # Main showcase
│   ├── FormsPage.tsx   # Forms showcase
│   ├── DataPage.tsx    # Data components
│   ├── LayoutsPage.tsx # Layout examples
│   └── NotificationsPage.tsx # Alerts & notifications
├── config/             # Configuration
│   └── environment.ts  # App settings
├── App.tsx             # Main app with routing
└── global.d.ts         # TypeScript declarations for XDS
```

## Technologies

- **React**: 19.2.0
- **Vite**: 7.2.2
- **TypeScript**: 5.9.3
- **React Router DOM**: 7.1.1
- **@xds/components**: 1.94.1 (Munich Re Design System)

## XDS Components Used

### Interactive Components
- `xds-button` - Primary, secondary, tertiary variants
- `xds-input` - Text inputs with various types
- `xds-textarea` - Multi-line text input
- `xds-checkbox` - Checkbox controls
- `xds-radio` - Radio button controls
- `xds-select` - Dropdown selects

### Display Components
- `xds-card` - Content cards with headers
- `xds-alert` - Alert messages (info, success, warning, error)
- `xds-badge` - Status badges
- `xds-table` - Data tables
- `xds-progress-bar` - Progress indicators
- `xds-icon` - Icon components

### Layout Components
- `xds-header` - Application header
- `xds-sidebar` - Side navigation
- `xds-tabs` - Tabbed content

## Development Notes

### TypeScript Support

Custom XDS component types are declared in `src/global.d.ts` to enable TypeScript support for web components.

### Styling

- Component-specific styles in individual `.css` files
- Shared styles in `pages/shared.css`
- Responsive design with mobile-first approach

### Routing

React Router DOM is configured in `App.tsx` with the following routes:
- `/` - Home page
- `/forms` - Forms showcase
- `/data` - Data components
- `/layouts` - Layout examples
- `/notifications` - Alerts and notifications

## Build Information

Production build output:
- HTML: ~0.46 kB (gzipped: 0.30 kB)
- CSS: ~5.68 kB (gzipped: 1.63 kB)
- JavaScript: ~233.49 kB (gzipped: 71.05 kB)

Build time: ~400ms

## License

This project is part of the GSI Portals Reference implementation.

## See Also

- [Angular version](../angular-swa/README.md) - Angular implementation of the same showcase
- [Next.js version](../next-swa/README.md) - Next.js implementation
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - Detailed implementation notes

# Chef Olamide - Modern Nigerian Gastronomy

A premium, beautifully designed website for Chef Olamide featuring modern Nigerian cuisine.

## 🏗️ Project Structure

```
chef-ola/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ChatBot.tsx      # AI-powered chat concierge
│   │   ├── MenuSummary.tsx  # Floating menu summary
│   │   └── index.ts         # Component exports
│   │
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section with parallax
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Menu.tsx         # Interactive menu
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer section
│   │   └── index.ts         # Section exports
│   │
│   ├── modals/              # Modal components
│   │   ├── DishDetailModal.tsx  # Heritage story modal
│   │   └── index.ts         # Modal exports
│   │
│   ├── utils/               # Utility functions
│   │   ├── menuUtils.ts     # Menu operations & sharing
│   │   └── aiUtils.ts       # AI/Gemini integration
│   │
│   ├── constants.tsx        # App constants & data
│   ├── types.ts             # TypeScript types
│   ├── App.tsx              # Main app component
│   └── index.tsx            # App entry point
│
├── public/                  # Static assets
├── index.html               # HTML entry
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies

```

## 🎨 Features

- **Hero Section**: Cinematic parallax experience featuring authentic kitchen photography and dynamic text scaling
- **Interactive Menu**: AI-powered tasting menu builder with heritage stories for each dish
- **Smart Concierge**: Gemini-powered AI chatbot for instant customer assistance
- **Visual Journey**: Dynamic 23-image masonry gallery with intelligent layout (portrait/landscape/square) and smooth hover effects
- **Testimonials**: Auto-rotating client feedback with brand-aligned styling
- **Responsive Design**: Mobile-first architecture ensuring perfect display from iPhone SE to 4K desktops
- **Premium Aesthetics**: Sophisticated "Modern Nigerian" design language

## 🖌️ Design System

### Color Palette
- **Brand Green**: `#085E2F` (Primary action capability, logos, accents)
- **Obsidian**: `#0A1410` (Deep backgrounds, text)
- **Champagne**: `#D4AF37` (Luxury accents, hover states)
- **Ivory**: `#FDFCF8` (Clean backgrounds)

### Typography
- **Headings**: Modern serif for elegance
- **Body**: Clean sans-serif for readability
- **Hierarchy**: Responsive scaling (18vw mobile -> 9vw desktop for hero titles)

## 📸 Gallery Specification
- **Layout**: 6-column masonry grid (Desktop)
- **Logic**: Dynamic sizing based on content (Portrait 3:4, Wide, Square)
- **Performance**: Lazy loading with localized fallback system


### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Add your Gemini API key to .env.local
GEMINI_API_KEY=your_api_key_here

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini AI

## 📁 Code Organization

### Components
- **Navbar**: Fixed navigation with scroll effects
- **ChatBot**: Floating AI assistant
- **MenuSummary**: Dynamic menu cart

### Sections
Each section is a self-contained component for better maintainability:
- Easily modify individual sections without affecting others
- Clear separation of concerns
- Simple to add/remove sections

### Utils
Utility functions are organized by purpose:
- **menuUtils.ts**: Menu download, social sharing, navigation
- **aiUtils.ts**: AI-powered content generation

## 🎯 Best Practices

- **Component Modularity**: Each component has a single responsibility
- **Type Safety**: Full TypeScript coverage
- **Performance**: Lazy loading and code splitting
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO**: Proper meta tags and semantic structure

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```
GEMINI_API_KEY=your_gemini_api_key
```

### Vite Config
Path alias configured for clean imports:
```typescript
'@': path.resolve(__dirname, './src')
```

## 📝 License

Private project - All rights reserved

## 👨‍💻 Development

Built with ❤️ using modern web technologies
-
-## 📚 Development History
-
-For a detailed log of updates, changes, and migration notes, please refer to [DEVELOPMENT_LOG.md](./DEVELOPMENT_LOG.md).

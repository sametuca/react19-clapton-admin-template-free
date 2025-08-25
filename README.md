# React19 Admin Template

A modern, responsive admin dashboard template built with React 19, TypeScript, and Tailwind CSS. This template provides a comprehensive foundation for building admin applications with a beautiful UI and extensive functionality.

## 🚀 Live Demo

**Try it online:** [https://react19-clapton-admin-template-free.vercel.app/](https://react19-admin-template-premium-prev.vercel.app/)

Experience the template live with all features including theme switching, language support, and responsive design.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Built-in theme switching with system preference detection
- **Beautiful UI**: Built with Shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Elegant transitions and hover effects

### 🌍 Internationalization
- **Multi-language Support**: Turkish (TR) and English (EN) language support
- **Dynamic Translations**: Context-based language switching
- **Persistent Preferences**: Language choice saved in localStorage

### 📱 Core Pages
- **Dashboard**: Overview with KPIs, charts, and analytics
- **Analytics**: Detailed reports and data visualization
- **Users**: User management interface
- **Tables**: Data table examples
- **Forms Wizard**: Multi-step form implementation
- **Roles**: Role-based access control
- **Settings**: Comprehensive application settings
- **Profile**: User profile management
- **Notifications**: System notifications center

### 🔐 Authentication
- **Login Page**: Modern login interface with social login options
- **Register Page**: Multi-step registration process
- **Form Validation**: Built-in form validation and error handling

### 📊 Data Visualization
- **Charts**: Line, Bar, Pie, and Area charts using Recharts
- **KPIs**: Key Performance Indicators with trend indicators
- **Statistics**: Comprehensive data analytics and reporting

### ⚙️ Configuration
- **Theme Management**: Light, Dark, and System theme options
- **Language Settings**: Easy language switching
- **Customizable Layout**: Flexible sidebar and header configuration
- **Responsive Sidebar**: Collapsible navigation with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react19-admin-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icon set
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: npm/bun

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   └── AppSidebar.tsx  # Main navigation sidebar
├── contexts/            # React Context providers
│   ├── ThemeContext.tsx    # Theme management
│   └── LanguageContext.tsx # Language management
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
│   └── AppLayout.tsx   # Main application layout
├── pages/               # Application pages
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Analytics.tsx   # Analytics and reports
│   ├── Settings.tsx    # Application settings
│   ├── Profile.tsx     # User profile
│   ├── Notifications.tsx # Notifications center
│   ├── Login.tsx       # Authentication
│   ├── Register.tsx    # User registration
│   └── ...             # Other pages
├── lib/                 # Utility functions
└── main.tsx            # Application entry point
```

## 🎯 Key Components

### Theme Context
Manages application theme (light/dark/system) with localStorage persistence and system preference detection.

### Language Context
Provides internationalization support with dynamic language switching and translation management.

### AppLayout
Main application layout with responsive header, sidebar, and content area.

### AppSidebar
Navigation sidebar with collapsible menu items and user profile section.

## 🎨 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/AppSidebar.tsx`

### Adding New Languages
1. Update translations in `src/contexts/LanguageContext.tsx`
2. Add language selector option in `src/layouts/AppLayout.tsx`

### Customizing Themes
1. Modify Tailwind CSS configuration in `tailwind.config.ts`
2. Update theme context in `src/contexts/ThemeContext.tsx`

## 📱 Responsive Design

The template is fully responsive and includes:
- Mobile-first approach
- Collapsible sidebar on small screens
- Touch-friendly interface elements
- Optimized layouts for all screen sizes

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Consistent component structure

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

---

**Built with ❤️ using React 19, TypeScript, and Tailwind CSS**

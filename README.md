# React19 Clapton Admin Template

A modern, responsive admin dashboard template built with **React 19**, **TypeScript**, and **Tailwind CSS**. This template offers a robust foundation for building admin applications with a beautiful UI, dark/light theme support, multi-language capabilities, and extensive features.

[🚀 **Live Demo**]([https://react19-clapton-admin-template-free.vercel.app/](https://react19-clapton-admin-template-free.vercel.app/))

---

## ✨ Features

- **Modern UI & Design**
  - Mobile-first, fully responsive layout
  - Light/Dark theme toggle with system preference detection
  - Built with [shadcn/ui](https://ui.shadcn.com/) components and Tailwind CSS
  - Smooth animations and transitions

- **Internationalization**
  - English (EN) and Turkish (TR) language support
  - Real-time context-based language switching
  - Language preference saved in localStorage

- **Core Application Pages**
  - Dashboard: KPIs, charts, and analytics overview
  - Analytics: Detailed reports and visualizations
  - Users: User management interface
  - Tables: Data tables with examples
  - Forms Wizard: Multi-step form implementation
  - Roles: Role-based access control
  - Settings: Full application settings
  - Profile: User profile management
  - Notifications: Notification center

- **Authentication**
  - Modern login page with social logins
  - Multi-step registration
  - Built-in form validation and error handling

- **Data Visualization**
  - Line, Bar, Pie, and Area charts powered by [Recharts](https://recharts.org/)
  - KPI widgets and trend indicators
  - Comprehensive analytics and reporting

- **Configuration & Customization**
  - Theme management (Light, Dark, System)
  - Easy language switching
  - Flexible sidebar and header configuration
  - Collapsible sidebar for improved UX

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
git clone <repository-url>
cd react19-admin-template
npm install        # or bun install
npm run dev        # or bun dev
```

### Production Build

```bash
npm run build
# or
bun run build
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/              # shadcn/ui-based custom components
├── contexts/            # Theme and language context providers
├── hooks/               # Custom React hooks
├── layouts/             # Layout components (sidebar, header, etc.)
├── pages/               # Main application pages
├── lib/                 # Utility functions
└── main.tsx             # Application entry point
```

---

## 🎨 Customization

- **Add a New Page**
  1. Create a component in `src/pages/`
  2. Add the route in `src/App.tsx`
  3. Update navigation in `src/components/AppSidebar.tsx`
- **Add a New Language**
  1. Extend translations in `src/contexts/LanguageContext.tsx`
  2. Add the language selector in `src/layouts/AppLayout.tsx`
- **Modify Themes**
  - Edit Tailwind configuration in `tailwind.config.ts`
  - Update logic in `src/contexts/ThemeContext.tsx`

---

## 📱 Responsive Design

- Mobile-first approach
- Collapsible sidebar on small screens
- Touch-friendly interface elements
- Optimized layouts for all devices

---

## 🧑‍💻 Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS**
- **shadcn/ui** component library
- **Lucide React** icon set
- **Recharts** for data visualization
- **React Router DOM** for routing
- **React Context API** for state management
- **Vite** as the build tool
- **npm** or **bun** as package manager

---

## ⚙️ Development Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint checks

**Code Standards:**  
TypeScript, ESLint, Prettier

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

For support or questions:  
- [Open an issue](https://github.com/sametuca/react19-clapton-admin-template-free/issues)
- Check the documentation
- Review existing issues and discussions

---

_Built with ❤️ using React 19, TypeScript, and Tailwind CSS._

---

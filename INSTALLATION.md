# Installation Guide - React 19 Clapton Admin Template

> **Complete step-by-step installation guide for the premium React 19 admin template**

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Installation](#quick-installation)
3. [Detailed Installation](#detailed-installation)
4. [Environment Setup](#environment-setup)
5. [First Run](#first-run)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)
8. [Next Steps](#next-steps)

## Prerequisites

### **System Requirements**
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm 9.0+, yarn 1.22+, or bun 1.0+
- **Git**: Version 2.20.0 or higher
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 2GB free disk space

### **Required Software**

#### **Node.js Installation**
```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, download from:
# https://nodejs.org/en/download/
```

#### **Git Installation**
```bash
# Check if Git is installed
git --version

# If not installed:
# Windows: https://git-scm.com/download/win
# macOS: brew install git
# Linux: sudo apt-get install git
```

#### **Package Manager (Choose One)**
```bash
# npm (comes with Node.js)
npm --version

# yarn (install globally)
npm install -g yarn
yarn --version

# bun (install globally)
npm install -g bun
bun --version
```

## Quick Installation

### **1. Clone Repository**
```bash
# Clone the template
git clone https://github.com/sametuca/react19-clapton-admin-template-premium

# Navigate to project directory
cd react19-clapton-admin-template
```

### **2. Install Dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### **3. Start Development Server**
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun dev
```

### **4. Open Browser**
Navigate to: `http://localhost:8081` (or the port shown in terminal)

## Detailed Installation

### **Step 1: Repository Setup**

#### **Option A: Clone from GitHub**
```bash
# Clone the repository
git clone https://github.com/sametuca/react19-clapton-admin-template-premium

# Navigate to project directory
cd react19-clapton-admin-template

# Check repository status
git status
```

#### **Option B: Download ZIP**
1. Go to the GitHub repository
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Navigate to the extracted folder

### **Step 2: Dependencies Installation**

#### **Install Node Modules**
```bash
# Using npm (recommended for beginners)
npm install

# Using yarn (faster, better dependency resolution)
yarn install

# Using bun (fastest, modern package manager)
bun install
```

#### **Verify Installation**
```bash
# Check if node_modules folder exists
ls node_modules

# Check package.json scripts
npm run

# Verify key dependencies
npm list react
npm list typescript
npm list tailwindcss
```

### **Step 3: Environment Configuration**

#### **Create Environment File**
```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
nano .env.local
# or
code .env.local
```

#### **Configure Environment Variables**
```bash
# .env.local
VITE_APP_NAME=Clapton Admin
VITE_API_URL=http://localhost:3000
VITE_AUTH_DOMAIN=auth.example.com
VITE_CLIENT_ID=your-client-id
NODE_ENV=development
```

### **Step 4: Build Configuration**

#### **Check Build Tools**
```bash
# Verify Vite configuration
cat vite.config.ts

# Check TypeScript configuration
cat tsconfig.json

# Verify Tailwind configuration
cat tailwind.config.ts
```

#### **Install Global Tools (Optional)**
```bash
# Install Vite globally
npm install -g vite

# Install TypeScript globally
npm install -g typescript

# Install ESLint globally
npm install -g eslint
```

## Environment Setup

### **Development Environment**

#### **VS Code Setup**
1. Install VS Code: https://code.visualstudio.com/
2. Install recommended extensions:
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **TypeScript Importer**
   - **Prettier - Code formatter**
   - **ESLint**

#### **Browser Extensions**
- **React Developer Tools** (Chrome/Firefox)
- **Redux DevTools** (if using Redux)
- **Tailwind CSS Debugger**

### **Production Environment**

#### **Server Requirements**
- **Node.js**: 18.0.0+
- **Nginx/Apache**: For static file serving
- **SSL Certificate**: For HTTPS
- **Domain**: Configured DNS

#### **Environment Variables (Production)**
```bash
# .env.production
NODE_ENV=production
VITE_API_URL=https://api.yourdomain.com
VITE_AUTH_DOMAIN=auth.yourdomain.com
VITE_CLIENT_ID=production-client-id
```

## First Run

### **Start Development Server**
```bash
# Start development server
npm run dev

# Expected output:
# VITE v5.4.19 ready in 282 ms
# ➜ Local: http://localhost:8081/
# ➜ Network: http://192.168.1.110:8081/
```

### **Verify Installation**
1. **Welcome Page**: Should display React 19 Clapton template
2. **Navigation**: Sidebar should be functional
3. **Theme**: Dark/light theme switching should work
4. **Components**: All UI components should render properly

### **Test Key Features**
```bash
# Navigate to different pages
http://localhost:8081/          # Welcome page
http://localhost:8081/dashboard # Dashboard
http://localhost:8081/showcase  # Component showcase
http://localhost:8081/showcase/ai # AI components
```

## Customization

### **Theme Customization**

#### **Modify Colors**
```css
/* src/index.css */
:root {
  --primary: 59 130 246;      /* Blue */
  --secondary: 139 92 246;    /* Purple */
  --accent: 16 185 129;       /* Green */
  --background: 0 0% 100%;    /* White */
  --foreground: 222.2 84% 4.9%; /* Dark */
}
```

#### **Custom Tailwind Colors**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        brand: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
    },
  },
}
```

### **Component Customization**

#### **Modify Header**
```tsx
// src/layouts/AppLayout.tsx
function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        {/* Customize header content */}
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Your App Name</h1>
        </div>
      </header>
      {/* Rest of layout */}
    </div>
  );
}
```

#### **Custom Sidebar**
```tsx
// src/components/AppSidebar.tsx
const customMenuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  // Add your custom menu items
];
```

### **Page Customization**

#### **Create New Page**
```tsx
// src/pages/CustomPage.tsx
import React from 'react';

export default function CustomPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Custom Page</h1>
      <p className="text-muted-foreground">
        This is your custom page content.
      </p>
    </div>
  );
}
```

#### **Add Route**
```tsx
// src/App.tsx
import CustomPage from "./pages/CustomPage";

// Add to routes
<Route path="/custom" element={<CustomPage />} />
```

#### **Add to Sidebar**
```tsx
// src/components/AppSidebar.tsx
const mainItems = [
  // ... existing items
  { title: "Custom Page", url: "/custom", icon: FileText, badge: null },
];
```

## Troubleshooting

### **Common Installation Issues**

#### **Node.js Version Issues**
```bash
# Check Node.js version
node --version

# If version is too old, update Node.js
# Windows: Download from nodejs.org
# macOS: brew update && brew upgrade node
# Linux: Use nvm to manage Node.js versions

# Using nvm (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

#### **Permission Issues**
```bash
# Fix npm permissions (Linux/macOS)
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

# Windows: Run as Administrator
```

#### **Port Already in Use**
```bash
# Check what's using port 8081
npx kill-port 8081

# Or use different port
npm run dev -- --port 3001
```

### **Dependency Issues**

#### **Clear Cache and Reinstall**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### **Update Dependencies**
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest versions
npx npm-check-updates -u
npm install
```

### **Build Issues**

#### **TypeScript Errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Clear TypeScript cache
rm -rf node_modules/.cache/typescript/

# Check tsconfig.json syntax
npx tsc --showConfig
```

#### **Vite Build Errors**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Check Vite configuration
npx vite --config vite.config.ts

# Build with verbose output
npm run build -- --debug
```

### **Runtime Issues**

#### **Component Not Rendering**
```bash
# Check browser console for errors
# Verify component imports
# Check component props

# Add error boundaries
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
```

#### **Styling Issues**
```bash
# Check Tailwind CSS compilation
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

# Verify CSS imports
# Check Tailwind configuration
# Ensure PostCSS is configured
```

## Next Steps

### **Development Workflow**

#### **1. Set Up Git Repository**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: React 19 Clapton Admin Template"

# Add remote origin
git remote add origin https://github.com/your-username/your-project.git

# Push to GitHub
git push -u origin main
```

#### **2. Set Up CI/CD**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

#### **3. Set Up Testing**
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Create test files
mkdir src/__tests__
touch src/__tests__/App.test.tsx

# Run tests
npm test
```

### **Production Deployment**

#### **1. Build for Production**
```bash
# Create production build
npm run build

# Verify build output
ls dist/
```

#### **2. Deploy to Hosting Platform**

**Netlify (Recommended)**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
vercel

# Follow prompts to configure
```

**Netlify**
```bash
# Build project
npm run build

# Drag dist/ folder to Netlify
# Or connect GitHub repository
```

**AWS S3 + CloudFront**
```bash
# Install AWS CLI
aws configure

# Sync build files
aws s3 sync dist/ s3://your-bucket-name

# Create CloudFront distribution
```

### **3. Domain Configuration**
```bash
# Configure DNS records
# Point domain to hosting platform
# Set up SSL certificate
# Configure custom domain in hosting platform
```

## Additional Resources

### **Documentation**
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

### **Community Support**
- [React Community](https://reactjs.org/community/support.html)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react)
- [GitHub Discussions](https://github.com/your-repo/discussions)

### **Premium Support**
- **Email**: support@clapton-admin.com
- **Discord**: [Join our community](https://discord.gg/clapton-admin)
- **Documentation**: [docs.clapton-admin.com](https://docs.clapton-admin.com)

---

You have successfully installed the **React 19 Clapton Admin Template**! 

### **What's Next?**
1. **Explore Components** - Visit `/showcase` to see all available components
2. **Customize Theme** - Modify colors and styling in `src/index.css`
3. **Add Pages** - Create new pages and add them to the navigation
4. **Deploy** - Build and deploy your application to production

### **Need Help?**
- Check the [README.md](README.md) for comprehensive documentation
- Visit our [documentation site](https://docs.clapton-admin.com)
- Join our [Discord community](https://discord.gg/clapton-admin)
- Contact our [support team](mailto:support@clapton-admin.com)

---

**Happy coding!**

> **Built with love by the Samet UCA**

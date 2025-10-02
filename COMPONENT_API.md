# 🧩 Component API Reference - React 19 Clapton Admin Template

> **Complete API documentation for all UI components, AI components, and premium features**

## 📋 Table of Contents

1. [Base UI Components](#base-ui-components)
2. [AI Components](#ai-components)
3. [Premium Components](#premium-components)
4. [Layout Components](#layout-components)
5. [Form Components](#form-components)
6. [Data Display Components](#data-display-components)
7. [Navigation Components](#navigation-components)
8. [Feedback Components](#feedback-components)
9. [Utility Components](#utility-components)

## 🎨 Base UI Components

### **Button Component**
```tsx
import { Button } from '@/components/ui/button';

<Button 
  variant="default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size="default" | "sm" | "lg" | "icon"
  disabled={boolean}
  onClick={function}
  className={string}
>
  Button Text
</Button>
```

**Props:**
- `variant`: Button style variant
- `size`: Button size
- `disabled`: Disable button interaction
- `onClick`: Click event handler
- `className`: Additional CSS classes

**Examples:**
```tsx
// Primary button
<Button variant="default" size="lg">
  Get Started
</Button>

// Outline button
<Button variant="outline" size="sm">
  Learn More
</Button>

// Icon button
<Button size="icon" variant="ghost">
  <Settings className="h-4 w-4" />
</Button>
```

### **Card Component**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card className={string}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main card content
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Props:**
- `className`: Additional CSS classes for styling

**Examples:**
```tsx
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
    <CardDescription>View and edit user information</CardDescription>
  </CardHeader>
  <CardContent>
    <p>User details here...</p>
  </CardContent>
  <CardFooter>
    <Button>Edit Profile</Button>
  </CardFooter>
</Card>
```

### **Input Component**
```tsx
import { Input } from '@/components/ui/input';

<Input
  type="text" | "email" | "password" | "number" | "search" | "tel" | "url"
  placeholder={string}
  value={string}
  onChange={function}
  disabled={boolean}
  className={string}
/>
```

**Props:**
- `type`: Input type attribute
- `placeholder`: Placeholder text
- `value`: Input value
- `onChange`: Change event handler
- `disabled`: Disable input
- `className`: Additional CSS classes

**Examples:**
```tsx
<Input 
  type="email" 
  placeholder="Enter your email"
  className="w-full max-w-md"
/>

<Input 
  type="search" 
  placeholder="Search..."
  className="w-64"
/>
```

### **Badge Component**
```tsx
import { Badge } from '@/components/ui/badge';

<Badge 
  variant="default" | "secondary" | "destructive" | "outline"
  className={string}
>
  Badge Text
</Badge>
```

**Props:**
- `variant`: Badge style variant
- `className`: Additional CSS classes

**Examples:**
```tsx
<Badge variant="default">New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Beta</Badge>
```

## 🤖 AI Components

### **AI Chat Component**
```tsx
import { AIChat } from '@/components/ui/ai/ai-chat';

<AIChat />
```

**Features:**
- Floating chat button
- Draggable chat window
- Conversation management
- Local storage persistence
- Responsive design

**Usage:**
```tsx
function ChatPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>
      <p className="text-muted-foreground mb-6">
        Chat with our AI assistant for help and support.
      </p>
      <AIChat />
    </div>
  );
}
```

**Customization:**
```tsx
// The component automatically handles:
// - Chat state management
// - Message history
// - User input handling
// - AI response simulation
// - Local storage persistence
```

### **AI Search Component**
```tsx
import { AISearch } from '@/components/ui/ai/ai-search';

<AISearch />
```

**Features:**
- Global search with ⌘K shortcut
- Semantic search suggestions
- Search result categorization
- Keyboard navigation
- Responsive modal design

**Usage:**
```tsx
function SearchPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Search</h1>
      <AISearch />
    </div>
  );
}
```

**Keyboard Shortcuts:**
- `⌘K` / `Ctrl+K`: Open search
- `↑` / `↓`: Navigate results
- `Enter`: Select result
- `Escape`: Close search

### **AI Insights Component**
```tsx
import { AIInsights } from '@/components/ui/ai/ai-insights';

<AIInsights />
```

**Features:**
- Automated data insights
- Interactive charts
- Time range selection
- AI-powered suggestions
- Responsive grid layout

**Usage:**
```tsx
function AnalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Analytics</h1>
      <AIInsights />
    </div>
  );
}
```

**Data Types:**
- Sales performance
- User engagement
- Revenue analytics
- Traffic sources
- Conversion metrics

## ✨ Premium Components

### **3D Card Component**
```tsx
import { Card3D, ImageCard3D, Card3DGrid } from '@/components/ui/3d-card';

// Basic 3D Card
<Card3D 
  title="Card Title"
  description="Card description"
  icon={IconComponent}
  className={string}
/>

// Image 3D Card
<ImageCard3D 
  title="Image Title"
  description="Image description"
  imageSrc="/path/to/image.jpg"
  imageAlt="Image alt text"
  className={string}
/>

// 3D Card Grid
<Card3DGrid 
  cards={array}
  columns={number}
  className={string}
/>
```

**Props:**
- `title`: Card title text
- `description`: Card description text
- `icon`: Icon component
- `imageSrc`: Image source URL
- `imageAlt`: Image alt text
- `className`: Additional CSS classes

**Examples:**
```tsx
// Single 3D Card
<Card3D 
  title="Premium Feature"
  description="Advanced 3D interactive card with hover effects"
  icon={<Star className="w-8 h-8" />}
  className="w-full max-w-sm"
/>

// Image Card
<ImageCard3D 
  title="Product Showcase"
  description="Beautiful product image with 3D effects"
  imageSrc="/product.jpg"
  imageAlt="Product image"
  className="w-full max-w-md"
/>

// Card Grid
const cards = [
  { title: "Feature 1", description: "Description 1", icon: <Star /> },
  { title: "Feature 2", description: "Description 2", icon: <Heart /> },
  { title: "Feature 3", description: "Description 3", icon: <Zap /> },
];

<Card3DGrid cards={cards} columns={3} />
```

### **Parallax Hero Component**
```tsx
import { ParallaxHero, ParallaxHeroWithStats } from '@/components/ui/parallax-hero';

// Basic Parallax Hero
<ParallaxHero 
  title="Hero Title"
  subtitle="Hero subtitle text"
  backgroundImage="/path/to/bg.jpg"
  className={string}
/>

// Hero with Statistics
<ParallaxHeroWithStats 
  title="Hero Title"
  subtitle="Hero subtitle text"
  stats={array}
  backgroundImage="/path/to/bg.jpg"
  className={string}
/>
```

**Props:**
- `title`: Hero title text
- `subtitle`: Hero subtitle text
- `backgroundImage`: Background image URL
- `stats`: Array of statistics
- `className`: Additional CSS classes

**Examples:**
```tsx
// Basic Hero
<ParallaxHero 
  title="Welcome to Clapton"
  subtitle="The most advanced React 19 admin template"
  backgroundImage="/hero-bg.jpg"
/>

// Hero with Stats
const stats = [
  { number: "200+", label: "Components" },
  { number: "50+", label: "Pages" },
  { number: "100%", label: "Responsive" },
];

<ParallaxHeroWithStats 
  title="Premium Features"
  subtitle="Discover our advanced components"
  stats={stats}
  backgroundImage="/stats-bg.jpg"
/>
```

### **Interactive Timeline Component**
```tsx
import { InteractiveTimeline } from '@/components/ui/interactive-timeline';

<InteractiveTimeline 
  events={array}
  variant="vertical" | "horizontal" | "card"
  showProgress={boolean}
  className={string}
/>
```

**Props:**
- `events`: Array of timeline events
- `variant`: Timeline display variant
- `showProgress`: Show progress indicator
- `className`: Additional CSS classes

**Event Structure:**
```tsx
interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'pending';
}
```

**Examples:**
```tsx
const timelineEvents = [
  {
    id: '1',
    title: 'Project Started',
    description: 'Initial project setup and planning',
    date: '2024-01-01',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Development Phase',
    description: 'Core development and implementation',
    date: '2024-02-01',
    status: 'in-progress'
  },
  {
    id: '3',
    title: 'Testing & Launch',
    description: 'Final testing and deployment',
    date: '2024-03-01',
    status: 'pending'
  }
];

<InteractiveTimeline 
  events={timelineEvents}
  variant="vertical"
  showProgress={true}
/>
```

## 🏗️ Layout Components

### **App Layout Component**
```tsx
import { AppLayout } from '@/layouts/AppLayout';

<AppLayout>
  {/* Page content */}
</AppLayout>
```

**Features:**
- Responsive header
- Collapsible sidebar
- Theme switching
- Language selection
- User profile menu

**Usage:**
```tsx
// In App.tsx routes
<Route element={<AppLayout />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/analytics" element={<Analytics />} />
  {/* Other protected routes */}
</Route>
```

### **App Sidebar Component**
```tsx
import { AppSidebar } from '@/components/AppSidebar';

<AppSidebar />
```

**Features:**
- Navigation menu
- Collapsible sections
- Badge indicators
- Icon support
- Responsive design

**Customization:**
```tsx
// Add new menu items in AppSidebar.tsx
const customItems = [
  { title: "Custom Page", url: "/custom", icon: FileText, badge: null },
  { title: "Settings", url: "/settings", icon: Settings, badge: "NEW" },
];
```

## 📝 Form Components

### **Form Component**
```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="fieldName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Field Label</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>Field description</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

**Features:**
- React Hook Form integration
- Validation support
- Error handling
- Accessibility features

**Usage:**
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## 📊 Data Display Components

### **Table Component**
```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Features:**
- Responsive design
- Sortable columns
- Pagination support
- Row selection
- Custom styling

### **Chart Component**
```tsx
import { Chart } from '@/components/ui/chart';

<Chart 
  data={array}
  type="line" | "bar" | "pie" | "area"
  options={object}
  className={string}
/>
```

**Features:**
- Multiple chart types
- Interactive tooltips
- Responsive design
- Custom styling
- Data animations

## 🧭 Navigation Components

### **Tabs Component**
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="tab1" className="w-full">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Tab 1 content</TabsContent>
  <TabsContent value="tab2">Tab 2 content</TabsContent>
</Tabs>
```

**Features:**
- Multiple tab variants
- Keyboard navigation
- Responsive design
- Custom styling

### **Navigation Menu Component**
```tsx
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## 💬 Feedback Components

### **Toast Component**
```tsx
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

function MyComponent() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Toast Title",
      description: "Toast description",
      variant: "default" | "destructive",
    });
  };

  return (
    <div>
      <Button onClick={showToast}>Show Toast</Button>
      <Toaster />
    </div>
  );
}
```

**Features:**
- Multiple variants
- Auto-dismiss
- Custom duration
- Action buttons
- Responsive design

### **Dialog Component**
```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <div>Dialog content</div>
  </DialogContent>
</Dialog>
```

**Features:**
- Modal dialogs
- Backdrop blur
- Keyboard navigation
- Focus management
- Responsive design

## 🛠️ Utility Components

### **Loading Spinner Component**
```tsx
import { LoadingSpinner } from '@/components/ui/loading-spinner';

<LoadingSpinner 
  size="sm" | "md" | "lg"
  color="primary" | "secondary" | "white"
  className={string}
/>
```

**Props:**
- `size`: Spinner size
- `color`: Spinner color
- `className`: Additional CSS classes

### **Skeleton Component**
```tsx
import { Skeleton } from '@/components/ui/skeleton';

<Skeleton className="h-4 w-full" />
<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-4 w-[250px]" />
```

**Features:**
- Loading placeholders
- Customizable sizes
- Responsive design
- Animation support

## 🎨 Styling & Theming

### **CSS Variables**
```css
/* src/index.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 59 130 246;
  --primary-foreground: 210 40% 98%;
  --secondary: 139 92 246;
  --secondary-foreground: 210 40% 98%;
  --accent: 16 185 129;
  --accent-foreground: 210 40% 98%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 59 130 246;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 59 130 246;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 139 92 246;
  --secondary-foreground: 222.2 84% 4.9%;
  --accent: 16 185 129;
  --accent-foreground: 222.2 84% 4.9%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 59 130 246;
}
```

### **Tailwind CSS Classes**
```tsx
// Common utility classes used in components
className="
  // Layout
  flex items-center justify-between
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  container mx-auto px-4 py-8
  
  // Spacing
  space-y-4 space-x-2
  p-4 px-6 py-3
  
  // Colors
  bg-background text-foreground
  bg-primary text-primary-foreground
  border-border
  
  // Typography
  text-sm text-muted-foreground
  text-lg font-semibold
  
  // Effects
  shadow-lg rounded-lg
  hover:bg-accent hover:text-accent-foreground
  transition-colors duration-200
"
```

## 🔧 Customization Examples

### **Custom Button Variant**
```tsx
// Extend button variants in button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // Add custom variant
        gradient: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### **Custom Color Palette**
```tsx
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fbd7ac',
          300: '#f8bb77',
          400: '#f5953d',
          500: '#f2751a',
          600: '#e35a0f',
          700: '#bc420f',
          800: '#963512',
          900: '#7a2e12',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
};
```

## 📱 Responsive Design

### **Breakpoint System**
```tsx
// Tailwind CSS breakpoints
const breakpoints = {
  sm: '640px',   // Small devices
  md: '768px',   // Medium devices
  lg: '1024px',  // Large devices
  xl: '1280px',  // Extra large devices
  '2xl': '1536px', // 2X large devices
};

// Responsive component example
function ResponsiveComponent() {
  return (
    <div className="
      grid 
      grid-cols-1          /* Mobile: 1 column */
      md:grid-cols-2      /* Medium: 2 columns */
      lg:grid-cols-3      /* Large: 3 columns */
      xl:grid-cols-4      /* Extra large: 4 columns */
      gap-4
    ">
      {/* Content */}
    </div>
  );
}
```

### **Mobile-First Approach**
```tsx
// Always start with mobile styles, then add larger breakpoints
className="
  // Mobile styles (default)
  text-sm p-4 space-y-2
  
  // Medium devices and up
  md:text-base md:p-6 md:space-y-4
  
  // Large devices and up
  lg:text-lg lg:p-8 lg:space-y-6
  
  // Extra large devices and up
  xl:text-xl xl:p-10 xl:space-y-8
"
```

## 🧪 Testing Components

### **Component Testing Example**
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### **Accessibility Testing**
```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<Button>Accessible Button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📚 Additional Resources

### **Component Libraries**
- [shadcn/ui](https://ui.shadcn.com/) - Base component library
- [Radix UI](https://www.radix-ui.com/) - Headless component primitives
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### **Design Systems**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - CSS custom properties
- [Design Tokens](https://www.designtokens.org/) - Design system methodology

### **Accessibility**
- [ARIA Guidelines](https://www.w3.org/WAI/ARIA/apg/) - Accessible Rich Internet Applications
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Web Content Accessibility Guidelines
- [React A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - ESLint accessibility rules

---

## 🎯 Quick Reference

### **Common Component Patterns**
```tsx
// Basic component structure
export function ComponentName({ prop1, prop2, className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* Component content */}
    </div>
  );
}

// With TypeScript
interface ComponentNameProps {
  prop1: string;
  prop2?: number;
  className?: string;
}

export function ComponentName({ prop1, prop2, className }: ComponentNameProps) {
  // Component implementation
}
```

### **Styling Patterns**
```tsx
// Conditional classes
className={cn(
  "base-classes",
  variant === "primary" && "bg-primary text-white",
  variant === "secondary" && "bg-secondary text-black",
  className
)}

// Responsive classes
className="
  text-sm md:text-base lg:text-lg
  p-2 md:p-4 lg:p-6
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
"
```

---

**Need more help? Check our [documentation](https://docs.clapton-admin.com) or [contact support](mailto:support@clapton-admin.com)! 🚀**

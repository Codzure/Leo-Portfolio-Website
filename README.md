# Leonard Mutugi - Professional Portfolio Website

A modern, responsive portfolio website showcasing Leonard Mutugi's expertise as a technology leader and product digitization strategist specializing in fintech, digital banking innovation, and mobile solutions across Africa.

## 🚀 About The Project

This portfolio website presents Leonard's professional journey, technical expertise, and impactful projects in the fintech and mobile technology space. Built with modern web technologies, it showcases his work scaling mobile applications to 10M+ users, leading digital transformation initiatives, and driving product innovation at Equity Group Holdings.

## 🌟 Key Features

### 🎨 Modern Design & UX
- **Clean, Professional UI**: Elegant design with intuitive navigation
- **Dark/Light Mode**: Seamless theme switching with user preference persistence
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Engaging transitions using Framer Motion
- **Interactive Elements**: Hover effects and micro-interactions

### 🔧 Technical Excellence
- **Performance Optimized**: Built with Next.js 14 for lightning-fast loading
- **SEO Ready**: Meta tags, structured data, and optimized content
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Mobile-First**: Progressive enhancement approach
- **Type Safety**: Full TypeScript implementation

### 📱 Content Sections
- **Hero Section**: Professional introduction with multi-colored role highlights
- **About**: Comprehensive background in product digitization and technology leadership
- **Experience**: Detailed professional journey at Equity Group Holdings
- **Projects**: Showcase of high-impact mobile and web applications
- **Education**: Academic background and continuous learning journey
- **Tech Stack**: Technical skills organized by category
- **Contact**: Multiple communication channels and social links

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router for optimal performance
- **TypeScript**: Type-safe development with enhanced developer experience
- **React 18**: Latest React features with concurrent rendering

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Custom Gradients**: Beautiful color transitions and visual hierarchy

### Animation & Interactivity
- **Framer Motion**: Production-ready motion library for React
- **React Intersection Observer**: Scroll-triggered animations
- **Smooth Scrolling**: Enhanced navigation experience

### Icons & Assets
- **Lucide React**: Beautiful, customizable icon library
- **Next/Image**: Optimized image loading and performance
- **Theme Management**: Next Themes for dark/light mode

### Development Tools
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing with Autoprefixer
- **Git**: Version control with structured commits

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm/yarn**: Package manager
- **Git**: For version control

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Codzure/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Architecture

```
portfolio-website/
├── 📁 app/                    # Next.js 14 App Router
│   ├── 🎨 globals.css        # Global styles & Tailwind imports
│   ├── ⚛️ layout.tsx         # Root layout with theme provider
│   └── 🏠 page.tsx           # Main page with all sections
├── 📁 components/             # React components
│   ├── 👤 About.tsx          # Personal background & strengths
│   ├── 📞 Contact.tsx        # Contact information & social links
│   ├── 🎓 Education.tsx      # Academic background & certifications
│   ├── 💼 Experience.tsx     # Professional experience timeline
│   ├── 🏆 Hero.tsx           # Landing section with introduction
│   ├── 🧭 Navigation.tsx     # Header navigation with mobile menu
│   ├── 🚀 Projects.tsx       # Project showcase & achievements
│   ├── 💻 TechStack.tsx      # Technical skills & expertise
│   └── 🎨 theme-provider.tsx # Theme context provider
├── 📁 public/                # Static assets
│   ├── 🖼️ images/           # Project screenshots & assets
│   └── 📄 favicon files      # Site icons
├── ⚙️ tailwind.config.js     # Tailwind CSS configuration
├── ⚙️ tsconfig.json          # TypeScript configuration
├── ⚙️ next.config.js         # Next.js configuration
└── 📖 package.json           # Dependencies & scripts
```

## 🎯 Key Sections Overview

### 🏆 Hero Section
- **Professional Title**: Multi-colored role highlights
- **Specializations**: Software Engineering, Product Engineering, Digital Banking Innovation
- **Call-to-Actions**: Portfolio view and contact buttons
- **Social Links**: GitHub, LinkedIn, Medium, Email

### 👤 About Section
- **Professional Summary**: Technology leadership and product digitization expertise
- **Key Achievements**: 10M+ user scaling, 30% onboarding improvement
- **Core Strengths**: Mobile architecture, product strategy, team leadership
- **Vision**: Product-led digital transformation focus

### 💼 Experience Section
- **Current Role**: Lead Android Engineer at Equity Group Holdings
- **Career Progression**: Detailed timeline with achievements
- **Impact Metrics**: User growth, digital transformation results
- **Technologies**: Mobile development, fintech solutions

### 🚀 Projects Section
- **Equity Mobile App**: 10M+ users, 4.7★ rating
- **EquityBCDC App**: DRC market success, 100K+ users
- **Inua Jamii**: Offline-first architecture for financial inclusion
- **Open Source**: BiasharaAI, Cryptalk, Outrite, BambaSwap

### 💻 Tech Stack Section
- **Mobile & Frontend**: Kotlin, Jetpack Compose, React, TypeScript
- **Backend & API**: Supabase, Firebase, Node.js, PostgreSQL
- **Cloud & DevOps**: GitHub, CI/CD, Docker, AWS
- **Product & Strategy**: Digitization, AI integration, fintech solutions

## 🎨 Customization Guide

### 🎯 Content Updates
1. **Personal Information**: Update `components/Hero.tsx` and `components/About.tsx`
2. **Professional Experience**: Modify `components/Experience.tsx`
3. **Projects**: Add/update projects in `components/Projects.tsx`
4. **Technical Skills**: Update `components/TechStack.tsx`
5. **Contact Details**: Modify `components/Contact.tsx`

### 🌈 Visual Customization
1. **Color Scheme**: Edit `tailwind.config.js` for theme colors
2. **Typography**: Adjust font sizes and weights in component files
3. **Animations**: Customize Framer Motion animations
4. **Layout**: Modify spacing and grid layouts

### 🔧 Technical Configuration
1. **SEO Settings**: Update meta tags in `app/layout.tsx`
2. **Analytics**: Add tracking scripts
3. **Performance**: Optimize images and lazy loading

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks
npm run type-check   # Run TypeScript compiler checks
```

## 🌐 Deployment

### Recommended: Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with automatic CI/CD

### Alternative: Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build: `npm run build`
2. Export: `npm run export` (if using static export)
3. Deploy the generated files to your hosting provider

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for better performance
- **Lazy Loading**: Components load only when needed
- **Bundle Analysis**: Monitor and optimize bundle size

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact & Connect

**Leonard Mutugi**
- 📧 **Email**: [leonard.mutugi.m@gmail.com](mailto:leonard.mutugi.m@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/leonardmutugi](https://www.linkedin.com/in/leonardmutugi)
- 🐙 **GitHub**: [github.com/Codzure](https://github.com/Codzure)
- 📝 **Medium**: [medium.com/@codzure](https://medium.com/@codzure)
- 💬 **WhatsApp**: [+254797035505](https://wa.me/254797035505)

---

**"Building the future of digital finance and inclusive technology across Africa"**

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS* | *Designed for impact, optimized for performance* 
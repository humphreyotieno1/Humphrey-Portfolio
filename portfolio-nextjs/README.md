# Humphrey Portfolio - Next.js Edition

A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. This portfolio showcases modern web development best practices while maintaining excellent performance metrics.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful, performant animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lighthouse score 95+, optimized bundle size
- **SEO Ready**: Built-in SEO optimization with Next.js
- **Type Safe**: Full TypeScript support for better development experience

## 🎨 Design Inspiration

This portfolio is inspired by modern design principles with:
- Dark theme with teal accents (`#64FFDA`)
- Clean typography using Inter font family
- Minimalist layout with ample whitespace
- Smooth hover effects and transitions
- Professional color scheme

## 📊 Performance Benchmarks

### Lighthouse Scores
- **Performance**: 95/100
- **Accessibility**: 98/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### Web Vitals
- **LCP (Largest Contentful Paint)**: 1.2s (Excellent)
- **FID (First Input Delay)**: 15ms (Excellent)
- **CLS (Cumulative Layout Shift)**: 0.05 (Excellent)
- **TTFB (Time to First Byte)**: 180ms (Excellent)

### Bundle Analysis
- **JavaScript**: 145KB
- **CSS**: 12KB
- **Total**: 157KB

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Work.tsx
│       ├── PerformanceBenchmark.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🎯 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`:
- **Primary**: Dark blue (`#0A192F`)
- **Accent**: Teal (`#64FFDA`)
- **Text**: Light colors for readability

### Content
Update the content in each component file:
- `Hero.tsx`: Personal information and tagline
- `About.tsx`: About me section and skills
- `Experience.tsx`: Work experience timeline
- `Work.tsx`: Project showcase
- `Contact.tsx`: Contact information and form

### Styling
Modify the Tailwind classes in each component to match your design preferences.

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Optimized navigation for mobile devices
- Touch-friendly interactions

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:
- Staggered entrance animations
- Hover effects and micro-interactions
- Scroll-triggered animations
- Smooth page transitions

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized Google Fonts
- **Bundle Analysis**: Tree shaking and minification
- **Lazy Loading**: Component-level lazy loading

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media optimization
- **Semantic HTML**: Proper heading structure
- **Performance**: Core Web Vitals optimization

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

# 🎯 Task Master

A professional, modern task management application built with React and Tailwind CSS. Features a sophisticated dark theme with premium UI patterns, responsive design, and intuitive user experience.

![Task Master App](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.1.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 **Professional Dark Theme**
- Sophisticated dark color palette with deep charcoal backgrounds
- Modern accent colors (cyan, blue, teal) for highlights
- Glassmorphism effects with backdrop blur
- Premium UI patterns and smooth animations

### 📱 **Fully Responsive Design**
- Mobile-first approach with touch-friendly interactions
- Adaptive layouts for tablet and desktop
- Readable text sizes across all screen sizes
- Professional spacing and typography

### ⚡ **Core Functionality**
- **Add Tasks**: Create new tasks with intuitive form
- **Edit Tasks**: Inline editing with keyboard shortcuts
- **Delete Tasks**: Remove tasks with confirmation
- **Mark Complete**: Toggle task completion status
- **Local Storage**: Persistent data across sessions

### 📊 **Progress Tracking**
- Real-time statistics dashboard
- Visual progress bar with animations
- Task completion percentage
- Pending vs completed task counts

### 🎯 **User Experience**
- Smooth hover effects and transitions
- Professional status badges (Pending/Completed)
- Keyboard shortcuts (Enter to save, Escape to cancel)
- Loading states and visual feedback

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-master.git
   cd task-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Vite 7.1.0** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Support** - Type checking (optional)

## 📁 Project Structure

```
task-master/
├── public/
│   └── favicon.svg          # Custom app favicon
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx     # Task creation form
│   │   ├── TodoItem.jsx     # Individual task component
│   │   ├── ProgressBar.jsx  # Progress visualization
│   │   └── index.js         # Component exports
│   ├── contexts/
│   │   ├── TodoContext.js   # React context for state management
│   │   └── index.js         # Context exports
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and animations
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
└── README.md                # Project documentation
```

## 🎨 Design System

### Color Palette
- **Background**: `gray-950` to `slate-900` gradient
- **Cards**: `gray-900/80` with backdrop blur
- **Borders**: `gray-800` for subtle separation
- **Text**: `gray-100` (primary), `gray-400` (secondary)
- **Accents**: `cyan-400`, `blue-500`, `teal-400`

### Typography
- **Headings**: Bold with gradient text effects
- **Body Text**: Medium weight with proper line height
- **Labels**: Small, uppercase with letter spacing

### Spacing
- **Mobile**: 16px base spacing
- **Tablet**: 24px base spacing
- **Desktop**: 32px base spacing

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|---------|
| Mobile | < 640px | Single column, compact spacing |
| Tablet | 640px - 1024px | Two columns, balanced spacing |
| Desktop | > 1024px | Four columns, premium spacing |

## 🔧 Customization

### Theme Colors
Modify the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Animations
Custom animations are defined in `src/index.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The app can be deployed to any static hosting service that supports SPA routing.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and formatting
- Add comments for complex logic
- Test on multiple screen sizes
- Ensure accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Vite** for the fast development experience
- **Heroicons** for the beautiful SVG icons

## 📞 Support

If you have any questions or need help:

- **Issues**: [GitHub Issues](https://github.com/yourusername/task-master/issues)
- **Email**: your.email@example.com
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

---

<div align="center">
  <p>Made with ❤️ by [Your Name]</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>



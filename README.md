# SoftSell - Software License Resale Platform

A modern, responsive web application for selling unused software licenses. Built with React, TypeScript, and Tailwind CSS.

![SoftSell Preview](https://via.placeholder.com/800x400?text=SoftSell+Preview)

## 🌟 Features

- **Modern UI/UX**
  - Responsive design that works on all devices
  - Dark/Light mode support
  - Smooth animations and transitions
  - Clean, professional interface

- **AI-Powered Chat Assistant**
  - Real-time customer support
  - Pre-configured responses for common questions
  - Easy to integrate with any LLM (OpenAI, etc.)
  - Beautiful chat interface with animations

- **Key Sections**
  - Hero section with clear value proposition
  - How It Works process explanation
  - Why Choose Us benefits
  - Customer testimonials
  - Contact form with validation

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
project/
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ChatWidget.tsx
│   │   └── ThemeToggle.tsx
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.ts       # Vite configuration
```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/softsell.git
   cd softsell
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette
- Responsive breakpoints
- Dark mode support
- Custom animations

## 🤖 AI Chat Integration

The chat widget is currently using mock responses but can be easily integrated with any LLM:

1. Replace the `MOCK_RESPONSES` in `ChatWidget.tsx` with API calls
2. Add your API key to environment variables
3. Implement error handling and loading states

Example integration with OpenAI:
```typescript
const getAIResponse = async (query: string) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: query }],
    }),
  });
  return response.json();
};
```

## 🎨 Customization

### Colors

The color scheme can be modified in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#EFF6FF',
    // ... other shades
  },
  secondary: {
    50: '#F0FDFA',
    // ... other shades
  },
  accent: {
    50: '#FFF7ED',
    // ... other shades
  },
}
```

### Components

All components are modular and can be easily customized:
- `Header.tsx`: Navigation and branding
- `HeroSection.tsx`: Main landing section
- `HowItWorks.tsx`: Process explanation
- `WhyChooseUs.tsx`: Value proposition
- `Testimonials.tsx`: Customer reviews
- `ContactForm.tsx`: Lead capture form
- `ChatWidget.tsx`: AI assistant

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment


`

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

### Testing Guidelines

1. Unit Tests
   - Test individual components
   - Test utility functions
   - Test state management

2. Integration Tests
   - Test component interactions
   - Test form submissions
   - Test API integrations

3. E2E Tests
   - Test user flows
   - Test responsive design
   - Test accessibility

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Git Workflow

1. Create feature branch
2. Make changes
3. Write tests
4. Submit PR
5. Code review
6. Merge to main

### Performance Optimization

- Lazy load components
- Optimize images
- Use code splitting
- Implement caching
- Monitor bundle size

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Process

1. Update documentation
2. Add tests if needed
3. Ensure all tests pass
4. Update the README if needed
5. Follow the existing code style

## 📞 Support

For support, email kumarv11535@gmail.com or open an issue in the GitHub repository.

### Common Issues

1. Build Errors
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify environment variables

2. Runtime Errors
   - Check browser console
   - Verify API endpoints
   - Check network requests

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

## 📈 Roadmap

- [ ] Add user authentication
- [ ] Implement real-time chat
- [ ] Add payment integration
- [ ] Create admin dashboard
- [ ] Add analytics tracking
- [ ] Implement SEO optimization
- [ ] Add multi-language support
- [ ] Create mobile app version

# Steve Kamgno - Portfolio Website

A professional, responsive developer portfolio website featuring interactive 3D effects powered by Three.js.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Interactive 3D Background**: Subtle Three.js particle system and wave effects in hero section
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-based animations, hover effects, and dynamic typing effect
- **Contact Form**: Functional contact form with validation and user feedback
- **Performance Optimized**: Lightweight animations for smooth performance

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, grid, flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Three.js**: 3D graphics and particle effects
- **Font Awesome**: Icon library
- **Google Fonts**: Inter and Space Grotesk fonts

## Sections

1. **Hero Section**: Dynamic introduction with 3D background
2. **About**: Personal biography and statistics
3. **Skills**: Categorized technical and soft skills
4. **Projects**: Featured project portfolio
5. **Experience**: Education and professional background
6. **Contact**: Contact form and information
7. **Footer**: Quick links and social media

## Installation & Usage

### Option 1: Direct Browser View
Simply open `index.html` in a modern web browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 3000

# Using Node.js http-server
npx http-server -p 3000

# Using PHP
php -S localhost:3000
```

Then visit `http://localhost:3000`

## File Structure

```
project/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── three-background.js
│   └── images/
│       └── (add your images here)
├── package.json
└── README.md
```

## Customization

### Update Personal Information
Edit `index.html` to update:
- Name and bio
- Skills and technologies
- Project details
- Contact information
- Social media links

### Change Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #0066ff;
    --accent-color: #6366f1;
    /* ... more variables */
}
```

### Modify 3D Effects
Adjust particle count and behavior in `assets/js/three-background.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance

- Optimized Three.js particle count for smooth performance
- Lazy-loaded animations on scroll
- Efficient CSS transitions
- Minimal JavaScript overhead

## License

MIT License - Feel free to use this template for your own portfolio

## Contact

**Steve Kamgno**
- Email: steve@example.com
- GitHub: [github.com](https://github.com)
- LinkedIn: [linkedin.com](https://linkedin.com)

---

Built with ❤️ by Steve Kamgno

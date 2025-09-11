# 📚 Should I Bunk? - Attendance Calculator

A modern, responsive web application that helps students calculate their attendance percentage and determine how many classes they need to attend to meet minimum requirements.

![Attendance Calculator Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)


- **Real-time Calculation**: Instantly calculates attendance percentage as you type
- **Smart Predictions**: Shows exactly how many classes you need to attend to meet requirements
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Modern UI**: Clean navy blue gradient theme with smooth animations
- **Input Validation**: Prevents invalid inputs and provides helpful error messages
- **User-Friendly**: Intuitive interface with clear visual feedback

## 🚀 Live Demo

[**Try it now →**](https://shouldibunk.netlify.app/)

## 📱 Screenshots
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/f13e4f78-5743-42cc-8cce-4c3b40e85e53" />

### Desktop View
*Clean, modern interface optimized for larger screens*
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2cb7451d-e0cf-442b-87fd-f6411310999f" />


### Mobile View
*Fully responsive design that works great on smartphones*

<img width="270" height="578" alt="image" src="https://github.com/user-attachments/assets/d2c2e17e-7781-4161-9350-f4c5ceabc652" />



## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality and calculations
- **Google Fonts** - Poppins font family for clean typography
- **Netlify** - Deployment and hosting

## 🎨 Design Features

- **Navy Blue Gradient Background** (`#1B2A49` to `#314675`)
- **Coral-Orange Button Gradient** (`#FF6C51` to `#FF835E`)
- **Responsive Typography** - Scales beautifully across all device sizes
- **Smooth Animations** - Subtle hover effects and transitions
- **Mobile-First Design** - Optimized for touch interfaces

## 🧮 How It Works

1. **Enter Classes Attended** - Input the number of classes you've attended
2. **Enter Total Classes Held** - Input the total number of classes conducted
3. **Enter Required Attendance %** - Set your institution's minimum attendance requirement
4. **Get Results** - See your current attendance and how many classes you need to attend

### Calculation Formula

```javascript
// Current Attendance Percentage
attendancePercent = (attended / total) * 100

// Classes Needed to Meet Requirement
neededClasses = Math.ceil(((requiredPercent / 100) * total - attended) / (1 - requiredPercent / 100))
```

## 🚀 Quick Start

### Option 1: Use Online
Simply visit the [live demo](https://shouldibunk.netlify.app/) and start calculating!

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/should-i-bunk.git
   cd should-i-bunk
   ```

2. **Open in browser**
   ```bash
   # Using VS Code
   code .
   # Then open index.html with Live Server
   
   # Or simply open index.html in any web browser
   open index.html
   ```

That's it! No build process or dependencies required.

## 📁 Project Structure

```
should-i-bunk/
├── index.html          # Main HTML file
├── styles.css          # CSS styles 
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎯 Use Cases

- **College Students** - Track attendance for semester requirements
- **School Students** - Monitor attendance to avoid penalties
- **Teachers** - Quick tool to help students understand attendance status
- **Parents** - Check if their children are meeting attendance requirements

## 🔧 Customization

### Changing Colors
Edit the CSS variables in the `style.css` file:
```css
/* Background gradient */
background: linear-gradient(135deg, #1B2A49, #314675);

/* Button gradient */
background: linear-gradient(90deg, #FF6C51 0%, #FF835E 100%);
```

### Modifying Calculations
Update the JavaScript in the `main.js` file to change calculation logic.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Ideas for Contributions
- [ ] Add dark/light theme toggle
- [ ] Include semester-wise tracking
- [ ] Add data export functionality
- [ ] Implement local storage for saving data
- [ ] Add multiple subject tracking

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨💻 Author

**Your Name**
- GitHub: [@satyajeet08](https://github.com/SatyajeetSahoo08)
- LinkedIn: (https://linkedin.com/in/satyajeetsahoo411)

## 🙏 Acknowledgments

- Inspired by the daily struggle of college students everywhere
- Design inspired by modern web design trends
- Built with ❤️ for the student community

***

**Made with ❤️ by a student, for students** 🎓

*"Because sometimes you need to know if you can afford to skip that 8 AM class!"* 😴
# 👨‍💻 Mohit Tiwari - Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Showcases skills, projects, and professional experience with a clean design and smooth animations.

## ✨ Features

- **🎨 Dynamic Theme Switching**: Seamless Light and Dark mode toggle with persisted preference.
- **📄 Interactive Resume Viewer**: Custom-built PDF viewer to read or download the resume directly.
- **📧 Functional Contact Form**: Integrated with EmailJS for direct email communication from the website.
- **📊 GitHub Statistics**: Live GitHub contribution calendar visualization.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.
- **🚀 Smooth Animations**: Powered by Framer Motion for engaging entry and hover effects.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **PDF Handling**: [React PDF](https://react-pdf.org/)
- **Type Animation**: [React Type Animation](https://www.npmjs.com/package/react-type-animation)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohittiwari34/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

To make the contact form functional, you need to configure EmailJS keys in `src/components/Contact.jsx`.

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create a **Service** and a **Template**.
3. Update the `sendForm` function in `Contact.jsx` with your:
    - Service ID
    - Template ID
    - Public Key

### Resume

To update the resume, replace the `resume.pdf` file in the `public/` directory with your own PDF file.

## 📂 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components (Navbar, Hero, Projects, etc.)
├── context/        # React Context (ThemeContext)
├── hooks/          # Custom Hooks (useTheme)
├── App.jsx         # Main application routing
└── main.jsx        # Entry point
```

## 👤 Author

**Mohit Tiwari**

- GitHub: [@mohittiwari34](https://github.com/mohittiwari34)
- LinkedIn: [Mohit Tiwari](https://www.linkedin.com/in/mohit-tiwari-7707602a2/)
- Twitter/X: [@Mohitti778814](https://x.com/Mohitti778814)

---
*Built with ❤️ using React.*

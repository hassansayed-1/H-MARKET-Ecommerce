# H-MARKET Ecommerce Platform

A modern, full-stack ecommerce application built with React and Strapi, featuring a responsive frontend with Material-UI and a robust headless CMS backend for product management.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Development](#development)
- [Building for Production](#building-for-production)
- [License](#license)

## 🎯 Overview

H-MARKET is a comprehensive ecommerce solution designed to provide users with a seamless shopping experience. The project is built with modern web technologies, featuring:

- **Frontend**: A responsive React application with Vite for lightning-fast development
- **Backend**: A powerful Strapi headless CMS for flexible content and product management
- **State Management**: Redux Toolkit for efficient application state handling
- **UI Components**: Material-UI for polished and accessible user interfaces
- **Styling**: Tailwind CSS for utility-first responsive design

## 🛠 Tech Stack

### Frontend
- **React** 19.1.0 - UI library
- **Vite** 7.0.4 - Build tool and dev server
- **Redux Toolkit** 2.8.2 - State management
- **Material-UI** 7.2.0 - Component library
- **React Router** 7.7.1 - Client-side routing
- **Tailwind CSS** 4.1.11 - Utility-first CSS framework
- **Emotion** 11.14.x - CSS-in-JS solution
- **React Icons** 5.5.0 - Icon library

### Backend
- **Strapi** 5.20.0 - Headless CMS
- **MySQL 2** or **SQLite** - Database options
- **Node.js** 18.0.0 - 22.x

### Language Composition
- JavaScript: 95.5%
- TypeScript: 4%
- Other: 0.5%

## 📁 Project Structure

```
H-MARKET-Ecommerce/
├── frontend/                 # React + Vite frontend application
│   ├── src/                 # Source code
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── README.md            # Frontend-specific docs
├── backend/                  # Strapi backend CMS
│   ├── src/                 # Backend source code
│   ├── package.json         # Backend dependencies
│   └── README.md            # Backend-specific docs
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher (up to 22.x)
- **npm**: Version 6.0.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hassansayed-1/H-MARKET-Ecommerce.git
   cd H-MARKET-Ecommerce
   ```

## 🎨 Frontend Setup

The frontend is a modern React application built with Vite, featuring a responsive UI with Material-UI and Tailwind CSS.

### Install Dependencies
```bash
cd frontend
npm install
```

### Development
```bash
npm run dev
```
This starts the Vite development server with Hot Module Replacement (HMR) enabled for instant feedback.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting
```bash
npm run lint
```
Runs ESLint to ensure code quality and consistency.

## 🔧 Backend Setup

The backend is a Strapi headless CMS that provides a flexible API for managing products, users, and content.

### Install Dependencies
```bash
cd backend
npm install
```

### Development
```bash
npm run dev
# or
npm run develop
```
Starts the Strapi application with auto-reload enabled for active development.

### Build
```bash
npm run build
```
Builds the admin panel for production deployment.

### Start Production Server
```bash
npm run start
```
Starts the Strapi application with auto-reload disabled (for production).

### Deployment
```bash
npm run deploy
```
Deploys your Strapi application. Strapi supports various deployment options including Strapi Cloud.

For detailed deployment instructions, visit [Strapi Deployment Documentation](https://docs.strapi.io/dev-docs/deployment).

## 💻 Development

### Running Both Frontend and Backend

In separate terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The frontend will typically be available at `http://localhost:5173`  
The backend/admin panel will be at `http://localhost:1337`

### Environment Configuration

Create `.env` files in both frontend and backend directories to configure environment variables:

- **Backend**: Configure database, API settings, and Strapi plugins
- **Frontend**: Configure API endpoints and application-specific variables

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Build
```bash
cd backend
npm run build
```

Follow the Strapi [deployment section](https://docs.strapi.io/dev-docs/deployment) for hosting options.

## 📚 Additional Resources

### Frontend
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Material-UI Documentation](https://mui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

### Backend
- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Resource Center](https://strapi.io/resource-center)
- [Strapi Tutorials](https://strapi.io/tutorials)
- [Strapi Community Forum](https://forum.strapi.io)



**Created by**: Hassan Sayed  
**Repository**: [H-MARKET-Ecommerce](https://github.com/hassansayed-1/H-MARKET-Ecommerce)  
**Last Updated**: Aug 2025

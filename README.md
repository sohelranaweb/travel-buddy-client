# 🧳 Travel Buddy & Meetup Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](YOUR_LIVE_URL_HERE)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)](https://tailwindcss.com/)

> Connecting travelers worldwide to transform solo journeys into shared adventures

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌍 Overview

**Travel Buddy & Meetup Platform** is a modern, responsive frontend application for a subscription-based social travel platform. It helps travelers find compatible companions for their upcoming trips by providing an intuitive interface for profile management, trip planning, traveler matching, and community reviews.

**Live URL:** [YOUR_LIVE_URL_HERE]  
**Backend API:** [YOUR_BACKEND_API_URL]

## ✨ Key Features

### 🔐 Authentication & Authorization

- Secure user registration and login interface
- JWT token management with automatic refresh
- Protected routes based on user roles (User & Admin)
- Persistent login sessions
- Password visibility toggle and validation

### 👤 User Profile Management

- Comprehensive profile creation and editing forms
- Image upload with drag-and-drop support (Cloudinary/ImgBB integration)
- Profile sections:
  - Personal information (name, bio, location)
  - Travel interests with multi-select tags
  - Visited countries showcase
  - Profile picture management
- Public profile viewing with responsive design
- Real-time form validation

### 🗺️ Travel Plan Management

- Intuitive trip creation wizard
- Trip management dashboard with CRUD operations:
  - Create new travel plans with rich details
  - Edit existing trips
  - Delete trips with confirmation
  - View all personal trips
- Trip details include:
  - Destination search with autocomplete
  - Date range picker
  - Budget slider/input
  - Travel type selector (Solo, Family, Friends)
  - Rich text editor for itinerary
- Card-based trip display with filtering

### 🔍 Advanced Search & Matching

- Dynamic search interface with filters:
  - Destination autocomplete
  - Date range filtering
  - Interest-based matching
  - Budget range filtering
- Real-time search results
- Pagination and infinite scroll
- Sort options (date, popularity, compatibility)
- Visual compatibility scores
- Quick view modals for trip details

### ⭐ Review & Rating System

- Interactive star rating component
- Review creation form with validation
- Review management:
  - Edit own reviews
  - Delete reviews with confirmation
  - View all reviews received
- Rating statistics display
- Recent reviews carousel
- User reputation badges

### 💳 Payment Integration

- Subscription plan selection page
- Pricing comparison cards (Monthly/Yearly)
- Secure checkout flow with Stripe/SSLCommerz
- Payment success/failure handling
- Verified badge purchase interface
- Subscription management dashboard
- Payment history table

### 👨‍💼 Admin Dashboard

- Protected admin-only routes
- User management interface:
  - User list with search and filters
  - User details view
  - Suspend/activate user actions
  - Delete user with confirmation
- Travel plan moderation panel
- Analytics dashboard with charts
- Content management tools

### 🎨 UI/UX Features

- Fully responsive design (mobile, tablet, desktop)
- Dark/light mode toggle
- Smooth page transitions and animations
- Loading states and skeletons
- Error boundaries and fallback UI
- Toast notifications for user feedback
- Accessible components (WCAG 2.1 compliant)
- Internationalization support (i18n)

## 🛠️ Technology Stack

### Core

- **React.js** (v18.x) - UI library
- **TypeScript** - Type-safe development
- **React Router DOM** (v6.x) - Client-side routing
- **Vite** - Build tool and dev server

### State Management

- **Redux Toolkit** - Global state management
- **React Query / TanStack Query** - Server state management
- **Redux Persist** - State persistence

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Reusable component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Forms & Validation

- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### HTTP & API

- **Axios** - HTTP client
- **Axios Interceptors** - Request/response handling

### Additional Libraries

- **date-fns** - Date manipulation
- **React Dropzone** - File upload
- **React Hot Toast** - Notifications
- **Recharts** - Data visualization (Admin dashboard)
- **React Helmet Async** - SEO management

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn** (v1.22 or higher)
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/travel-buddy-frontend.git
cd travel-buddy-frontend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_APP_NAME=Travel Buddy
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Access the application**

Open your browser and navigate to:

```
http://localhost:5173
```

## 📁 Project Structure

```
travel-buddy-frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── assets/
│
├── src/
│   ├── api/                    # API service layer
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   ├── trips.ts
│   │   ├── reviews.ts
│   │   └── payment.ts
│   │
│   ├── components/             # Reusable components
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── profile/
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── ProfileEdit.tsx
│   │   │   └── InterestTags.tsx
│   │   ├── trips/
│   │   │   ├── TripCard.tsx
│   │   │   ├── TripForm.tsx
│   │   │   ├── TripList.tsx
│   │   │   └── TripDetails.tsx
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── SearchResults.tsx
│   │   ├── reviews/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   └── ReviewList.tsx
│   │   ├── payment/
│   │   │   ├── SubscriptionPlans.tsx
│   │   │   ├── CheckoutForm.tsx
│   │   │   └── PaymentSuccess.tsx
│   │   ├── admin/
│   │   │   ├── UserTable.tsx
│   │   │   ├── TripModeration.tsx
│   │   │   └── Analytics.tsx
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   └── ui/                # Shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   │
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Profile.tsx
│   │   ├── EditProfile.tsx
│   │   ├── CreateTrip.tsx
│   │   ├── MyTrips.tsx
│   │   ├── TripDetails.tsx
│   │   ├── Search.tsx
│   │   ├── Subscription.tsx
│   │   ├── Dashboard.tsx       # User dashboard
│   │   ├── AdminDashboard.tsx
│   │   └── NotFound.tsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   ├── useInfiniteScroll.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── store/                  # Redux store
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   ├── tripSlice.ts
│   │   │   └── uiSlice.ts
│   │   └── hooks.ts
│   │
│   ├── types/                  # TypeScript interfaces
│   │   ├── user.types.ts
│   │   ├── trip.types.ts
│   │   ├── review.types.ts
│   │   ├── payment.types.ts
│   │   └── index.ts
│   │
│   ├── utils/                  # Utility functions
│   │   ├── validation.ts
│   │   ├── formatters.ts
│   │   ├── dateHelpers.ts
│   │   ├── constants.ts
│   │   └── axios.config.ts
│   │
│   ├── styles/                 # Global styles
│   │   ├── index.css
│   │   └── globals.css
│   │
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── routes.tsx              # Route configuration
│
├── .env                        # Environment variables
├── .env.example                # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_API_TIMEOUT=30000

# Application
VITE_APP_NAME=Travel Buddy & Meetup
VITE_APP_URL=http://localhost:5173

# Image Upload (Cloudinary)
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_CLOUDINARY_API_KEY=your_api_key

# Alternative: ImgBB
VITE_IMGBB_API_KEY=your_imgbb_api_key

# Payment Gateway (Stripe)
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Alternative: SSLCommerz
VITE_SSLCOMMERZ_STORE_ID=your_store_id

# Feature Flags
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_PWA=true

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=your_ga_id

# Social Login (Optional)
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_FACEBOOK_APP_ID=your_facebook_app_id
```

## 📜 Available Scripts

In the project directory, you can run:

### Development

```bash
npm run dev          # Start development server
npm run dev:host     # Start dev server with network access
```

### Build

```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Testing

```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

### Analysis

```bash
npm run analyze      # Analyze bundle size
```

## 📖 Usage Guide

### For Users

#### 1. **Getting Started**

- Visit the homepage and click "Get Started" or "Sign Up"
- Create an account with your email and password
- Complete email verification (if enabled)

#### 2. **Setting Up Your Profile**

- Navigate to "My Profile" from the navigation menu
- Click "Edit Profile" button
- Upload a profile picture (drag & drop or click to browse)
- Fill in your bio, travel interests, and location
- Add countries you've visited
- Click "Save Changes"

#### 3. **Creating a Travel Plan**

- Click "Create Trip" in the navigation or dashboard
- Fill in the trip form:
  - Select destination from autocomplete suggestions
  - Choose start and end dates using the date picker
  - Set your budget range
  - Select travel type (Solo, Family, Friends)
  - Write a detailed description or itinerary
- Click "Publish Trip" to make it visible to others
- View your trip in "My Trips" section

#### 4. **Finding Travel Buddies**

- Go to "Search" or "Find Travelers" page
- Use filters to narrow down results:
  - Enter destination in search bar
  - Select date range
  - Choose interests that match yours
  - Set budget preferences
- Browse through matching travelers
- Click on a profile or trip card to view details
- Click "Connect" or "Send Message" to reach out

#### 5. **Managing Reviews**

- After a trip, navigate to your travel buddy's profile
- Click "Write a Review" button
- Rate your experience (1-5 stars)
- Write detailed feedback
- Submit review
- Edit or delete your reviews from "My Reviews" section

#### 6. **Subscription & Premium Features**

- Click "Upgrade" or "Go Premium" button
- Choose between Monthly or Yearly plan
- Review pricing and features
- Click "Subscribe Now"
- Complete payment through secure checkout
- Enjoy premium features and verified badge

### For Admins

#### 1. **Accessing Admin Dashboard**

- Log in with admin credentials
- Navigate to "Admin Dashboard" (only visible to admins)

#### 2. **Managing Users**

- Go to "User Management" section
- View all registered users in a table
- Use search and filters to find specific users
- Actions available:
  - View detailed user profile
  - Suspend or activate accounts
  - Delete users (with confirmation)
  - View user activity logs

#### 3. **Moderating Content**

- Navigate to "Trip Moderation" panel
- Review flagged or reported travel plans
- Approve or reject trips
- Edit inappropriate content
- Delete violating content

#### 4. **Viewing Analytics**

- Access "Analytics" dashboard
- View charts and statistics:
  - Total users and growth
  - Active travel plans
  - Revenue metrics
  - User engagement data

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

3. **Set Environment Variables**

- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add all variables from `.env` file

### Deploy to Netlify

1. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

2. **Build the project**

```bash
npm run build
```

3. **Deploy**

```bash
netlify deploy --prod
```

4. **Configure Build Settings**

- Build command: `npm run build`
- Publish directory: `dist`
- Add environment variables in Netlify Dashboard

### Deploy to GitHub Pages

1. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**

```json
{
  "homepage": "https://yourusername.github.io/travel-buddy-frontend",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**

```bash
npm run deploy
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Steps to Contribute

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/AmazingFeature
```

3. **Make your changes**
4. **Commit your changes**

```bash
git commit -m 'Add some AmazingFeature'
```

5. **Push to the branch**

```bash
git push origin feature/AmazingFeature
```

6. **Open a Pull Request**

### Coding Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Redux Toolkit](https://redux-toolkit.js.org/) - State Management
- Thanks to all contributors and the open-source community

## 📞 Support

For support, email support@travelbuddy.com or join our Slack channel.

---

**Made with ❤️ for travelers, by travelers**

_Happy Travels! 🌍✈️_

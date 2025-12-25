# 🧳 Travel Buddy & Meetup Platform

Live links: https://travel-buddy-client-taupe.vercel.app/

> Connecting travelers worldwide to transform solo journeys into shared adventures

## 🌍 Overview

**Travel Buddy & Meetup Platform** is a modern, responsive frontend application for a subscription-based social travel platform. It helps travelers find compatible companions for their upcoming trips by providing an intuitive interface for profile management, trip planning, traveler matching, and community reviews.

**Live URL:** https://travel-buddy-client-taupe.vercel.app
**Backend API:** https://travel-buddy-server-p1ql.onrender.com

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

- **Next.js** - UI library
- **TypeScript** - Type-safe development

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Reusable component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Forms & Validation

- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries

- **date-fns** - Date manipulation
- **React Dropzone** - File upload
- **React Hot Toast** - Notifications
- **Recharts** - Data visualization (Admin dashboard)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- **npm**
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sohelranaweb/travel-buddy-client.git
cd travel-buddy-client
```

2. **Install dependencies**

````bash
npm install


3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_APP_NAME=Travel Buddy
````

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Access the application**

Open your browser and navigate to:

```
http://localhost:3000
```

## 📁 Project Structure

```
travel-buddy-nextjs/
├── public/                          # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/                         # App Router directory
│   │   ├── (auth)/                  # Auth route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (dashboard)/             # Dashboard route group (protected)
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── profile/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── edit/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [userId]/
│   │   │   │       └── page.tsx
│   │   │   ├── trips/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── [tripId]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── edit/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── loading.tsx
│   │   │   │   └── my-trips/
│   │   │   │       └── page.tsx
│   │   │   ├── search/
│   │   │   │   ├── page.tsx
│   │   │   │   └── @modal/
│   │   │   │       └── (.)trips/[tripId]/
│   │   │   │           └── page.tsx
│   │   │   ├── reviews/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [reviewId]/
│   │   │   │       └── page.tsx
│   │   │   ├── subscription/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── success/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── cancel/
│   │   │   │       └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (admin)/                 # Admin route group
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── users/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [userId]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── trips/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── reviews/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── analytics/
│   │   │   │       └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── api/                     # API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   │   └── [userId]/
│   │   │   │       └── route.ts
│   │   │   ├── trips/
│   │   │   │   ├── route.ts
│   │   │   │   └── [tripId]/
│   │   │   │       └── route.ts
│   │   │   ├── reviews/
│   │   │   │   └── route.ts
│   │   │   ├── payment/
│   │   │   │   ├── create-checkout/
│   │   │   │   │   └── route.ts
│   │   │   │   └── webhook/
│   │   │   │       └── route.ts
│   │   │   └── upload/
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── loading.tsx              # Global loading
│   │   ├── error.tsx                # Global error
│   │   ├── not-found.tsx            # 404 page
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                  # React components
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── AuthProvider.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── ProfileEditForm.tsx
│   │   │   ├── InterestSelector.tsx
│   │   │   └── VisitedCountries.tsx
│   │   │
│   │   ├── trips/
│   │   │   ├── TripCard.tsx
│   │   │   ├── TripForm.tsx
│   │   │   ├── TripList.tsx
│   │   │   ├── TripDetails.tsx
│   │   │   ├── TripFilters.tsx
│   │   │   └── TripSkeleton.tsx
│   │   │
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SearchFilters.tsx
│   │   │   ├── SearchResults.tsx
│   │   │   └── DestinationAutocomplete.tsx
│   │   │
│   │   ├── reviews/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── ReviewList.tsx
│   │   │
│   │   ├── payment/
│   │   │   ├── SubscriptionPlans.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── CheckoutForm.tsx
│   │   │   └── PaymentStatus.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── UserTable.tsx
│   │   │   ├── TripModeration.tsx
│   │   │   ├── AnalyticsDashboard.tsx
│   │   │   └── AdminSidebar.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── ui/                      # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   │
│   │   └── shared/
│   │       ├── LoadingSpinner.tsx
│   │       ├── ErrorMessage.tsx
│   │       ├── EmptyState.tsx
│   │       ├── Modal.tsx
│   │       ├── Pagination.tsx
│   │       └── ImageUpload.tsx
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── auth.ts                  # NextAuth configuration
│   │   ├── db.ts                    # Database connection
│   │   ├── api.ts                   # API client
│   │   ├── cloudinary.ts            # Cloudinary config
│   │   ├── stripe.ts                # Stripe configuration
│   │   ├── utils.ts                 # Utility functions
│   │   └── validations.ts           # Zod schemas
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   ├── useInfiniteScroll.ts
│   │   ├── useMediaQuery.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── actions/                     # Server actions
│   │   ├── auth.actions.ts
│   │   ├── user.actions.ts
│   │   ├── trip.actions.ts
│   │   ├── review.actions.ts
│   │   └── payment.actions.ts
│   │
│   ├── store/                       # State management
│   │   ├── index.ts
│   │   ├── authStore.ts
│   │   ├── uiStore.ts
│   │   └── tripStore.ts
│   │
│   ├── types/                       # TypeScript types
│   │   ├── index.ts
│   │   ├── user.types.ts
│   │   ├── trip.types.ts
│   │   ├── review.types.ts
│   │   ├── payment.types.ts
│   │   └── next-auth.d.ts
│   │
│   ├── constants/                   # Constants
│   │   ├── index.ts
│   │   ├── routes.ts
│   │   └── config.ts
│   │
│   └── middleware.ts                # Next.js middleware
│
├── prisma/                          # Prisma schema (optional)
│   ├── schema.prisma
│   └── migrations/
│
├── .env.local                       # Local environment variables
├── .env.example                     # Environment template
├── .gitignore
├── next.config.js                   # Next.js configuration
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

````env
# API Configuration
NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api
NODE_ENV=development
JWT_SECRET=access_token



## 📜 Available Scripts

In the project directory, you can run:

### Development

```bash
npm run dev          # Start development server
npm run dev:host     # Start dev server with network access
````

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

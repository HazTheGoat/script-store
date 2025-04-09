# Script Store

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is an e-commerce platform for browsing and purchasing products like clothing, jewelry, and electronics.

## Architecture Overview

The project is built using modern web development tools and follows a modular architecture for scalability and maintainability. Below is an overview of the key components:

### 1. **Frontend Framework**
- **Next.js**: The project uses Next.js for server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). It provides a seamless developer experience with features like routing, API handling, and image optimization.

### 2. **State Management**
- **Zustand**: A lightweight state management library is used to manage global application state. The state is divided into slices for modularity:
  - `CartSlice`: Manages cart items and their quantities.
  - `DrawerSlice`: Handles the visibility of the cart drawer.
  - `FilterSlice`: Manages product category filters.
  - `SortSlice`: Handles sorting options for products.
  - `ThemeSlice`: Toggles between light and dark themes.

### 3. **UI Components**
- **Material-UI (MUI)**: The project uses Material-UI for building responsive and accessible UI components. Custom themes are created using MUI's theming capabilities.
- **Custom Components**: The project includes reusable components like `ProductCard`, `ProductDetails`, `Cart`, and `ThemeSwitcher`.

### 4. **Data Fetching**
- **React Query**: Used for fetching, caching, and managing server state. It simplifies API integration and improves performance with features like prefetching and caching.
- **Axios**: A promise-based HTTP client is used for making API requests to the [Fake Store API](https://fakestoreapi.com).

### 5. **Folder Structure**
The project follows a feature-based folder structure:
- `src/app`: Contains Next.js pages and global styles.
- `src/components`: Houses reusable UI and feature-specific components.
- `src/hooks`: Custom hooks for API integration and state management.
- `src/services`: API service functions for fetching data.
- `src/store`: Zustand slices for state management.
- `src/theme`: Custom MUI theme configuration.
- `src/types`: TypeScript types and enums.
- `src/utils`: Utility functions like currency formatting.

### 6. **Styling**
- **CSS Modules**: Scoped styles for components.
- **Global Styles**: Defined in `globals.css` for consistent theming.

### 7. **Testing**
- The project is set up for testing but does not currently include test cases. You can integrate tools like Jest and React Testing Library for unit and integration testing.

## AI Usage

This project does not currently use AI technologies. However, it can be extended to include AI-powered features such as:
- **Product Recommendations**: Using machine learning models to suggest products based on user behavior.
- **Chatbots**: Integrating AI chatbots for customer support.
- **Image Recognition**: Enabling users to search for products using images.

## Getting Started
To run the project locally, follow these steps:

1. Install dependencies:
npm install

2. Start the development server:
npm run dev


## Learn More
To learn more about the tools and technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Fake Store API](https://fakestoreapi.com)
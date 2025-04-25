# Recipe Finder App

A web application that allows users to search for recipes and view detailed information about them. The app fetches data from the [Spoonacular API](https://spoonacular.com/food-api) to display recipes, their ingredients, and other relevant information.

## Features

- Search for recipes by name.
- View detailed recipe information (ingredients, preparation time, servings, and recipe summary).
- View recipe images.
- Responsive design optimized for both mobile and desktop views.

## Architecture

This application is built using **Next.js** for server-side rendering and dynamic routing. It uses the Spoonacular API to fetch recipe data and display it to users. The app also makes use of **React** hooks (`useState`, `useEffect`) to manage state and side effects.

The main features of the app are:

- **Home Page**: A search bar to find recipes.
- **Recipe Details Page**: Displays detailed information about a recipe when selected.
- **Dynamic Routing**: Each recipe has its own page based on its unique ID.

## Technologies Used

- **Next.js** (React framework)
- **Tailwind CSS** (for styling)
- **Spoonacular API** (for recipe data)
- **SWR** (for data fetching and caching)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (LTS version recommended)
- **npm** or **yarn**

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/recipe-finder-app.git
   ```

2. Install dependencies:
   npm install
   or if you're using Yarn:
   yarn install
3. Set up environment variables:
   Add your Spoonacular API key in this .env.local
4. Run the development server:
   npm run dev
   or with Yarn:
   yarn dev
   The app should now be running on http://localhost:3000.

Building the Application

1. To build the app for production, run:
   npm run build
   This will create an optimized build of your app in the .next folder. After building, you can start the app in production mode:
   npm start

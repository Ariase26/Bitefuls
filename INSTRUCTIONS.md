## NextJS Exercise

In this activity, you will build a recipe application in Next.js that allows users to view all recipes, see the detail for individual recipes, and view the home page of the website.

## Overview

You will start by setting up a new Next.js project and creating a local JSON file with recipe data. You will then set up an API route to query the local JSON file and create a home page and recipe detail page.

Using React hooks such as `useState` and
`useEffect`, you will load the recipe data from the local JSON file and display it in your application. You will also style your application using CSS or a CSS framework such as Tailwind CSS.

By completing this activity, you will improve your skills in building Next.js applications, using React hooks to manage state, and styling web applications. You will also gain experience in creating and querying a local JSON file to provide data for your application.

## Activity Outline

# Recipe Application

A modern recipe application built with Next.js that allows users to browse and view detailed recipe information.

## Project Overview

This application provides a user-friendly interface for browsing recipes, viewing detailed recipe information, and accessing cooking instructions. Built with Next.js, it demonstrates the implementation of React hooks, state management, and modern styling practices.

## Features

- Browse a collection of recipes on the home page
- View detailed recipe information including ingredients and cooking instructions
- Responsive design for optimal viewing on all devices
- Clean and intuitive user interface

## Project Structure

```
recipe-app/
├── app/
│   ├── api/
│   │   └── recipes/
│   │       └── route.ts
│   ├── recipes/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   └── page.tsx
├── data/
│   └── recipes.json
├── components/
│   ├── RecipeCard.tsx
│   └── RecipeDetail.tsx
├── styles/
│   └── globals.css
└── package.json
```

## Implementation Details

### I. Project Setup

- Fork this codesandbox

### II. Data Structure

The `recipes.json` file contains an array of recipe objects with the following structure:

```json
{
  "id": "string",
  "name": "string",
  "ingredients": ["string"],
  "instructions": ["string"],
  "cookingTime": "string",
  "servings": "number",
  "image": "string"
}
```

### III. API Implementation

- Created a REST API endpoint at `/api/recipes`
- Implemented GET method to fetch recipe data
- Added query parameters for filtering and searching

### IV. Pages and Components

#### Home Page (`app/page.tsx`)

- Displays a grid of recipe cards
- Implements responsive layout
- Uses client-side data fetching with React hooks

#### Recipe Detail Page (`app/recipes/[id]/page.tsx`)

- Shows detailed recipe information
- Displays ingredients list and cooking instructions
- Implements dynamic routing based on recipe ID

#### Components

- `RecipeCard`: Displays recipe preview on the home page
- `RecipeDetail`: Renders detailed recipe information

### V. State Management

- Uses React's `useState` and `useEffect` hooks
- Implements client-side data fetching
- Manages loading and error states

### VI. Styling

- Implemented using Tailwind CSS
- Responsive design for all screen sizes
- Custom animations and transitions
- Consistent color scheme and typography

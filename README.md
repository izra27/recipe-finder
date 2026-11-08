# recipe-finder
A React-based recipe discovery application using TheMealDB API.
# RecipeFinder

A React-based recipe discovery application that allows users to search, explore, and save meals using TheMealDB public REST API.

RecipeFinder provides an interactive and responsive interface where users can discover different meals, browse recipes by category, view ingredients and cooking instructions, and save their favorite recipes for later.

## 1. Project Information

| Information | Details |
|---|---|
| Project Name | RecipeFinder |
| Project Type | Client-Side Single-Page Application (SPA) |
| Frontend Framework | React.js |
| Build Tool | Vite |
| Programming Language | JavaScript |
| Styling | CSS3 |
| Routing | React Router DOM |
| API | TheMealDB REST API |
| Browser Storage | LocalStorage |
| Version Control | Git and GitHub |

## 2. Project Objectives

The main objectives of RecipeFinder are to:

- Develop an interactive React-based web application.
- Retrieve and display recipe information from an external REST API.
- Demonstrate asynchronous data fetching using JavaScript `async/await` and `fetch()`.
- Apply reusable React components and state management.
- Implement client-side navigation using React Router.
- Store users' favorite recipes using browser LocalStorage.
- Provide a responsive and user-friendly interface.

## 3. External API Used

**TheMealDB API**

RecipeFinder uses TheMealDB, a public recipe database API that provides meal information, ingredients, categories, images, and cooking instructions.

API Resources:

- Official Website: https://www.themealdb.com/
- API Documentation: https://www.themealdb.com/api.php
- API Guide: https://www.themealdb.com/docs_api_guide.php

### API Endpoints Used

| Endpoint | Purpose |
|---|---|
| `search.php?s=` | Search meals by name |
| `search.php?f=` | Retrieve meals by first letter |
| `categories.php` | Retrieve available meal categories |
| `filter.php?c=` | Filter meals by category |
| `lookup.php?i=` | Retrieve complete recipe details |
| `random.php` | Retrieve a random meal |

The application uses TheMealDB's free test API key (`1`) for educational development. No paid subscription is required.

## 4. Main Features

### 4.1 Recipe Search
Users can search for recipes by entering a meal name.

### 4.2 Category Filtering
Users can browse meals based on available categories.

### 4.3 Recipe Details
Users can view complete information about a selected recipe, including:
- Recipe image
- Meal name
- Category
- Cuisine or area
- Ingredients and measurements
- Cooking instructions
- YouTube cooking tutorial link when available

### 4.4 Favorites
Users can add recipes to their favorites and remove them whenever they want.

### 4.5 LocalStorage
Favorite recipes are stored in the browser's LocalStorage so they remain available after refreshing the page.

### 4.6 Pagination
Recipe results are divided into pages to make browsing easier.

### 4.7 Loading and Error Handling
The application displays loading indicators while retrieving data and helpful messages when API requests fail or no results are found.

### 4.8 Responsive Interface
The interface is designed to adapt to desktop, tablet, and mobile screen sizes.

## 5. Application Routes

| Route | Description |
|---|---|
| `/` | Main page for browsing, searching, and filtering recipes |
| `/recipe/:id` | Displays complete information about a selected recipe |
| `/favorites` | Displays saved favorite recipes |

## 6. Technologies Used

- **React.js** – Builds the user interface using reusable components.
- **Vite** – Provides the development environment and build tools.
- **JavaScript (ES6+)** – Handles application logic and API requests.
- **HTML5** – Provides the application structure.
- **CSS3** – Handles styling and responsive layouts.
- **React Router DOM** – Manages client-side navigation.
- **Fetch API** – Retrieves information from TheMealDB.
- **LocalStorage** – Stores favorite recipes in the browser.
- **Git and GitHub** – Manage project versions and collaboration.

## 7. Installation and Setup

### Prerequisites

Make sure the following are installed:
- Node.js
- npm
- Git
- Visual Studio Code or another code editor
- A modern web browser

### Step 1: Clone the Repository

```bash
git clone https://github.com/izra27/recipe-finder.git
```

### Step 2: Navigate to the Project Folder

```bash
cd recipe-finder
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory of the project.

Add the following configuration:

```env
VITE_MEALDB_API_KEY=1
```

The value `1` is the free TheMealDB test API key used for educational development.

An example environment configuration is also provided in `.env.example`.

### Step 5: Run the Development Server

```bash
npm run dev
```

### Step 6: Open the Application

Visit the local development URL displayed in your terminal. The default Vite address is:

```text
http://localhost:5173/
```

## 8. Project Folder Structure

```text
recipe-finder/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CategoryFilter.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── Pagination.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeGrid.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── RecipeDetails.jsx
│   │
│   ├── services/
│   │   └── mealdb.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 9. Team Members and Assigned Responsibilities

### Member 1: izra27

Assigned responsibilities:
- Initial React and Vite project setup
- TheMealDB API integration
- Recipe search functionality
- Category filtering
- Recipe details and API data handling
- API error handling

### Member 2: Lico

Assigned responsibilities:
- User interface and user experience design
- Reusable component design
- Favorites functionality
- LocalStorage implementation
- Pagination functionality
- Responsive interface styling

### Shared Responsibilities

- Application testing
- Feature integration
- Project documentation
- Final project preparation and presentation

## 10. Git and GitHub Collaboration

Git and GitHub are used to manage project versions and organize development changes.

The project follows a feature-branch workflow. Development changes are made on dedicated branches and submitted through Pull Requests before being merged into the `main` branch.

### Example Feature Branches

- `feature/project-setup`
- `feature/api-integration`
- `feature/recipe-search`
- `feature/category-filter`
- `feature/recipe-details`
- `feature/favorites`
- `feature/pagination`
- `feature/ui-design`
- `docs/project-readme`

### Commit Message Conventions

| Prefix | Purpose |
|---|---|
| `feat:` | New functionality |
| `fix:` | Bug fixes |
| `style:` | Styling changes |
| `docs:` | Documentation updates |

## 11. Expected Project Outcome

RecipeFinder demonstrates the practical application of React development concepts, including reusable components, state management, asynchronous data fetching, REST API integration, client-side routing, and browser storage.

Through this project, users can conveniently discover recipes, explore meal information, and manage their favorite meals through an interactive web application.
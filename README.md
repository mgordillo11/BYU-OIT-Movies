# Movie Search Application

## Overview

This application allows users to search for movies by title. It uses a Vue.js/Nuxt.js front-end (`webapp`) and a Node.js/Express back-end (`webservice`), with movie data provided by The Movie Database (TMDB) API.

## Features

- Search for movies by title
- Display movie titles, posters, and popularity summaries

## Getting Started

### Prerequisites

- NPM (Node Package Manager) which allows you to install Node.js packages seamlessly
- Bun JS which is a run time environment that uses Node.js (https://bun.sh/docs/installation)

### Setting Up the Project

1. Clone the repository:
   ```bash
   git clone [repository URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd [project directory]
   ```

## Configuration

1. For simplicity sakes, I already provided my Access Token for TMDB API in the .env file. However, I know this is not a good practice but wanted to make it easier for you to test the application. If you want to use yours just switch out the value of the TMDB_ACCESS_TOKEN variable in the .env file located in the webservice directory.

### Running the Back-End (webservice)

1. Navigate to the `webservice` directory:
   ```bash
   cd webservice
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the server:

   ```bash
   bun run start
   ```

4. The server will be running at `http://localhost:3001`

### Running the Front-End (webapp)

1. Open a new terminal and navigate to the `webapp` directory:
   ```bash
   cd webapp
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the Nuxt.js application:
   ```bash
   bun run dev
   ```
4. The application will be running at `http://localhost:3000` (or the next available port if 8000 is in use).

## Future Enhancements

- Implement pagination and or infinite scrolling for displaying search results
- Add advanced search filters (e.g., by genre, year, actor, director)
- Enhance the UI/UX design for a more engaging user experience
- Include a movie details page with more information about the movie

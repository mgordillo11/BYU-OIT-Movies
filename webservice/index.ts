import express, { type Request, type Response } from "express";
import cors from "cors";
import type { Movie } from "../types";

require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 3001;
const TMDB_BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Function to format movie data
const moviesResponseFormat = (movie: any) => ({
  movie_id: movie.id,
  title: movie.title,
  poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  popularity_summary: `${movie.popularity} out of ${movie.vote_count}`,
  release_date: movie.release_date,
  overview: movie.overview,
});

app.get("/movies/popular", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
      },
    });

    const data = (await response.json()) as { results: Movie[] };
    const movies = data.results.slice(0, 10).map(moviesResponseFormat);

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching popular movies");
  }
});

app.get("/movies/search", async (req, res) => {
  try {
    const searchQuery: string | undefined = req.query.search as string;

    if (!searchQuery) {
      return res.status(400).send("Search query is required");
    }

    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?query=${searchQuery}&include_adult=false&language=en-US&region=US&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = (await response.json()) as { results: Movie[] };
    const movies = data.results
      .slice(0, 10)
      .map(moviesResponseFormat)
      .filter((movie) => {
        // Check if all three criteria are true
        return movie.poster_image_url && movie.release_date && movie.overview;
      });

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while searching for movies");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

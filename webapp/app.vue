<template>
  <div class="container mx-auto p-4">
    <SearchBar class="" @search="fetchMovies" />

    <div
      v-if="movies"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20"
    >
      <MovieCard v-for="movie in movies" :key="movie.movie_id" :movie="movie" />
    </div>

    <!-- <PaginationButtons class="items-center justify-center" /> Ran out of time-->
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./components/MovieCard.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    MovieCard,
    SearchBar,
  },
  data() {
    return {
      movies: null,
    };
  },
  methods: {
    async fetchMovies(searchQuery) {
      try {
        const response = await axios.get(
          `http://localhost:3001/movies/search`,
          {
            params: {
              search: searchQuery,
            },
          }
        );

        this.movies = response.data;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    },
  },
};
</script>

<template>
  <div>
    <div
      class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto h-full"
    >
      <div class="w-2 bg-gray-800"></div>

      <div
        class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white"
        :data-movie-id="movie.movie_id"
      >
        <div
          class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"
        ></div>
        <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
          <div class="h-32"></div>
          <div class="space-y-6">
            <div
              class="flex flex-col justify-center items-center space-y-2 inner"
            >
              <h3 class="text-2xl font-bold text-white">
                {{ movie.title }}
              </h3>
            </div>
            <div class="flex flex-row justify-center">
              <div class="flex flex-col">
                <div class="release">{{ movie.release_date }}</div>
                <div class="text-sm text-gray-400">Release date:</div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-col"></div>
              <div class="text-xs text-gray-400 mb-2">Overview:</div>
              <p class="text-xs text-gray-100 mb-6">
                {{ movie.overview }}
              </p>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
          >
            {{ movie.popularity_summary }}
          </div>
        </div>
        <img
          class="absolute inset-0 transform w-full -translate-y-4"
          :src="movie.poster_image_url"
          alt="Movie Poster"
          style="filter: grayscale(0)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

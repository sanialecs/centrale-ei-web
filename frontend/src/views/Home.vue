<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Your Vue.js App</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
    <div v-for="movie in movies">
      {{ movie.title }}, {{ movie.release_date }}
    </div>
    <h2> Essai Component </h2>
    <Movie v-for="movie in movies" :movie="movie" />
    <h2>Input</h2>
    <input type="text" v-model="movieName" placeholder="nom du film" />
    <span>Film: {{ movieName }}</span>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank">router</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank">vuex</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Movie from '@/components/Movie.vue';
import Movie1 from '@/components/Movie.vue';
import Movie2 from '@/components/Movie.vue';

export default {
  name: "Home",
  components: {
    Movie
  },
  data: function () {
    return {
      movieName: ""
    };
  },
  data: function () {
    return {
      movies: []
    };
  },
  methods: {
    fetchMovies: function () {
      axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0")
        .then((response) => {
          this.movies = response.data.results;
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchMovies();
  },
  components: { Movie, Movie1, Movie2 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
    <ul>
        {{ movie.title }}, {{ movie.release_date }}
        <img :src="'https://www.themoviedb.org/t/p/original' + movie.poster_path" />
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: "Movie",
    props: {
        movie: Array
    }
}
</script>
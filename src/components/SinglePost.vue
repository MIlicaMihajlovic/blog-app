<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>

import { posts } from '../service/posts.js' 

export default {

    data() {
        return {
            post: {
                title: '',
                text: ''
            }
        }
    },

    created() {
        posts.get(this.$route.params.id)  //ovde smo prosledili id iz servisa
            .then(response => {
                this.post = response.data
            })
    }
    
}
</script>


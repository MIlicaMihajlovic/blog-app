<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="(post, index) in posts" :key="index">
                {{ post.title }}
                <button @click="navigateToPost(post.id)" type="button" class="btn btn-light">View post</button>
            </li>
        </ul>
        
    </div>
</template>

<script>

import { posts } from '../service/posts.js'
import SinglePost from './SinglePost.vue'

export default {
    
    data() {
        return {
            posts: []
        }
    },

    created() {
        posts.getAll()
            .then(response => {
                this.posts = response.data
            })
    },

    methods: {
        navigateToPost(id) {
            this.$router.push({ path: `posts/${id}`}); //ovde smo pomocu ove metode redirektovali na post id
        }
    }
    
}
</script>


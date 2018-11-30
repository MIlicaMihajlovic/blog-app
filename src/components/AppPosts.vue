<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="(post, index) in posts" :key="index">
                {{ post.title }}
            </li>
        </ul>
        
    </div>
</template>

<script>

import { posts } from '../service/posts.js'

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
    }
    
}
</script>


<template>
    <div>
        <form @submit.prevent="addPost">
            <div class="form-group">
                <label>Title</label>
                <input v-model="newPost.title" type="text" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label>Post</label>
                <textarea v-model="newPost.text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

import { posts } from '../service/posts.js'

export default {
    data() {
        return {
            newPost: {title: '', text: ''}
        }
    },

    methods: {
        addPost() {
            posts.add(this.newPost)
                .then(() => {
                    this.$router.push({path: `/posts`})
                    this.newPost = {}
                });
        }
    }
    
}
</script>


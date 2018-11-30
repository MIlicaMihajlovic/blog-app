<template>
    <div>
        <form @submit.prevent="addPost">
            <div class="form-group">
                <label>Title</label>
                <input v-model="newPost.title" type="text" class="form-control" placeholder="Enter title" minlength="2" required>
            </div>
            <div class="form-group">
                <label>Post</label>
                <textarea v-model="newPost.text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text" maxlength="300" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button @click="reset" type="button" class="btn btn-secondary">Reset</button>
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
                    this.$router.push({path: '/posts'})
                    this.newPost = {}
                });
        },

        reset() {
            this.newPost = {}
        }
    }
    
}
</script>


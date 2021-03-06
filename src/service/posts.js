import axios from 'axios';

class Posts {
    constructor() {
        axios.defaults.baseURL='http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts');
    }

    get(id) {
        return axios.get(`posts/${id}`);
        //dovlacimo id sa rute
    }

    add(post) {
        return axios.post('posts', post)
    }

    edit(id, post) {
        return axios.put(`posts/${id}`, post)
    }

}

export const posts = new Posts();
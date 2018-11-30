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

}

export const posts = new Posts();
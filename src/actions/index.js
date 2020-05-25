import axios from 'axios';
import { AT_POSTS } from './action-types';
const END_POINT = 'http://localhost:3000'

export function readAllPost() {
    //console.log('read all')
    return function (dispatch){
        axios.get(`${END_POINT}/posts`).then(axiosResponse => {
            dispatch({type: AT_POSTS.READ_ALL, payload: axiosResponse.data})
        }).catch(e => {
            //console.log('error : ', e)
            dispatch({type: AT_POSTS.READ_ALL, payload: [{id: 0, title: 'Server KO', content: 'faire un json-server --watch fillDB.js', author: 'P@ckDev'}]})
        })
    }
}

export function readPost(id) {
    return function (dispatch){
        axios.get(`${END_POINT}/posts/${id}`).then(axiosResponse => {
            dispatch({type: AT_POSTS.READ, payload: axiosResponse.data});
            //console.log(axiosResponse.data);
        }).catch(e => {
            dispatch({type: AT_POSTS.READ, payload: {id: 0, title: 'Server KO', content: 'faire un json-server --watch fillDB.js', author: 'P@ckDev'}})
        })
    }
}

export function deletePost(id) {
    return function (dispatch){
        axios.delete(`${END_POINT}/posts/${id}`).then(axiosResponse => {
            dispatch({type: AT_POSTS.DELETE, payload: id})
        }).catch(e => {
            console.log('Commande à exécuter : json-server --watch fillDB.js');
        })
    }
}

export function createPost(post) {
    return function (dispatch){
        axios.post(`${END_POINT}/posts`,
        {
            title: post.title,
            content: post.description,
            author: post.author
        }).then(response => {
            dispatch({type: AT_POSTS.CREATE, payload: response.data})
        });
    }
}
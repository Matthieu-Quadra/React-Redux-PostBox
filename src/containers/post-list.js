import React, { Component } from 'react';
import PostListItem from '../components/post-list-item';
import { connect } from 'react-redux';
import { readAllPost, deletePost } from '../actions/index';
import { Link } from 'react-router'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayOnluMines: false
        }
    }
    componentWillMount() {
        //console.log('Will mount')
        this.props.readAllPost();
    }
    callBackDeletePost(post) {
        this.props.deletePost(post.id);
    }
    filterPosts(postsList) {
        console.log('filtre')
        return postsList.filter((post) => {
            if (post.author == 'Moi') {
                return true;
            } else {
                return false;
            }
        })
    }
    renderPostList() {
        const {postsList} = this.props
        let arrayPosts = postsList;
        console.log(this.state.displayOnluMines)
        if (this.state.displayOnluMines) {
            arrayPosts = this.filterPosts(postsList);
        }
        console.log(postsList)
        if (arrayPosts) {
            return arrayPosts.map(post => {
            return <PostListItem key={post.id} post={post} callBackDeletePost={(post) => this.callBackDeletePost(post)}/>
        })
        }
    }
    render() {
        //console.log(this.props.postsList)
        return (
            <div>
                <h1>Liste des Posts</h1>
                <input type="checkbox" onChange={(e) => this.setState({displayOnluMines: e.target.checked})} /> Afficher mes posts
                <div className='btn_add'>
                    <Link to={'post-form'}>
                        <button className='btn btn-primary btn-circle btn-lg'>+</button>
                    </Link>
                </div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Titre du post</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.renderPostList()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = {
    readAllPost,
    deletePost
}

const mapStateToProps = state => {
    return {
        postsList : state.postsListReducer
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
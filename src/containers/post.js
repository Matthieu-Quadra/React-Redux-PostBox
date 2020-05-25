import React, { Component } from 'react';
import PostContent from '../components/post-content';
import { connect } from 'react-redux';
import { readPost } from '../actions/index'

class Post extends Component {
    componentWillMount(){
        this.props.readPost(this.props.params.id);
    }
    render() {
        return (
            <div>
                Post numéro {this.props.params.id}
                <PostContent postToDisplay={this.props.post}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    readPost
}
const mapStateToProps = state => {
    return {
        post: state.postReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
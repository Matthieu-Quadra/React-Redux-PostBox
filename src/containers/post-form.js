import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const formPostConfig = {
    form: 'createPostForm',
    fields: ['title', 'description', 'author'],
    validate: validateForm,
    initialValues: {author: 'Moi'}
}
class PostForm extends Component {
    render() {
        const {fields: {title, description, author}, handleSubmit, errors} = this.props;
        //console.log(this.props)
        //console.log(fields);
        return (
            <div>
                <p>Formulaire de saisie</p>
                <form onSubmit={handleSubmit(this.postToCreate.bind(this))}>
                    <div className={`form-group ${title.touched && errors.title ? 'has-danger' : ''}`}>
                        <label>Titre</label>
                        <input className='form-control' type='text' {...title}></input>
                        <div className={`${title.touched && errors.title ? 'textRouge' : ''}`}>{title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${description.touched && errors.description ? 'has-danger' : ''}`}>
                        <label>Description</label>
                        <input className='form-control' type='textarea' {...description}></input>
                        <div className={`${description.touched && errors.description ? 'textRouge' : ''}`}>{description.touched && errors.description}</div>
                    </div>
                    <div className={`form-group ${author.touched && errors.author ? 'has-danger' : ''}`}>
                        <label>Auteur</label>
                        <input className='form-control' type='text' {...author}></input>
                        <div className={`${author.touched && errors.author ? 'textRouge' : ''}`}>{author.touched && errors.author}</div>
                    </div>
                    <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                        <button type='submit' className='btn btn-primary' disabled={this.props.invalid}>Créer</button>
                </form>
            </div>
        )
    }
    postToCreate(post) {
        this.props.createPost(post);
        browserHistory.push('/');
    }
}

function validateForm(value) {
    const errors = {};
    //console.log(Object.keys(value));
    Object.keys(value).map(index => {
        if (!value[index]) {
            errors[index] = 'Remplir le champ';
        }
        return errors;
    })
    //console.log(errors)
    return errors;
}
const mapDispatchToProps = {
    createPost
}

export default connect(undefined,mapDispatchToProps)(reduxForm(formPostConfig)(PostForm));
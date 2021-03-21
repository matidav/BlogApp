import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import Post from './Post'

const Posts = ({ dispatchAddPost, posts }) => {
  const [title, titleSetter] = useState('')
  const [imgURL, imgURLSetter] = useState('')
  const [dsc, dscSetter] = useState('')
  const [editMode, editModeSetter] = useState(false)
  const [counter, counterSetter] = useState(1)
  return (
    <>
      <div className = 'd-grid gap-2'>
        <button className = 'add-post-btn btn btn-info' onClick = {() => editModeSetter( true )}> Add Post </button>
      </div>
      { (editMode) ?
        <div className = 'mb-3'>
          <label className = 'form-label'> Title </label>
          <textarea className = 'form-control' onChange = {e => titleSetter( e.target.value )}/>
          <label className = 'form-label'> Image URL </label>
          <input className = 'form-control' onChange = {e => imgURLSetter( e.target.value )}/>
          <label className = 'form-label'> Description </label>
          <textarea className = 'form-control' onChange = {e => dscSetter( e.target.value )}/>
          <button className = 'btn btn-danger' onClick = {() => editModeSetter( false )}> Cancel </button>
          <button className = 'btn btn-success' onClick = {() => {
            counterSetter(counter+1)
            dispatchAddPost(counter, title, imgURL, dsc)
            editModeSetter(false)
          }}> Post </button>
        </div> : ''
      }
      <div className = 'container'>
        {posts.map(post => <Post num = {post.idn} key = {post.idn} imageUrl = {post.img} title = {post.title} description = {post.description}/>)}
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ( counter, title, imgURL, dsc ) => dispatch( addPost( counter, title, imgURL, dsc ) )
})

const mapStateToProps = state => ({
  posts: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions'

const Post = ({ num, imageUrl, title, description, dispatchDeletePost }) => {
  const [imgUrl, imgUrlSetter] = useState( imageUrl )
  let imgURL = imgUrl
  const [tit, titSetter] = useState( title )
  let titl = tit
  const[descript, descriptSetter] = useState( description )
  let dscrpt = descript
  const[editMode, editModeSetter] = useState( false )
  return (
    <div className = 'post'> 
      { (editMode) ?
        <>
          <label>Title</label>
          <textarea defaultValue = {tit} onChange = {e => titl = e.target.value} />
          <label>Image URL</label>
          <textarea defaultValue = {imgUrl} onChange = {e => imgURL = e.target.value}></textarea>
          <label>Description</label>
          <textarea defaultValue = {descript} onChange = {e => dscrpt = e.target.value}></textarea>
          <button className = 'btn btn-outline-warning' onClick = {() => editModeSetter( false )}> Cancel </button>
          <button className= 'btn btn-outline-success' onClick = {() => {
            imgUrlSetter(imgURL)
            titSetter(titl)
            descriptSetter(dscrpt)
            editModeSetter(false)
          }}> Save </button>
          <div className ="d-grid gap-2">
            <button className = 'btn btn-outline-danger' onClick = {() => {  
              dispatchDeletePost( num )
            }}> Delete </button>
          </div>
        </> :
        <>
          <img className = 'post-img' src = {imgUrl}/>
          <div className = 'postNum'> Post {num}: {tit} </div>
          <div>{descript}</div>
          <button className = 'btn btn-outline-primary' onClick = {() => editModeSetter( true )}> Edit Post </button>
        </>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchDeletePost: idn => dispatch( deletePost( idn ) )
})

export default (connect(null, mapDispatchToProps))(Post)
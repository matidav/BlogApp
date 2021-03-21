import React, { useState } from 'react'
import { connect } from 'react-redux'
import { profDescription } from '../actions'

const Profile = ({ dispatchProfDescription, descript }) => {
  const [editMode, editModeSetter] = useState(false)
  const [desc, descSetter] = useState('')
  const [img, imgSetter] = useState('')
  return ( 
    <div className = 'profile'>
      <h1 className = 'title'>Hey, this is me!!</h1>
      <button type = 'button' className = 'right btn btn-primary' onClick = {() => editModeSetter(true)}> Edit Profile </button>
      { (editMode) ?
        <>
          <div className = 'mb-3'>
            <label className = 'form-label'> Image URL </label>
            <textarea className = 'form-control' defaultValue = {img} onChange = {e => imgSetter( e.target.value )}/>
            <label className = 'form-label'> Description </label>
            <textarea  className = 'form-control' defaultValue = {desc} onChange = {e => descSetter( e.target.value )}/>
            <button className = 'btn btn-danger' onClick = {() => editModeSetter(false)}> Cancel </button>
            <button className = 'btn btn-success' onClick = {() => {
              dispatchProfDescription(img, desc)    
              editModeSetter(false)
            }}> Save </button>
          </div>
        </> :
        <>
          <div className = 'prof-image-container'>
            <img className = 'prof-image'src = {descript.img} />
          </div>
          <div className = 'prof-text'> {descript.text} </div>
        </>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchProfDescription: (img, text) => dispatch(profDescription( img, text ))
})

const mapStateToProps = state => ({
  descript: state.profDescription
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
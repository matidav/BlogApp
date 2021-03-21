let counter = 0

export const profDescription = (img, text) => ({
  type: 'PROF_DESCRIPTION',
  id: counter++,
  img,
  text
})

export const addPost = (idn, title, img, description) => ({
  type: 'ADD_POST',
  id: counter++,
  idn,
  title,
  img,
  description
})

export const deletePost = (idn) => ({
  type: 'DELETE_POST',
  id: counter++,
  idn
})

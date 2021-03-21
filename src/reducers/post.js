const defaultState = []

const post = (state = defaultState, action) => {
  const{type, id, idn, title, img, description } = action
  switch(type){ 
    case 'ADD_POST':
      return [...state, {id, idn, title, img, description}]
    case 'DELETE_POST':
      let newArray = []
      state.map( post => {if (!(post.idn == idn)) { newArray.push(post) }})
      return newArray
    default:
      return state
  } 
}

export default post
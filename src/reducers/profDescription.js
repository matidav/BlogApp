const defaultState = ''

const profDescription = (state = defaultState, action) => {
  const {
    type, id, img, text,
  } = action
  switch (type) {
    case 'PROF_DESCRIPTION':
      return { id, img, text }
    default:
      return state
  }
}

export default profDescription

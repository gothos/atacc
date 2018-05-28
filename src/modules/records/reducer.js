import {REMOVE_RECORD} from './constants'
import data from '../../assets/json/data.json'


const initialState = {
  data: data,
}


const records = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_RECORD:
      return {
          ...state,
          data: state.data.filter((data, i) => data.data["Identification number"] !== action.id)
      }
    default:
      return state
  }
}

export default records

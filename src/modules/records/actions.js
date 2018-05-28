import {REMOVE_RECORD} from './constants'

export const removeRecord = id => {
  return {
    type: REMOVE_RECORD,
    id: id,
  }
}

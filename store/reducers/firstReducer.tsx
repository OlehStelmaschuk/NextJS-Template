import * as TYPE from '../constants/first'
import { PayloadAction } from '@reduxjs/toolkit'

export const firstReducer = (
  state = { loading: false },
  { type, payload }: PayloadAction
) => {
  switch (type) {
    case TYPE.FIRST:
      return { ...state, loading: payload }
    default:
      return state
  }
}

import { createReducer } from '@reduxjs/toolkit'

import {
  addWeatherAction,
  startFetchingAction,
  errorFetchAction,
} from '@/actions'

const initialState = {
  isFetching: true,
  error: null,
  today: [],
  nextDays: [],
}

const weatherReducer = createReducer(
  initialState,
  builder => {
    builder.addCase(addWeatherAction, (state, action) => {
      return {
        ...state,
        isFetching: false,
        today: action.payload.today,
        nextDays: action.payload.nextDays,
      }
    })

    builder.addCase(startFetchingAction, state => {
      return {
        ...state,
        isFetching: true,
      }
    })

    builder.addCase(errorFetchAction, (state, action) => {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    })
  },
)

export default weatherReducer

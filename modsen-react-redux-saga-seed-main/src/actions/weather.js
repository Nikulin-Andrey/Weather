import { createAction } from '@reduxjs/toolkit'

import {
  ADD_WEATHER_ACTION_TYPE,
  START_FETCHING_ACTION_TYPE,
  ERROR_FETCH_ACTION_TYPE,
} from '@/constants'

export const addWeatherAction = createAction(
  ADD_WEATHER_ACTION_TYPE,
)

export const startFetchingAction = createAction(
  START_FETCHING_ACTION_TYPE,
)

export const errorFetchAction = createAction(
  ERROR_FETCH_ACTION_TYPE,
)

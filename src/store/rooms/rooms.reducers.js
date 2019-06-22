import { FETCH_ROOMS_START, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAILED } from './rooms.actiontypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROOMS_START:
      return { ...state };

    case FETCH_ROOMS_SUCCESS:
      return { ...state };

    case FETCH_ROOMS_FAILED:
      return { ...state };
    default:
      return state;
  }
};

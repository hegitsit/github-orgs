import {
  GET_COMPANY,
  GET_ORGANIZATIONS
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload
      };

    case GET_COMPANY:
      return {
        ...state,
        company: action.payload
      };

    default:
      return state;
  }
}
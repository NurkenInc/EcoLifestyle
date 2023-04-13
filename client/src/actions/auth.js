import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    Promise.resolve('Success')
  } catch (error) {
    return Promise.reject(error.response.data.message)
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    
    dispatch({ type: AUTH, data });

    Promise.resolve('Success')
  } catch (error) {
    return Promise.reject(error.response.data.message)
  }
}
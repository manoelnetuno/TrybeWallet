import { Logintype } from '../../types/types';

export const LOGIN_DATA = 'LOGIN_DATA';

export const updateLogiData = (email:Logintype) => ({
  type: LOGIN_DATA,
  payload: email.email,
});

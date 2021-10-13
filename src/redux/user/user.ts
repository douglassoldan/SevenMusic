import {createAction, createReducer, Middleware} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {RootState} from '../index';
import {setRunning} from '../state/appState';
import {Alert} from 'react-native';

type LoginState = 'init' | 'loading' | 'denied' | 'loggedOut';

type UserState = {
  login: boolean;
  loginState?: LoginState;
  email?: string;
  newUser?: boolean;
  message?: string;
};

const initialState: UserState = {
  login: false,
  loginState: 'init',
};

export const setLogin = createAction(
  '[USER] Set Login',
  (email: string, newUser: boolean) => ({
    payload: {
      email,
      newUser,
    },
  }),
);

export const resetLogin = createAction('[USER] Reset Login');

export const setLogout = createAction(
  '[USER] Set Logout',
  (loginState?: LoginState, message?: string) => ({
    payload: {
      loginState,
      message,
    },
  }),
);

export const attemptLogin = createAction(
  '[USER] attempt Login',
  (email: string, password: string) => ({
    payload: {
      email,
      password,
    },
  }),
);

export const attemptRegister = createAction(
  '[USER] attempt Register',
  (email: string, password: string) => ({
    payload: {
      email,
      password,
    },
  }),
);

export const selectLogin = (state: RootState): boolean => state.user.login;
export const selectLoginState = (state: RootState): string | undefined =>
  state.user.loginState;
export const selectIsSubmitting = (state: RootState): boolean =>
  state.user.loginState === 'loading';
export const selectLoginMessage = (state: RootState): string | undefined =>
  state.user.message;

export const userMiddleware: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    next(action);

    if (attemptLogin.match(action)) {
      const {email, password} = action.payload;

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(setLogin(email, false));
        })
        .catch(error => dispatch(setLogout('denied', error.message)));
    }

    if (attemptRegister.match(action)) {
      const {email, password} = action.payload;

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Conta criada, efetue o login!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Este e-mail já está em uso!');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Este e-mail é inválido!');
          }
          Alert.alert(error);
        });
    }

    if (setLogout.match(action)) {
      dispatch(setRunning(false));
    }
  };

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(attemptLogin, state => ({
      ...state,
      loginState: 'loading',
      message: 'loading',
    }))
    .addCase(attemptRegister, state => ({
      ...state,
      loginState: 'loading',
      message: 'loading',
    }))
    .addCase(resetLogin, state => ({
      ...state,
      loginState: 'init',
      message: undefined,
    }))
    .addCase(setLogin, (state, action) => {
      const {email, newUser} = action.payload;
      return {
        login: true,
        email,
        newUser,
      };
    })
    .addCase(setLogout, (state, action) => {
      const {loginState = 'loggedOut', message} = action.payload;
      return {
        login: false,
        loginState,
        message,
      };
    });
});

export default userReducer;

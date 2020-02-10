import { WELCOME_ACTION_PRESSED } from './types';

export const welcomeAction = (data) => {
  return {
    type: WELCOME_ACTION_PRESSED,
    payload: data
  }
}

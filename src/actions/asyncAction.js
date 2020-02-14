import { FETCH_TODO } from './types';

export const asyncAction = () => {
  return dispatch => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({
          type:FETCH_TODO,
          payload: json
        })

      })

  }
  /*return {
    type: FETCH_TODO,
    payload: data
  }*/

}

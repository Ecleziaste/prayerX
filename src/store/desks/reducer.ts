import {createReducer} from '@reduxjs/toolkit';
import {DeskType} from '../Types';
import {changeTitle} from './actions';

const initialState: Array<DeskType> = [
  {title: 'To Do', id: '1'},
  {title: 'In Progress', id: '2'},
  {title: 'Completed', id: '3'},
];

export const desksReducer = createReducer(initialState, builder => {
  // builder.addCase(changeTitle, (state, action) => {
  //   state.map(column => {
  //     if (column.id === action.payload.id) {
  //       column.title = action.payload.newText;
  //     }
  //     return state;
  //   });
  // });
});

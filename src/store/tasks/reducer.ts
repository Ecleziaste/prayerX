import {createReducer} from '@reduxjs/toolkit';
import {TaskType} from '../types';
import {changeTitle} from './actions';

const initialState: Array<TaskType> = [
  {
    id: '1',
    deskId: '1',
    title: 'Task title',
    users: 2,
    prayers: 47,
    answered: false,
    subscribed: true,
  },
  {
    id: '2',
    deskId: '1',
    title: 'Task',
    users: 0,
    prayers: 21,
    answered: true,
    subscribed: true,
  },
  {
    id: '3',
    deskId: '1',
    title: 'TiTask',
    users: 4,
    prayers: 63,
    answered: false,
    subscribed: true,
  },
  {
    id: '4',
    deskId: '1',
    title: 'Taaaa',
    users: 3,
    prayers: 32,
    answered: true,
    subscribed: false,
  },
  {
    id: '5',
    deskId: '1',
    title: 'Tasdasd',
    users: 5,
    prayers: 81,
    answered: false,
    subscribed: false,
  },
  {
    id: '6',
    deskId: '1',
    title: 'T123',
    users: 0,
    prayers: 7,
    answered: true,
    subscribed: false,
  },
  {
    id: '7',
    deskId: '1',
    title: 'Tqwe',
    users: 1,
    prayers: 15,
    answered: true,
    subscribed: true,
  },
];

export const tasksReducer = createReducer(initialState, builder => {
  // builder.addCase(changeTitle, (state, action) => {
  //   state.map(column => {
  //     if (column.id === action.payload.id) {
  //       column.title = action.payload.newText;
  //     }
  //     return state;
  //   });
  // });
});

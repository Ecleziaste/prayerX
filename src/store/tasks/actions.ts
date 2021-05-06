import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types';

export const changeTitle = createAction<ActionType>('tasks/change');

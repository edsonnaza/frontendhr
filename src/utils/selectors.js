// selectors.js

import { createSelector } from 'reselect';

export const getUser = state => state.user;

export const getFirstUser = createSelector(
  [getUser],
  user => user && user[0] ? user[0] : {} 
);

export default {getFirstUser};
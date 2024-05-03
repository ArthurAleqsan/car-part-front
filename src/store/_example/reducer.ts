import { createReducer } from 'deox';
import produce from 'immer';
import { _exampleAction } from './actions';
import { _exampleState } from './types';

const initialState: _exampleState = {
  loading: false,
  token: '',
  refresh: '',
};

export const _exampleReducer = createReducer(initialState, (handle) => [
  handle(_exampleAction.request, (state) =>
    produce(state, (draft) => {
      draft.loading = true;
    })
  ),
  handle(_exampleAction.success, (state) =>
    produce(state, (draft) => {
      draft.loading = false;
    })
  ),
]);

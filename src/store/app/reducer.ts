import { createReducer } from 'deox';
import produce from 'immer';
import {
  setActiveCols,
  setActiveTemplate,
  setAppEnums,
  setFiltersSectionHeight,
  setMissionTemplates,
  setTZ,
} from './actions';
import { appState } from './types';

export const appInitialState: appState = {
  tz: localStorage.getItem('tz')
    ? JSON.parse(localStorage.getItem('tz') as any).value
    : Intl.DateTimeFormat().resolvedOptions().timeZone,
  activeCols: {},
  activeTemplate: null,
  filtersSectionHeight: 0,
  enums: null,
  missionTemplates: [],
};

export const appReducer = createReducer(appInitialState, (handle) => [
  handle(setMissionTemplates, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.missionTemplates = payload;
    })
  ),
  handle(setAppEnums, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.enums = payload;
    })
  ),
  handle(setTZ.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.tz = payload;
    })
  ),
  handle(setActiveCols.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.activeCols = payload;
    })
  ),
  handle(setActiveTemplate.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.activeTemplate = payload;
    })
  ),
  handle(setFiltersSectionHeight.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.filtersSectionHeight = payload;
    })
  ),
]);

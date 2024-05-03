import { createAction } from 'deox';
import {
  APP_SET_ACTIVE_COLS,
  APP_SET_ACTIVE_TEMPLATE,
  APP_SET_ENUMS,
  APP_SET_FILTERS_SECTION_HEIGHT,
  APP_SET_MISSION_TEMPLATES,
  APP_SET_TZ_REQ,
} from './types';

export const setTZ = {
  req: createAction(APP_SET_TZ_REQ, (res) => (params: any) => res(params)),
};

export const setActiveCols = {
  req: createAction(APP_SET_ACTIVE_COLS, (res) => (params: any) => res(params)),
};
export const setActiveTemplate = {
  req: createAction(APP_SET_ACTIVE_TEMPLATE, (res) => (params: any) => {
    sessionStorage.setItem('activeTemplate', JSON.stringify(params));
    return res(params);
  }),
};

export const setFiltersSectionHeight = {
  req: createAction(APP_SET_FILTERS_SECTION_HEIGHT, (res) => (params: any) => res(params)),
};

export const setAppEnums = createAction(APP_SET_ENUMS, (res) => (params: any) => res(params));
export const setMissionTemplates = createAction(APP_SET_MISSION_TEMPLATES, (res) => (params: any) => res(params));

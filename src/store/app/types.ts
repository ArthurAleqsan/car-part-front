import { IAdvancedTableCols } from 'src/types/common-types/filters';

export type appState = {
  tz: string;
  activeCols: IAdvancedTableCols | any;
  activeTemplate: any;
  filtersSectionHeight: number;
  enums: any;
  missionTemplates: any;
};

export const APP_SET_TZ_REQ = 'app/APP_SET_TZ_REQ';
export const APP_SET_ACTIVE_COLS = 'app/APP_SET_ACTIVE_COLS';
export const APP_SET_ACTIVE_TEMPLATE = 'app/APP_SET_ACTIVE_TEMPLATE';
export const APP_SET_FILTERS_SECTION_HEIGHT = 'app/APP_SET_FILTERS_SECTION_HEIGHT';
export const APP_SET_ENUMS = 'app/APP_SET_ENUMS';
export const APP_SET_MISSION_TEMPLATES = 'app/APP_SET_MISSION_TEMPLATES';

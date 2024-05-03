/* eslint-disable @typescript-eslint/naming-convention */
import { appState } from 'src/store/app/types';

export interface RootState {
  app: appState;
}

export interface ISagaReqStructure {
  onSuccessCb?: (arg?: any) => void;
  onFailCb?: (arg?: any) => void;
}

export interface IReqPayloadStructure {
  result: any;
  //TO DO remove inputFields
  inputFields?: any;
  success: boolean;
}

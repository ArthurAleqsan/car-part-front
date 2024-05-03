export interface IResponse {
  success: boolean;
  result: any;
  timeElapsed: number;
  message?: { key: string; params: any };
}

export interface IAxiosError {
  response: {
    code?: string;
    data: {
      message: {
        key: string;
        params: any[];
      };
    };
    success: false;
    timeElapsed?: number;
  };
}

export interface IGameboxResponse {
  success: boolean;
  result?: any;
  message?: {
    key?: string;
    params?: string[] | any;
  };
  requestTrackId: string;
  description?: string;
  details?: string;
}

export interface IDeepResponse {
  success: boolean;
  result: any;
  timeElapsed: number;
  message?: { key: string; params: any };
  response: {
    code?: string;
    data: {
      message: {
        key: string;
        params: any[];
      };
    };
    success: false;
    timeElapsed?: number;
  };
}

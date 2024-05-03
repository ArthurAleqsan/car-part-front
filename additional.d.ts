type PartialIf<P extends boolean, T> = P extends true ? Partial<T> : T;
declare module '*.module.scss' {
  const content: string;

  export default content;
}

declare type SelectOptionType = {
  label: string;
  value: string | number;
  iconSrc?: string | null;
};

declare interface IReqPayload {
  payload: {
    data: any;
    onSuccessCb?: (e?: any) => void;
    onFailCb?: (e?: any) => void;
  };
}

declare module '@typescript-eslint/parser';
declare module 'react-lazyload';

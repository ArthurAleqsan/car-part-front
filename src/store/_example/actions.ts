import { createAction } from 'deox';

export const _exampleAction = {
  request: createAction(
    '_example/_example_REQUEST',
    (res) =>
      (payload: {
        requestData: { email: string; password: string };
        onSuccessCb?: () => void;
        onFailCb?: () => void;
      }) =>
        res(payload)
  ),
  success: createAction('_example/_example_SUCCESS', (res) => (data: any) => res(data)),
  fail: createAction('_example/_example_FAIL', (res) => (err: any) => res(err)),
};

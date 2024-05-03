/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Redux actions short prefix
 */
export const PROJECT_SHORT_PREFIX = '@@starter';

/**
 * Enum for typing store state branches
 */
export enum StoreEntitiesEnum {
  REQUESTS_PENDING = 'requestsPending',
  REQUESTS_ERRORS = 'requestsErrors',
  ACCOUNT = 'account',
  EXAMPLE = 'example',
  SYSTEM = 'system',
  MODAL = 'modal',
  AUTH = 'auth',
}

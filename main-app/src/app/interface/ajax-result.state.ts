export interface AjaxResult<T> {
  code: number;
  data: T;
  extra: any;
  isError: boolean;
  isSuccess: boolean;
  msg: string;
  path: any;
  timestamp: string;
}

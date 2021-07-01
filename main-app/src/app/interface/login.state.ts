export interface UsernameLogin {
  account: string; // 用户名
  password: string; // 密码
  key: string; // 验证码key
  code: string; // 验证码计算结果
}

export interface LoginVo {
  user: {
    id: string;
    account: string;
    email: string;
    tenantCode: string;
  };
  token: {
    expire: number;
    token: string;
  };
}

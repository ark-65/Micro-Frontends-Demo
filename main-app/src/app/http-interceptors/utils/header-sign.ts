import { Md5 } from 'ts-md5/dist/md5';
import { Base64 } from 'js-base64';
import { HttpRequest } from '@angular/common/http';

/*
 *@contentType 当前接口请求参数类型
 *@req 当前接口请求体
 *@apiType （登录和获取验证码）接口与其他接口区分签名规则 true为其他接口签名规则 false为登录获取验证码签名规则
 */

export const headerSign = (
  contentType: string | null,
  req: HttpRequest<any>,
  apiType: boolean
): string => {
  /*if (apiType) {
    // 随机6位数字 开始
    let Num = '';
    for (let i = 0; i < 6; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    // 随机6位数字 结束

    // 时间戳 开始
    const timestamp = new Date().getTime();
    // 时间戳 结束
    // 获取请求体最外一层的key值  开始
    let keyStr = '';
    console.log('接口请求类型', contentType);
    console.log('入参data', req.body, req.params);
    // 请求类型 application/json   application/x-www-form-urlencoded
    if (contentType === 'application/json' && req.body) {
      for (const key in req.body) {
        if (req.body[key] !== undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign11--获取参数key', keyStr);
    } else if (contentType == 'application/x-www-form-urlencoded' && req.data) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign22--获取参数key', keyStr);
    } else if (
      contentType == 'application/x-www-form-urlencoded; charset=UTF-8' &&
      req.data
    ) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign33--获取参数key', keyStr);
    } else if (
      contentType == 'application/x-www-form-urlencoded;' &&
      req.data
    ) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign44--获取参数key', keyStr);
    } else if (contentType == 'application/json' && req.params) {
      for (let key in req.params) {
        if (req.params[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign55--获取参数key', keyStr);
    } else if (!req.params && !req.data && req.url.indexOf('?') > -1) {
      // 对直接将参数拼接在url上的参数获取key
      let index = req.url.indexOf('?');
      let urlAfter = req.url.slice(index + 1, req.url.length - 1);
      let obj = qs.parse(urlAfter);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign66--获取参数key', keyStr);
    }
    keyStr = keyStr || '{}';
    // 获取请求体最外一层的key值  结束

    // 公钥md5加密 开始
    let pubKey = md5(sessionStorage.getItem('pubEncrypt'));
    // 公钥md5加密 结束

    // 拼接签名
    let sign = Num + pubKey + keyStr + timestamp;
    console.log('拼接后的签名', sign);
    // base64混淆
    console.log('签名转为base64', Base64.encode(sign));
    return Base64.encode(sign);
  } else {
    // 随机38位数字 开始
    let Num = '';
    for (let i = 0; i < 38; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    // 随机38位数字 结束
    // 时间戳 开始
    let timestamp = new Date().getTime();
    // 时间戳 结束

    // 获取请求体最外一层的key值  开始
    let keyStr = '';
    console.log('登录接口请求类型', contentType);
    console.log('登录入参data', req.data, req.params);
    // 请求类型 application/json   application/x-www-form-urlencoded
    if (contentType == 'application/json' && req.data) {
      for (let key in req.data) {
        if (req.data[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('登录sign11--获取参数key', keyStr);
    } else if (contentType == 'application/x-www-form-urlencoded' && req.data) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('登录sign22--获取参数key', keyStr);
    } else if (
      contentType == 'application/x-www-form-urlencoded; charset=UTF-8' &&
      req.data
    ) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('登录sign33--获取参数key', keyStr);
    } else if (
      contentType == 'application/x-www-form-urlencoded;' &&
      req.data
    ) {
      let obj = qs.parse(req.data);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('sign44--获取参数key', keyStr);
    } else if (contentType == 'application/json' && req.params) {
      for (let key in req.params) {
        if (req.params[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('登录sign55--获取参数key', keyStr);
    } else if (!req.params && !req.data && req.url.indexOf('?') > -1) {
      // 对直接将参数拼接在url上的参数获取key
      let index = req.url.indexOf('?');
      let urlAfter = req.url.slice(index + 1, req.url.length - 1);
      let obj = qs.parse(urlAfter);
      for (let key in obj) {
        if (obj[key] != undefined) {
          if (keyStr) {
            keyStr += '&' + key;
          } else {
            keyStr += key;
          }
        }
      }
      console.log('登录sign66--获取参数key', keyStr);
    }
    keyStr = keyStr || '{}';
    // 获取请求体最外一层的key值  结束
    // 拼接签名
    let sign = Num + keyStr + timestamp;
    console.log('拼接后的签名', sign);
    // base64混淆
    console.log('签名转为base64', Base64.encode(sign));
    return Base64.encode(sign);
  }*/
  return '';
};

/**
 * cookie管理
 */

/**
 * 打开cookie功能
 */
window.navigator.cookieEnabled

/**
 * 设置cookie
 * @param {*} key key值
 * @param {*} value 具体数值
 * @param {*} keepMin 保存的时间（分钟）
 */
export function setCookie(key, value, keepMin) {
  // 当前时间戳
  let date = Date.now();
  // 设置过期时间
  date += keepMin * 60 * 1000;
  const expires = new Date(date).toUTCString();
  document.cookie = encodeURI(key) + "=" + encodeURI(value) + "; expires=" + expires;
}

/**
 * 获取key对应的值
 * @param {*} key key值
 */
export function getCookie(key) {
  const cookies = document.cookie.split(";");
  let cookieValue = "";
  cookies.forEach((cookie) => {
    if (cookie) {
      const pair = cookie.split("=");
      if (decodeURI(pair[0].trim()) === key) {
        cookieValue = pair[1].trim();
      }
    }
  });
  return cookieValue;
}
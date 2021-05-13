var arkw = window
export const ArkLog = (tag, msg) => {
  var getDate = () => {
    const value = new Date();
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const hours = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();
    const milliseconds = value.getMilliseconds();

    return (
      String(day).padStart(2, '0') +
      '-' +
      String(month).padStart(2, '0') +
      '-' +
      year +
      ' ' +
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0') +
      '.' +
      String(milliseconds).padStart(3, '0')
    );
  }
  const stripCircularVal = vv => {
    var cache = [];
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    };
  }
  const getExtract = (vv) => {
    if (typeof vv == 'object')
      return vv ? JSON.stringify(vv, stripCircularVal(), 4) : vv;
    return vv;
  }
  const taglen = 10;
  var msgc = msg || tag;
  tag = msg ? tag : 'ArkLog Tag';
  tag = tag.length > taglen ? tag.substring(0, taglen) : tag.padEnd(taglen, " ");
  msgc = getExtract(msgc);
  const cont = `%c[${tag}][${getDate()}]:%c ${msgc}`;
  const style_log_tag = 'background: #222; color: #bada55', style_log_msg = 'color: #bada55;font-size:16px';
  const log = window.console.log.bind(window.console, cont, style_log_tag, style_log_msg);
  //window.console.log.call(this, `%c${tag}:%c ${msgc}`, 'background: #222; color: #bada55', 'color: #bada55');
  const style_err_tag = 'background: #ff0000; color: #ffffff', style_err_msg = 'color: #ff0000;font-size:16px';
  const error = window.console.log.bind(window.console, cont, style_err_tag, style_err_msg);
  return {
    log: log,
    error: error
    //error: window.console.error.bind(window.console, 'error: %s'),
    //info: window.console.info.bind(window.console, 'info: %s'),
    //warn: window.console.warn.bind(window.console, 'warn: %s')
  }
};

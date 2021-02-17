module.exports = function reverse (n) {
    let resolve, str, string, arr;
    string = n.toString();
    arr = string.split('');
    
    if (n > 0) {
      if (arr[arr.length - 1] === 0) {
          arr.pop()
      }
      str = arr.reverse().join('')
      resolve = parseInt(str)
      return resolve

    } else if (n < 0 && arr.includes('-')){
      arr.shift();
      str = arr.reverse().join('');
      resolve = parseInt(str)
      return resolve
    }
}

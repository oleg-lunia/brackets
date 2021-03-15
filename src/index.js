module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let map = {
      '(': ')',
      '[': ']',
      '{': '}',
      'V': 'W',
      '1': '2',
      '3': '4',
      '5': '6',
      'Z': 'S',
      'N': 'M'
    }

    let arr = str.split('');
    let arr2 = [];
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] == '|') {
        arr2.push(arr[a]);
        if ((arr2.length % 2) == 0) {
          arr.splice(a, 1, 'W');
        } else {
          arr.splice(a, 1, 'V');
        }
      }
    }

    for (let b = 0; b < arr.length; b++) {
      if (arr[b] == '7') {
        arr2.push(arr[b]);
        if ((arr2.length % 2) == 0) {
          arr.splice(b, 1, 'S');
        } else {
          arr.splice(b, 1, 'Z');
        }
      }
    }

    for (let c = 0; c < arr.length; c++) {
      if (arr[c] == '8') {
        arr2.push(arr[c]);
        if ((arr2.length % 2) == 0) {
          arr.splice(c, 1, 'M');
        } else {
          arr.splice(c, 1, 'N');
        }
      }
    }




    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[' || arr[i] === 'V' || arr[i] === 'Z' || arr[i] === 'N' || arr[i] === '1' || arr[i] === '3' || arr[i] === '5') {
          stack.push(arr[i]);
      } else {
        let last = stack.pop();
        if (arr[i] !== map[last]) {
          return false;
        }
      }
    }
 
    if (stack.length !== 0) {
      return false;
    }
    return true;
}

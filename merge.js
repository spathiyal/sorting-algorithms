function merge(a, b) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    arr.push(a[i]);
    i++;
  }

  while (j < b.length) {
    arr.push(b[j]);
    j++;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };

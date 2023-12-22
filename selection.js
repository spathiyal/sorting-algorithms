function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(j=0;j<arr.length; j+=){
        if(arr[j]<arr[lowest]){
            lowest = j;
        }
    }
    if(lowest!==i){
        //swap the values
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

module.exports = selectionSort;

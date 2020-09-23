// Try to implement swap on your own, this time.
function swap(arr, idx1, idx2) {
let temp = arr[idx1];
arr[idx1] = arr[idx2]
arr[idx2] = temp;
}


function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }

  }
  return arr;
}
  // list  : array of items
  // n     : size of list
  //
  // for i = 1 to n - 1
  // /* set current element as minimum*/
  //    min = i
  //
  //    /* check the element to be minimum */
  //
  //    for j = i+1 to n
  //       if list[j] < list[min] then
  //          min = j;
  //       end if
  //    end for
  //
  //    /* swap the minimum element with the current element
  //       using the above swap function*/
  //    if indexMin != i  then
  //       swap list[min] and list[i]
  //    end if
  // end for


module.exports = {
  selectionSort,
  swap
};

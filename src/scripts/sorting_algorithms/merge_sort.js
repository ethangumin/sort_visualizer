// import GraphDisplay from "../graph_display";

// function mergeSort(arr) {
//   console.log(arr);
//   if (arr.length <= 1) return arr;

//   const mid = arr.length / 2;

//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// async function merge(arr1, arr2) {
//   const res = [];
//   while (arr1.length && arr2.length) {
//     if (arr1[0].size < arr2[0].size) {
//       res.push(arr1.shift());
//     } else {
//       res.push(arr2.shift());
//     }
//   }

//   return res.concat(arr1).concat(arr2);
// }

// export { mergeSort as default };

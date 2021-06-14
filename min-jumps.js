/*
Cho một mảng các số nguyên không âm, bạn được khởi đầu ở vị trí đầu tiên trong mảng. Mỗi phần tử trong mảng thể hiện số bước nhảy tối đa tại vị trí đó. Mục tiêu của bạn là nhảy tới vị trí cuối cùng trong mảng với số bước nhảy ít nhất.
Ví dụ:
Input: nums = [2,3,1,1,4]
Output: 2 (Chỉ cần nhảy 2 bước, bước đầu tiên từ index 0 tới index 1, sau đó nhảy tới vị trí cuối cùng)
*/

// O(n^2)

function calMinJump(arr, index) {
  let min = arr.length;
  
  for (let j = 1; j <= arr[index]; j++) {
    let count = 0;

    if (index + j >= arr.length - 1) {
      console.log("count:", index, " - ", j, ":", count + 1);
      return count + 1;
    }
    count += 1 + calMinJump(arr, index + j);
    console.log("count:", index, " - ", j, ":", count);
    min = Math.min(min, count);
  }

  return min;
}

const arr = [4,1,2,3,3,2,4,6,1,1,1,1,1,1,1]; // 4

// console.log(calMinJump(arr, 0));

// O(n)
// Solution: https://stackoverflow.com/questions/33227584/shortest-path-through-an-array-of-max-jump-lengths?rq=1

function calMinJumpV2(arr) {
  let count = 0;
  let i = 0;
  while (i < arr.length - 1) {
    let jump = arr[i] + i;
    let maxJump = 0;
    let index = i;
    for (let j = i + 1; j <= jump; j++) {
      if (maxJump <= arr[j] + j) {
        maxJump = arr[j] + j;
        index = j;
      }
    }
    i = index;
    count += 1;
  }

  return count;
}

console.log(calMinJumpV2(arr));

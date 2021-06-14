/*
Cho một mảng các số nguyên không âm, bạn được khởi đầu ở vị trí đầu tiên trong mảng. Mỗi phần tử trong mảng thể hiện số bước nhảy tối đa tại vị trí đó. Mục tiêu của bạn là nhảy tới vị trí cuối cùng trong mảng với số bước nhảy ít nhất.
Ví dụ:
Input: nums = [2,3,1,1,4]
Output: 2 (Chỉ cần nhảy 2 bước, bước đầu tiên từ index 0 tới index 1, sau đó nhảy tới vị trí cuối cùng)
*/

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

const arr = [2,3,1,1,4];

console.log(calMinJump(arr, 0));

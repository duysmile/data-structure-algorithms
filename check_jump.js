/*
Cho một mảng các số nguyên không âm arr, bạn được đặt ở 1 vị trí start nằm trong mảng. Cách nhảy như sau: khi bạn ở tại một vị trí có index i, bạn có thể nhảy tới vị trí i+ arr[i] hoặc i - arr[i]. Kiểm tra xem bạn có thể nhảy tới bất kỳ index nào với giá trị 0 hay không? Lưu ý là bạn không thể nhảy ra khỏi ngoài mảng.
Ví dụ 1:
Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation:
Các cách có thể để nhảy tới vị trí index 3 với giá trị 0 là:
index 5 -> index 4 -> index 1 -> index 3
index 5 -> index 6 -> index 4 -> index 1 -> index 3
*/

function checkJump(arr, position) {
  if (arr[position] == 0) {
    return true;
  }

  let left = false;
  let right = false;
  if (position - arr[position] < 0) {
    left = false;
  } else {
    left = checkJump(arr, position - arr[position]);
  }

  if (position + arr[position] > arr.length - 1) {
    right = false;
  } else {
    right = checkJump(arr, position + arr[position]);
  }
  console.log("position:", position);
  return left || right;
}

const arr = [4,2,3,0,3,1,2];
const position = 5;

console.log(checkJump(arr, position));
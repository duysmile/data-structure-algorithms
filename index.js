function count(str) {
  let arr = str.match(/(\d)\1*/g);

  return arr.reduce((res, item) => {
    return res + `${item.length}` + `${item[0]}`;
  }, "");
}

function countAndSay(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      str = "1";
    } else {
      str = count(str);
    }
  }

  return str;
}

console.log("count and say");
console.log(countAndSay(4));
// console.log("res:", count("11"))

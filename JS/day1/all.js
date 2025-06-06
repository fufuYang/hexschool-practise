// test
console.log(1);

console.log("===== 2025/04/28 JS 任務 Day1 - 字串、數字相加 =====");

// 題目一：hello world！
console.log("🍅 題目一：hello world！ 🍅");
function hello() {
  console.log("Hello world！");
}

hello();
hello();

// 題目二：參數+字串練習
console.log("🍅 題目二：參數+字串練習 🍅");
function sayHi(name) {
  console.log(`${name}，Hello world！`);
}

sayHi("Tom");
sayHi("John");

// 題目三：參數加法產生器
console.log("🍅 題目三：參數加法產生器 🍅");
function add(add) {
  console.log(add + add);
}

add(2);
add(4);
add(8);

// 題目四：兩個參數相加器
console.log("🍅 題目四：兩個參數相加器 🍅");
function addTwo(number1, number2) {
  console.log(number1 + number2);
}

addTwo(5, 10);
addTwo(4, 20);
addTwo(9, 100);

// 題目五：參數+字串相加
console.log("🍅 題目五：參數+字串相加 🍅");
function addNumberAndString(number1, number2, number3) {
  console.log(
    `第一加第二個參數加總為 ${number1}+${number2}，第三個參數為 ${number3}`
  );
}
addNumberAndString(5, 10, 30);
addNumberAndString(4, 20, 22);
addNumberAndString(9, 100, 44);

let str1 = "S\u0307\u0323";
let str2 = "S\u0323\u0307"
console.log(str1);
console.log(str2);

console.log(str1 == str2);
console.log(str1.normalize() == str2.normalize());

console.log("\u1e68");
console.log("\u1e68" == str1.normalize());
import {Padlock} from "./Padlock.js";

const cipher = "ahdscajsasjfdksdjfjkadjkfdjdfjdffddjddjdjdjdjdjfjjjfjjfj12493932199391919199493943919191";
console.warn(new Padlock(cipher).decrypt());

const cipher2 = "dddbbbcccfffaaa";
console.warn(new Padlock(cipher2).decrypt());

const cipher3 = "ddaqqqqqq";
console.warn(new Padlock(cipher3).decrypt());
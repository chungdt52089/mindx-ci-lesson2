import {
  sumArray,
  countOccurrences,
  removeDuplicates,
  flattenArray,
  isSymmetric,
  findSecondLargest,
  sortProductsByPrice,
  findMostExpensiveProduct,
  groupByType,
  isSubset,
  findMaxKey,
  mergeObjectsSumValues,
  countElements,
  cleanObject,
  hasDuplicate,
  sumByGroup,
  uniqueValues,
  isPermutation,
  findLongestString,
  intersection,
  filterByMinValue,
  findLongestValue,
  groupByFirstLetter,
  getAdults,
  convertToArray,
  sortStringsByLength,
  sumByKey,
  countWords,
  findMinKey,
} from "./utils.js";

// Bài 1
console.log("Bài 1: sumArray");
console.log("[1, 2, 3, 4]", sumArray([1, 2, 3, 4])); // 10
console.log("[]", sumArray([])); // 0
console.log("[5]", sumArray([5])); // 5
console.log("[2, 2, 2]", sumArray([2, 2, 2])); // 6

// Bài 2
console.log("Bài 2: countOccurrences");
console.log("[1, 2, 2, 3, 2], 2", countOccurrences([1, 2, 2, 3, 2], 2)); // 3
console.log("[], 2", countOccurrences([], 2)); // 0
console.log("[2], 2", countOccurrences([2], 2)); // 1
console.log("[1, 3], 2", countOccurrences([1, 3], 2)); // 0

// Bài 3
console.log("Bài 3: removeDuplicates");
console.log("[1, 2, 2, 3, 4, 4, 6, 2, 3, 6]", removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6])); // [1,2,3,4,6]
console.log("[]", removeDuplicates([])); // []
console.log("[7]", removeDuplicates([7])); // [7]
console.log("[5, 5, 5]", removeDuplicates([5, 5, 5])); // [5]

// Bài 4
console.log("Bài 4: flattenArray");
console.log("[[1, 2], [3, 4]]", flattenArray([[1, 2], [3, 4]])); // [1,2,3,4]
console.log("[]", flattenArray([])); // []
console.log("[[1]]", flattenArray([[1]])); // [1]
console.log("[[1, 1], [], [1]]", flattenArray([[1, 1], [], [1]])); // [1,1,1]

// Bài 5
console.log("Bài 5: isSymmetric");
console.log("[1, 2, 3, 2, 1]", isSymmetric([1, 2, 3, 2, 1])); // true
console.log("[1, 2, 3]", isSymmetric([1, 2, 3])); // false
console.log("[]", isSymmetric([])); // true
console.log("[9]", isSymmetric([9])); // true
console.log("[4, 4]", isSymmetric([4, 4])); // true

// Bài 6
console.log("Bài 6: findSecondLargest");
const arr6 = [3, 1, 4, 2, 4];
console.log("[3, 1, 4, 2, 4]", findSecondLargest(arr6)); // 3
console.log("Mảng gốc sau khi gọi", arr6); // không bị đổi
console.log("[]", findSecondLargest([])); // null
console.log("[5]", findSecondLargest([5])); // null
console.log("[4, 4, 4]", findSecondLargest([4, 4, 4])); // null
console.log("[-1, -5, -3]", findSecondLargest([-1, -5, -3])); // -3

// Bài 7
console.log("Bài 7: sortProductsByPrice");
const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
];
console.log("Kết quả", sortProductsByPrice(products)); // B, A, C
console.log("Mảng gốc sau khi gọi", products); // vẫn A, B, C
console.log("[]", sortProductsByPrice([])); // []
console.log("1 sản phẩm", sortProductsByPrice([{ name: "X", price: 10 }]));
console.log("Giá trùng", sortProductsByPrice([
  { name: "X", price: 10 },
  { name: "Y", price: 5 },
  { name: "Z", price: 10 },
])); // Y, X, Z

// Bài 8
console.log("Bài 8: findMostExpensiveProduct");
console.log("Kết quả", findMostExpensiveProduct(products)); // Product C
console.log("[]", findMostExpensiveProduct([])); // null
console.log("1 sản phẩm", findMostExpensiveProduct([{ name: "X", price: 10 }]));
console.log("Giá trùng", findMostExpensiveProduct([
  { name: "X", price: 50 },
  { name: "Y", price: 50 },
])); // X (lấy sản phẩm đầu tiên)

// Bài 9
console.log("Bài 9: groupByType");
console.log("Kết quả", groupByType([
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
])); // { fruit: [apple, banana], vegetable: [carrot] }
console.log("[]", groupByType([])); // {}
console.log("1 phần tử", groupByType([{ type: "fruit", name: "apple" }]));
console.log("Tên trùng", groupByType([
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "apple" },
])); // { fruit: [apple, apple] }

// Bài 10
console.log("Bài 10: isSubset");
console.log("[1, 2, 3, 4], [2, 4]", isSubset([1, 2, 3, 4], [2, 4])); // true
console.log("[1, 2, 3, 4], [2, 5]", isSubset([1, 2, 3, 4], [2, 5])); // false
console.log("[1, 2], []", isSubset([1, 2], [])); // true (mảng rỗng là con của mọi mảng)
console.log("[], [1]", isSubset([], [1])); // false
console.log("[1, 2], [2, 2]", isSubset([1, 2], [2, 2])); // true

// Bài 11
console.log("Bài 11: findMaxKey");
console.log("{ a: 10, b: 20, c: 15 }", findMaxKey({ a: 10, b: 20, c: 15 })); // 'b'
console.log("{}", findMaxKey({})); // null
console.log("{ a: 5 }", findMaxKey({ a: 5 })); // 'a'
console.log("{ a: 20, b: 20 }", findMaxKey({ a: 20, b: 20 })); // 'a'

// Bài 12
console.log("Bài 12: mergeObjectsSumValues");
console.log("Kết quả", mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 })); // { a:10, b:50, c:40 }
console.log("{} + {}", mergeObjectsSumValues({}, {})); // {}
console.log("{ a: 1 } + {}", mergeObjectsSumValues({ a: 1 }, {})); // { a: 1 }
console.log("{ a: 1 } + { a: 1 }", mergeObjectsSumValues({ a: 1 }, { a: 1 })); // { a: 2 }

// Bài 13
console.log("Bài 13: countElements");
console.log("['a', 'b', 'a', 'c', 'b', 'a']", countElements(["a", "b", "a", "c", "b", "a"])); // { a:3, b:2, c:1 }
console.log("[]", countElements([])); // {}
console.log("['x']", countElements(["x"])); // { x: 1 }

// Bài 14
console.log("Bài 14: cleanObject");
const obj14 = { a: 1, b: null, c: undefined, d: 4 };
console.log("Kết quả", cleanObject(obj14)); // { a: 1, d: 4 }
console.log("{}", cleanObject({})); // {}
console.log("{ a: null }", cleanObject({ a: null })); // {}
console.log("{ a: 0, b: '', c: false }", cleanObject({ a: 0, b: "", c: false })); // giữ nguyên (không phải null/undefined)

// Bài 15
console.log("Bài 15: hasDuplicate");
console.log("[1, 2, 3, 4, 2]", hasDuplicate([1, 2, 3, 4, 2])); // true
console.log("[1, 2, 3]", hasDuplicate([1, 2, 3])); // false
console.log("[]", hasDuplicate([])); // false
console.log("[1]", hasDuplicate([1])); // false

// Bài 16
console.log("Bài 16: sumByGroup");
const items = [
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
];
console.log("Kết quả", sumByGroup(items, "type")); // { fruit: 40, vegetable: 20 }
console.log("[]", sumByGroup([], "type")); // {}
console.log("1 phần tử", sumByGroup([{ type: "fruit", price: 10 }], "type")); // { fruit: 10 }

// Bài 17
console.log("Bài 17: uniqueValues");
console.log("[1, 2, 3], [3, 4, 5]", uniqueValues([1, 2, 3], [3, 4, 5])); // [1,2,3,4,5]
console.log("[], []", uniqueValues([], [])); // []
console.log("[1], []", uniqueValues([1], [])); // [1]
console.log("[1, 1], [1]", uniqueValues([1, 1], [1])); // [1]

// Bài 18
console.log("Bài 18: isPermutation");
console.log("[1, 2, 3], [3, 2, 1]", isPermutation([1, 2, 3], [3, 2, 1])); // true
console.log("[1, 2, 2], [2, 1, 1]", isPermutation([1, 2, 2], [2, 1, 1])); // false
console.log("[1, 2], [1, 2, 3]", isPermutation([1, 2], [1, 2, 3])); // false
console.log("[], []", isPermutation([], [])); // true
console.log("[1], [1]", isPermutation([1], [1])); // true

// Bài 19
console.log("Bài 19: findLongestString");
console.log("['abc', 'abcd', 'a']", findLongestString(["abc", "abcd", "a"])); // 'abcd'
console.log("[]", findLongestString([])); // null
console.log("['hi']", findLongestString(["hi"])); // 'hi'
console.log("['ab', 'cd']", findLongestString(["ab", "cd"])); // 'ab'

// Bài 20
console.log("Bài 20: intersection");
console.log("[1, 2, 3], [2, 3, 4]", intersection([1, 2, 3], [2, 3, 4])); // [2,3]
console.log("[], [1]", intersection([], [1])); // []
console.log("[1], [1]", intersection([1], [1])); // [1]
console.log("[2, 2, 3], [2]", intersection([2, 2, 3], [2])); // [2]

// Bài 21
console.log("Bài 21: filterByMinValue");
console.log("[5, 10, 15, 20], 12", filterByMinValue([5, 10, 15, 20], 12)); // [15,20]
console.log("[], 12", filterByMinValue([], 12)); // []
console.log("[12], 12", filterByMinValue([12], 12)); // [12]
console.log("[15, 15, 3], 12", filterByMinValue([15, 15, 3], 12)); // [15,15]

// Bài 22
console.log("Bài 22: findLongestValue");
console.log("{ a: 'cat', b: 'elephant', c: 'dog' }", findLongestValue({ a: "cat", b: "elephant", c: "dog" })); // 'elephant'
console.log("{}", findLongestValue({})); // null
console.log("{ a: 'x' }", findLongestValue({ a: "x" })); // 'x'

// Bài 23
console.log("Bài 23: groupByFirstLetter");
console.log("Kết quả", groupByFirstLetter(["apple", "banana", "avocado", "blueberry"]));
console.log("[]", groupByFirstLetter([])); // {}
console.log("['kiwi']", groupByFirstLetter(["kiwi"])); // { k: [kiwi] }
console.log("['apple', 'apple']", groupByFirstLetter(["apple", "apple"])); // { a: [apple, apple] }

// Bài 24
console.log("Bài 24: getAdults");
console.log("Kết quả", getAdults([
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 },
])); // Bob, David
console.log("[]", getAdults([])); // []
console.log("Đúng 18 tuổi", getAdults([{ name: "Eve", age: 18 }])); // [Eve]

// Bài 25
console.log("Bài 25: convertToArray");
console.log("{ a: 1, b: 2, c: 3 }", convertToArray({ a: 1, b: 2, c: 3 })); // [[a,1],[b,2],[c,3]]
console.log("{}", convertToArray({})); // []
console.log("{ a: 1 }", convertToArray({ a: 1 })); // [[a,1]]

// Bài 26
console.log("Bài 26: sortStringsByLength");
const arr26 = ["a", "ccc", "bb"];
console.log("['a', 'ccc', 'bb']", sortStringsByLength(arr26)); // [a, bb, ccc]
console.log("Mảng gốc sau khi gọi", arr26); // vẫn [a, ccc, bb]
console.log("[]", sortStringsByLength([])); // []
console.log("['x']", sortStringsByLength(["x"])); // [x]
console.log("['bb', 'a', 'cc']", sortStringsByLength(["bb", "a", "cc"])); // [a, bb, cc]

// Bài 27
console.log("Bài 27: sumByKey");
console.log("key 'price'", sumByKey(items, "price")); // 60
console.log("[]", sumByKey([], "price")); // 0
console.log("1 phần tử", sumByKey([{ price: 7 }], "price")); // 7
console.log("Thiếu key", sumByKey([{ price: 5 }, { name: "x" }], "price")); // 5

// Bài 28
console.log("Bài 28: countWords");
console.log('"Hello world! Welcome to JavaScript"', countWords("Hello world! Welcome to JavaScript")); // 5
console.log('""', countWords("")); // 0
console.log('"   "', countWords("   ")); // 0
console.log('"Hello"', countWords("Hello")); // 1
console.log('"  nhiều   khoảng   trắng  "', countWords("  nhiều   khoảng   trắng  ")); // 3

// Bài 29
console.log("Bài 29: findMinKey");
console.log("{ a: 100, b: 20, c: 50 }", findMinKey({ a: 100, b: 20, c: 50 })); // 'b'
console.log("{}", findMinKey({})); // null
console.log("{ a: 5 }", findMinKey({ a: 5 })); // 'a'
console.log("{ a: 20, b: 20 }", findMinKey({ a: 20, b: 20 })); // 'a'
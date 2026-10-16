// utils.js — Các hàm xử lý mảng / object
// khi không có kết quả hợp lệ (mảng/object rỗng) thì trả về null.

// Bài 1. Tổng các phần tử trong mảng
export function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Bài 2. Đếm số lần xuất hiện của value trong arr
export function countOccurrences(arr, value) {
  return arr.filter((item) => item === value).length;
}

// Bài 3. Trả về mảng không có phần tử trùng lặp (giữ thứ tự xuất hiện đầu tiên)
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Bài 4. Chuyển mảng 2 chiều thành mảng 1 chiều
export function flattenArray(arr) {
  return arr.reduce((result, item) => result.concat(item), []);
}

// Bài 5. Kiểm tra mảng có đối xứng không
export function isSymmetric(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

// Bài 6. Giá trị lớn thứ hai (khác giá trị lớn nhất)
export function findSecondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a); // Set tạo mảng mới nên không đổi arr gốc
  return unique.length >= 2 ? unique[1] : null;
}

// Bài 7. Sắp xếp sản phẩm theo giá tăng dần (không làm đổi mảng gốc)
export function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

// Bài 8. Sản phẩm có giá lớn nhất
export function findMostExpensiveProduct(products) {
  if (products.length === 0) return null;
  return products.reduce((max, p) => (p.price > max.price ? p : max));
}

// Bài 9. Gom nhóm tên theo type
export function groupByType(arr) {
  return arr.reduce((groups, item) => {
    if (!groups[item.type]) groups[item.type] = [];
    groups[item.type].push(item.name);
    return groups;
  }, {});
}

// Bài 10. Kiểm tra arr2 có phải mảng con của arr1 không
// (mọi phần tử của arr2 đều có trong arr1)
export function isSubset(arr1, arr2) {
  return arr2.every((item) => arr1.includes(item));
}

// Bài 11. Key có giá trị số lớn nhất
export function findMaxKey(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) return null;
  return keys.reduce((maxKey, key) => (obj[key] > obj[maxKey] ? key : maxKey));
}

// Bài 12. Hợp hai object, key trùng thì cộng giá trị
export function mergeObjectsSumValues(obj1, obj2) {
  const result = { ...obj1 };
  for (const key in obj2) {
    result[key] = (result[key] ?? 0) + obj2[key];
  }
  return result;
}

// Bài 13. Đếm số lần xuất hiện của mỗi phần tử
export function countElements(arr) {
  return arr.reduce((count, item) => {
    count[item] = (count[item] ?? 0) + 1;
    return count;
  }, {});
}

// Bài 14. Xóa các key có giá trị null hoặc undefined (trả về object mới)
export function cleanObject(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

// Bài 15. Kiểm tra mảng có phần tử lặp lại không
export function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// Bài 16. Tính tổng giá trị theo nhóm
// key: tên thuộc tính dùng để gom nhóm (vd: 'type')
// valueKey: tên thuộc tính cần cộng (mặc định 'price')
export function sumByGroup(arr, key, valueKey = "price") {
  return arr.reduce((result, item) => {
    const group = item[key];
    result[group] = (result[group] ?? 0) + item[valueKey];
    return result;
  }, {});
}

// Bài 17. Các giá trị duy nhất từ hai mảng
export function uniqueValues(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Bài 18. Kiểm tra hai mảng có phải hoán vị của nhau không
// (cùng độ dài và mỗi giá trị xuất hiện cùng số lần)
export function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const count = new Map();
  for (const item of arr1) count.set(item, (count.get(item) ?? 0) + 1);
  for (const item of arr2) {
    if (!count.get(item)) return false;
    count.set(item, count.get(item) - 1);
  }
  return true;
}

// Bài 19. Chuỗi dài nhất (nếu bằng nhau thì lấy chuỗi xuất hiện trước)
export function findLongestString(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((longest, str) => (str.length > longest.length ? str : longest));
}

// Bài 20. Các giá trị chung giữa hai mảng (không trùng lặp)
export function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter((item) => arr2.includes(item));
}

// Bài 21. Giữ lại các phần tử >= minValue
export function filterByMinValue(arr, minValue) {
  return arr.filter((num) => num >= minValue);
}

// Bài 22. Giá trị (chuỗi) dài nhất trong object
export function findLongestValue(obj) {
  return findLongestString(Object.values(obj));
}

// Bài 23. Gom nhóm chuỗi theo chữ cái đầu tiên (bỏ qua chuỗi rỗng)
export function groupByFirstLetter(arr) {
  return arr.reduce((groups, str) => {
    if (str.length === 0) return groups;
    const letter = str[0].toLowerCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(str);
    return groups;
  }, {});
}

// Bài 24. Danh sách người lớn (tuổi >= 18)
export function getAdults(people) {
  return people.filter((person) => person.age >= 18);
}

// Bài 25. Chuyển object thành mảng các cặp [key, value]
export function convertToArray(obj) {
  return Object.entries(obj);
}

// Bài 26. Sắp xếp chuỗi theo độ dài tăng dần (không làm đổi mảng gốc)
export function sortStringsByLength(arr) {
  return [...arr].sort((a, b) => a.length - b.length);
}

// Bài 27. Tổng giá trị số của một key trong danh sách object
// (bỏ qua phần tử nào không có key đó hoặc giá trị không phải số)
export function sumByKey(arr, key) {
  return arr.reduce(
    (sum, item) => (typeof item[key] === "number" ? sum + item[key] : sum),
    0
  );
}

// Bài 28. Đếm số từ trong chuỗi (các từ cách nhau bởi khoảng trắng)
export function countWords(str) {
  const trimmed = str.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

// Bài 29. Key có giá trị số nhỏ nhất
export function findMinKey(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) return null;
  return keys.reduce((minKey, key) => (obj[key] < obj[minKey] ? key : minKey));
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // 时间复杂度O(n)
  let numsMap = new Map()
  // 先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。
  for (let index = 0; index < nums1.length; index++) {
    let key = nums1[index]
    if(numsMap.has(key)) {
      numsMap.set(key, numsMap.get(key) + 1)
    } else {
      numsMap.set(key, 1)
    }
  }
  console.log(numsMap)
  // 遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组result里。
  // 如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。
  // 如果value值等于1，则result删除该元素。
  let result = []
  for (let index = 0; index < nums2.length; index++) {
    let key = nums2[index]
    if (numsMap.has(key)) {
      result.push(key)
      if (numsMap.get(key) > 1) {
        numsMap.set(key, numsMap.get(key) - 1)
      } else {
        numsMap.delete(key)
      }
    }
  }
  return result
};


console.log(intersect([1,2,2,1], [2]))

console.log(intersect([1,2,2,1], [2,2]))


console.log(intersect([4,9,5], [9,4,9,8,4]))


// 解法二：暴力法
// 遍历数组长度小的数组
// 遍历第一个数组，然后在第二个数组查找是否有当前元素。
// 如果有，把当前元素push进返回值。然后把第二个数组里该下标元素删除。
var intersect1 = function(nums1, nums2) {
  let result = [];
  if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  for (let i = 0; i < nums1.length; i++) {
    let key = nums2.indexOf(nums1[i]);
    if (key !== -1) result.push(nums2.splice(key, 1));
  }
  return result;
};


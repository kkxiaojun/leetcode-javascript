var singleNumber = function(nums) {
  var a = 0
  if (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      a ^= nums[i]
    }
  }
  return a
}

console.log('ssss', singleNumber([1,1,2,3,3]))
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  var numsMap = new Map()
  for (var i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      numsMap.set(nums[i], numsMap.get[nums[i]] + 1)
      return nums[i]
    }
    numsMap.set(nums[i], 1)
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber1 = function(nums) {
  var temp
  for (let i = 0; i < nums.length; i++) {
    while ( i !== nums[i]) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i]
      }
      temp = nums[i]
      nums[i] = nums[nums[i]]
      nums[nums[i]] = temp
    }
  }
  return -1
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 */
var search = function(nums, target) {
  var pivot, left = 0, right = nums.length -1
  while (left <= right) {
    pivot = left + parseInt((right - left) / 2)
    if (nums[pivot] === target) {
      return pivot
    } else if (target < nums[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return -1
};

var mySqrt = function(x) {
  if (x < 2) {
    return x
  }
  var pivot, left = 2, right = parseInt(x / 2)
  while (left <= right) {
    pivot = left + parseInt((right - left) / 2)
    var nums = parseInt(pivot * pivot)
    if (nums > x) {
      right = pivot - 1
    } else if (nums < x) {
      left = pivot + 1
    } else {
      return parseInt(pivot)
    }
  }
  return right
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  // 空则返回false
  if (natrix == null || matrix.length == 0 || matrix[0].length) {
    return false
  }
  // 获取初始length
  var rows = matrix.length, columns = matrix[0].length
  // 初始化下标
  var rowIndex = 0, columnIndex = columns - 1
  while(rowIndex < rows && columnIndex >= 0) {
    var cur = matrix[rowIndex][columnIndex]
    // 进行三种情况判断
    if (cur === target) {
      return true
    } else if (cur > target) {
      columnIndex--
    } else {
      rowIndex++
    }
  }
  return false
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var p1 = m -1
  var p2 = n -1
  var p = m + n -1
  while ((p1 >= 0) && (p2 >= 0)) {
    nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
  }
  // add missing elements from nums2
  nums1.splice(0, p2 + 1, ...(nums2.slice(0, p2 + 1)))
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

};

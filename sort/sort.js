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
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

console.log('---------findRepeatNumber--------', findRepeatNumber1([0, 1, 2, 3, 4, 5, 5]))
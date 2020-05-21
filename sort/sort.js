/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) {
    return null
  }
  if (root.val === val) {
    return root
  }
  return (root.left && searchBST(root.left, val)) || (root.right && searchBST(root.right, val))
};



// 反转字符串 
var reverseString = function(s) {
  if (s.length == 0) {
    return s
  }
  var i = 0
  var j = s.length - 1
  while(i < j) {
    var item = s[i]
    s[i] = s[j]
    s[j] = item
    i++
    j--
  }
  return s
};

// 两数之和: target - nums[1] 存在于map中
var twoSum = function(nums, target) {
  if (nums.length === 0) {
    return nums
  }
  var map = new Map()
  // 先储存一份数据
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }
  // target - nums[1]
  for (let i = 0; i < nums.length; i++) {
    let item = target - nums[i]
    if (map.has(item) && map.get(item) !== i) {
      return [i, map.get(item)]
    }
  }
  return []
}

console.log('---', twoSum([2, 7, 11, 15], 9))

// 二分查找
var twoSum1 = function(nums, target) {
  if (nums.length === 0) {
    return [-1, -1]
  }
  var i = 0, j = nums.length - 1;
  while (i < j) {
    if (target === nums[i] + nums [j]) {
      return [i + 1, j + 1]
    } else if (target > nums[i] + nums [j]) {
      i++
    } else {
      j--
    }
  }
  return [-1, -1]
}

console.log('---', twoSum1([2, 7, 11, 15], 9))


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var ans = Number.MAX_SAFE_INTEGER
  var i = 0
  var sum = 0
  for (var j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= s) {
      ans = Math.min(ans, j - i + 1)
      sum -= nums[i++]
    }
  }
};
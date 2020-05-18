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
  var mapObj = new Map()
  // 先储存一份数据
  for (let nums = 0; nums < nums.length; nums++) {
    Map.set(nums[i], nums[i])
  }
  // target - nums[1]
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}
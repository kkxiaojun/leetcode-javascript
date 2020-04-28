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

var preorderTraversal = function(root) {
  var printArr = []
  var stack = []
  stack.push(root)
  while(stack.length > 0) {
    var popValue = stack.pop()
    printArr.push(popValue.val)
    popValue.right && stack.push(popValue.right)
    popValue.left && stack.push(popValue.left)
  }
  return printArr
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root) {
    return [[root.val], levelOrder(root.left), levelOrder(root.right)]
  } else {
    return []
  }
};

console.log('levelOrder:', )


var levelOrder = function(root) {
  if(!root)
    return []
  var levels = [root]
  var result = []
  while(levels.length > 0){
    var n = levels.length
    // 每一层的迭代结果
    var currentResult = []
    // 每一层的迭代
    while( n-- > 0){
      // 弹出第一项
      var node = levels.shift()
      currentResult.push(node.val)
      node.left && levels.push(node.left)
      node.right && levels.push(node.right)
    }
    result.push(currentResult)
  }
  return result
};

// 层次遍历：采用队列的方式
var levelOrder1 = function(root) {
  if (!root) {
    return []
  }
  var levels = [root]
  var result = []
  while (levels.length > 0) {
    var n = levels.length
    var currentResult = []
    while (n-- > 0) {
      var node = levels.shift()
      currentResult.push(node.val)
      node.left && levels.push(node.left)
      node.right && levels.push(node.right)
    }
    result.push(currentResult)
  }
  return result
};

// 先序遍历：采用栈的方式
var preorderTraversal = function(root) {
  if (!root) {
    return []
  }
  var stack = []
  var resultArr = []
  stack.push(root)
  while (stack.length > 0) {
    var popValue = stack.pop()
    resultArr.push(popValue.val)
    popValue.right && stack.push(popValue.right)
    popValue.left && stack.push(popValue.left)
  }
  return resultArr
}


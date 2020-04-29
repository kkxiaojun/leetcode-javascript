/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  var leftDepth = maxDepth(root.left)
  var rightDepth =maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
};

console.log('root:', maxDepth([3,9,20,null,null,15,7]))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }
  sum -= root.val
  if (!root.left && !root.right) {
    return sum === 0
  }
  hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};

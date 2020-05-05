/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) {
    return null
  }
  var tmp = preorder[0]
  var mid = inorder.indexOf(tmp)
  var root = new TreeNode(tmp)
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 2), inorder.slice(mid + 1, inorder.length - 1))
  return root
};
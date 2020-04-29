# leetcode-javascript
[![Travis](https://img.shields.io/badge/language-JavaScript-yellow.svg)]()

leetcode 题解，记录自己的 leetcode 解题之路。

本仓库目前分为三个部分：

* 第一个部分是 leetcode 分类经典题目的解析，包括思路，关键点和具体的代码实现。

* 第二部分是对于数据结构的总结

* 第三部分是对于算法的总结

# leetcode 分类经典题目的解析
## 数组和字符串相关题目
简介：
**数组**是一种基本的数据结构，用于按顺序**存储元素的集合**。
特点：
1. 元素可以随机存取
2. 每个元素可以通过**索引**识别

**双指针**
一个指针从始端开始，而另一个指针从末端开始。

|题目|难度|
|--|--|
|[7. 整数反转](./arrAndString/7.md)|简单|
|[66. 加一](./arrAndString/66.md)|简单|
|[88. 合并两个有序数组](./arrAndString/88.md)|简单|
|[350. 两个数组的交集 II](./arrAndString/350.md)|简单|
|[704. 寻找数组的中心索引](./arrAndString/704.md)|简单|
|[747. 至少是其他数字两倍的最大数](./arrAndString/747.md)|简单|
|[67. 二进制求和](./arrAndString/67.md)|简单|
|[数组去重](./arrAndString/repeatArr.md)|-|
|[14. 最长公共前缀](./arrAndString/14.md)|简单|
|[344. 反正字符串](./arrAndString/344.md)|简单|

## 链表
|题目|难度|
|--|--|
|[707. 设计链表](./queueStack/linkList.md)|中等|
|[24. 反转链表](./queueStack/reverseLinkList.md)| 简单|

# 二分查找
|题目|难度|
|--|--|
|[平方根](./queueStack/平方根.md)|简单|
|[二分查找](./queueStack/二分查找.md)|简单|
|[面试题04：二维数组中的查找](./offer/04.md)|简单|

## 二叉树
|题目|难度|
|--|--|
|[前序遍历](./tree/前序遍历.md)|中等|
|[层次遍历](./tree/层次遍历.md)|中等|
|[二叉树的最大深度](./tree/二叉树的最大深度.md)|中等|
|[对称二叉树](./tree/对称二叉树.md)|简单|
|[路径总和](./tree/路径总和.md)|简单|

# 数据结构总结
## 队列和栈
**队列**
1. FIFO
2. 队列应支持两种操作：入队和出队。入队会向队列追加一个新元素，而出队会删除第一个元素。
3. 出队操作的时候需要O(n)的时间复杂度

**循环队列**
1. 队空判断：rear === front
2. 队满判断： (rear + 1) % len = front

**栈**
1. FILO

## linkList
1. 查找O(n)
2. 增加
3. 删除
4. 反转

## 哈希表
**哈希函数**

**冲突解决**
1.开放地址方法
2.链式地址法（HashMap的哈希冲突解决方法） 

## 二叉树
### 树的遍历
前序、中序、后续，谈的是根节点的访问顺序

深度优先搜索（DFS）
* 前序遍历
* 中序遍历
* 后序遍历

宽度优先搜索（BFS）
* 层序遍历

### 运用递归解决树的问题
总结：

1. “自顶向下” 的解决方案
```
private int answer;		// don't forget to initialize answer before call maximum_depth
private void maximum_depth(TreeNode root, int depth) {
    if (root == null) {
        return;
    }
    if (root.left == null && root.right == null) {
        answer = Math.max(answer, depth);
    }
    maximum_depth(root.left, depth + 1);
    maximum_depth(root.right, depth + 1);
}
```
2. “自底向上” 的解决方案
```
public int maximum_depth(TreeNode root) {
	if (root == null) {
		return 0;                                   // return 0 for null node
	}
	int left_depth = maximum_depth(root.left);
	int right_depth = maximum_depth(root.right);
	return Math.max(left_depth, right_depth) + 1;	// return depth of the subtree rooted at root
}
```

了解递归并利用递归解决问题并不容易。
当遇到树问题时，请先思考一下两个问题：

1. 你能确定一些参数，从该节点自身解决出发寻找答案吗？
2. 你可以使用这些参数和节点本身的值来决定什么应该是传递给它子节点的参数吗？

如果答案都是肯定的，那么请尝试使用 “自顶向下” 的递归来解决此问题。

或者你可以这样思考：对于树中的任意一个节点，如果你知道它子节点的答案，你能计算出该节点的答案吗？ 

如果答案是肯定的，那么 “自底向上” 的递归可能是一个不错的解决方法。

在接下来的章节中，我们将提供几个经典例题，以帮助你更好地理解树的结构和递归。

# 算法总结
## 二分查找
二分查找是一种基于比较目标值和数组中间元素的教科书式算法。

* 如果目标值等于中间元素，则找到目标值。
* 如果目标值较小，继续在左侧搜索。
* 如果目标值较大，则继续在右侧搜索。

算法：
* 初始化指针 left = 0, right = n - 1。
* 当 left <= right：
  * 比较中间元素 nums[pivot] 和目标值 target 。
    * 如果 target = nums[pivot]，返回 pivot。
    * 如果 target < nums[pivot]，则在左侧继续搜索 right = pivot - 1。
    * 如果 target > nums[pivot]，则在右侧继续搜索 left = pivot + 1。

二分查找一般由三个主要部分组成：

1. 预处理 —— 如果集合未排序，则进行排序。

2. 二分查找 —— 使用循环或递归在每次比较后将查找空间划分为两半。

3. 后处理 —— 在剩余空间中确定可行的候选者。

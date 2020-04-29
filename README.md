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
|[344. 反正字符串](./arrAndString/344.md)|简单|[707. 设计链表](./queueStack/linkList.md)｜中等｜
|[24. 反转链表](./queueStack/reverseLinkList.md)| 简单|
|[平方根](./queueStack/平方根.md)|简单|
|[二分查找](./queueStack/二分查找.md)|简单|
|[面试题04：二维数组中的查找](./offer/04.md)|简单|


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
* 前序遍历
* 中序遍历
* 后序遍历

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

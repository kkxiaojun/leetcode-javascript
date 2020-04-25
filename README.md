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
|[350. 两个数组的交集 II](./arrAndString/350.md)|简单|
|[704. 寻找数组的中心索引](./arrAndString/704.md)|简单|
|[747. 至少是其他数字两倍的最大数](./arrAndString/747.md)|简单|
|[67. 二进制求和](./arrAndString/67.md)|简单|
|[数组去重](./arrAndString/repeatArr.md)|-|
|[14. 最长公共前缀](./arrAndString/14.md)|简单|
|[344. 反正字符串](./arrAndString/344.md)|简单|[707. 设计链表](./queueStack/linkList.md)｜中等｜
|[24. 反转链表](./queueStack/reverseLinkList.md)| 简单|


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

**linkList**
1. 查找O(n)

## 哈希表
**哈希函数**

**冲突解决**
1.开放地址方法
2.链式地址法（HashMap的哈希冲突解决方法） 


# 算法总结
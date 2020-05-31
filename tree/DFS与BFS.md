# DFS
```
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  if(!root) {
    return
  }
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
```

# BFS
```
function BFS(root) {
  if(!root){
    return
  }
  const queue = []
  queue.push(root)
  while(queue.length) {
    const top = queue[0]
    top.left && queue.push(top.left)
    top.right && queue.push(top.right)
    queue.shift()
  }
}
``

# 递归与回溯思想在真题中的应用

1. 找出不变量
2. 分析递归式
3. 分析递归边界

## 全排列问题

题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

```
示例：   
输入: [1,2,3]
输出: [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

思路：
1. 不变量，坑位总是三个
2. 递归式：手里剩下的数字有哪些
3. 递归边界：递归式：不超出边界，即len

```
 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const permute = function(nums) {
  // 存储数组长度
  let len = nums.length
  // 结果数组
  let result = []
  if (len === 0) {
    return result
  }
  // 记录数字是否使用过
  let visited = {}
  // 当前左右的排列顺序
  let cur = []
  // 当前的排列内容
  function dfs(nth) {
    if (nth === len) {
      // 深拷贝
      result.push(cur.slice())
      return
    }
    for (let i = 0; i < len; i++) {
      // 已经用过的数字不再占坑
      if (visited[nums[i]]) {
        continue
      }
      // 推入当前顺序
      cur.push(nums[i])
      // 标记已使用
      visited[nums[i]] = true
      // 基于这个坑，继续下一个坑
      dfs(nth+1)
      // 回溯
      cur.pop()
      // 重置状态
      visited[nums[i]] = false
    }
  }
  dfs(0)
  return result
}
```

## 组合问题

题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

```
示例: 输入: nums = [1,2,3]
输出:
[
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
]
```

1. 不变量：3个坑位，每位数字出现或者不出现
2. 递归式：手里剩下的数字有哪些
3. 递归边界：递归式：不超出边界，即len

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const subsets = function(nums) {
  let len = nums.length
  let result = []
  if (!len) {
    return result
  }
  // 组合数组
  let subset = []
  dfs(0)
  function dfs(index) {
    result.push(subset.slice())
    for (let i = index; i < len; i++) {
      subset.push(nums[i])
      dfs(i + 1)
      subset.pop()
    }
  }
  return result
}
```

## 限定组合问题：及时回溯，即为“剪枝”

题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

```
示例: 输入: n = 4, k = 2
输出:
[
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
]
```
1. 不变量：坑位n，转化为树结构
2. 递归式：当且仅当组合内数字个数为 k 个时，才会对组合结果数组进行更新。
3. 递归边界：只要组合内数字个数达到了 k 个，就不再继续当前的路径往下遍历，而是直接返回。

```
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 结果数组
    let result = []
    // 组合数组
    let subset = []
    dfs(1)
    // 递归式
    function dfs(index) {
        if(subset.length === k){
            result.push(subset.slice())
            return
        }
        for (let i = index; i<= n; i++) {
            subset.push(i)
            dfs(i+1)
            subset.pop()
        }
    }
    return result
};
```

# 递归与回溯问题——解题模板总结

如何总结出一套解题模板？其实很简单，大家只需要搞清楚三个问题：

1. 什么时候用？（明确场景）
2. 为什么这样用？（提供依据）
3. 怎么用？（细化步骤）

**什么时候用**

看两个特征：

1. 题目中暗示了一个或多个解，并且要求我们详尽地列举出每一个解的内容时，一定要想到 DFS、想到递归回溯。
2. 题目经分析后，可以转化为树形逻辑模型求解。

**为什么这样用**

递归与回溯的过程，本身就是穷举的过程。题目中要求我们列举每一个解的内容，解从哪来？解是基于穷举思想、对搜索树进行恰当地剪枝后得来的。

<font color=red>这里需要大家注意到另一种问法：不问解的内容，只问解的个数。这类问题往往不用 DFS 来解，而是用动态规划（我们后面会学）。这里，大家先记下这个辨析，对以后做题会有帮助。</font>

**怎么用**

1. 一个模型——树形逻辑模型；
2. 两个要点——递归式和递归边界。

树形逻辑模型的构建，关键在于找“坑位”，一个坑位就对应树中的一层，每一层的处理逻辑往往是一样的，这个逻辑就是递归式的内容。至于递归边界，要么在题目中约束得非常清楚、要么默认为“坑位”数量的边界。  

用伪代码总结一下编码形式，大部分的题解都符合以下特征：

```javascript
function xxx(入参) {
  前期的变量定义、缓存等准备工作 
  
  // 定义路径栈
  const path = []
  
  // 进入 dfs
  dfs(起点)
  
  // 定义 dfs
  dfs(递归参数) {
    if(到达了递归边界) {
      结合题意处理边界逻辑，往往和 path 内容有关
      return
    }
    
    // 注意这里也可能不是 for，视题意决定
    for(遍历坑位的可选值) {
      path.push(当前选中值)
      处理坑位本身的相关逻辑
      path.pop()
    }
  }
}

```
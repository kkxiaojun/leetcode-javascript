# 排序算法
## 排序算法js实现

要使用的工具函数
```javascript
function isArray(arr){
    if (typeof Array.isArray === 'function'){
        return Array.isArray(arr);
    } else{
        return Object.prototype.toString.call(arr) === '[object Array]'; 
    }
}
```
### 冒泡排序

时间复杂度：O(n^2)

**原理**

它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成

**步骤**

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

3. 针对所有的元素重复以上的步骤，除了最后一个。

4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

**代码实现**
```javascript
// 对还未排序的全部数，自左向右对相邻的两个数进行对比，较大的数往下沉，较小的数往上冒泡
function bubbleSort(arr) {
    if (!isArray(arr) || !arr.length) {
        return;
    }
    let temp = null, len = arr.length;
    for (let i = 0; i < len - 1; i++) { // 每循环一次，就确定一个相对最大元素
        for (let j = 1; j < len -i; j++) { // 内层：有i个已经排好序，剩下：len - 1 -i 个需要排序 
            if (arr[j-1] > arr [j]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// 改进：对于后面已经排好序的数进行记录，下一次不再进行比较
function bubbleSort2(arr) {
    if (!isArray(arr) || !arr.length) {
        return;
    }
    let temp = null, pos = arr.length, end = arr.length;
    for (let i = 0; i < arr.length; i++) {
        end = pos;
        for (let j = 1; j < end; j++) {
            if (arr[j-1] > arr [j]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                pos = j;
            }
        }
    }
    return arr;
}
// 改进：从左右两边，正反向分别冒泡
function bubbleSort3(arr) {
    var low = 0;
    var high = arr.length - 1; //设置变量的初始值
    var tmp, j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j = low; j < high; ++j) //正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            --high; //修改high值, 前移一位
        for (j = high; j > low; --j) //反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
            ++low; //修改low值,后移一位
    }
    return arr;
}
```
### 选择排序

时间复杂度：O(n^2)

**原理**

简单选择排序的基本思想非常简单，即：第一趟，从 n 个元素中找出关键字最小的元素与第一个元素交换；第二趟，在从第二个元素开始的 n-1 个元素中再选出关键字最小的元素与第二个元素交换；如此，第 k 趟，则从第 k 个元素开始的 n-k+1 个元素中选出关键字最小的元素与第 k 个元素交换，直到整个序列按关键字有序。

**步骤**

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

3. 重复第二步，直到所有元素均排序完毕。

**代码实现**
```javascript
function selectionSort(arr) {
    if (!isArray(arr) || !arr.length) {
        return;
    }
    let minItemIndex = 0, temp = null, len = arr.length;
    for (let i = 0; i < len; i++) {
        minItemIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minItemIndex] > arr[j]) {
                minItemIndex = j;
            }
        }
        if (i !== minItemIndex) {
            temp = arr[minItemIndex];
            arr[minItemIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
```
### 插入排序
时间复杂度：O(n^2)

**原理**

原理是通过构建有序序列，对于未排序的数据，在已排序序列中从后向前扫描，找到相应位置并插入

**步骤**

1. 将第一个待排序序列看作是一个有序序列，把第二个到最后一个看作是一个无序序列
2. 从头到尾依次扫描未排序序列，将扫描到的元素插入到适当的位置

**代码实现**

```javascript
  // 原理是通过构建youxuxulie，对于未排序的数据，在已排序序列中从后向前扫描，找到相应位置并插入
  function insertionSort(arr) {
  if (!isArray(arr) || !arr.length) {
      return;
  }
    // 缓存数组长度
    const len = arr.length
    // temp 用来保存当前需要插入的元素
    let temp  
    // i用于标识每次被插入的元素的索引
    for(let i = 1;i < len; i++) {
      // j用于帮助 temp 寻找自己应该有的定位
      let j = i
      temp = arr[i]  
      // 判断 j 前面一个元素是否比 temp 大
      while(j > 0 && arr[j-1] > temp) {
        // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
        arr[j] = arr[j-1]   
        j--
      }
      // 循环让位，最后得到的 j 就是 temp 的正确索引
      arr[j] = temp
    }
    return arr
  }
```

## 分治思想

“分治”，分而治之。其思想就是将一个大问题分解为若干个子问题，针对子问题分别求解后，再将子问题的解整合为大问题的解。

利用分治思想解决问题，我们一般分三步走：

1. 分解子问题
2. 求解每个子问题
3. 合并子问题的解，得出大问题的解

### 归并排序

时间复杂度：O(nlog(n))

```javascript
function merge(arr1, arr2) {
  // 初始化两个指针，分别指向 arr1 和 arr2
  let i = 0, j = 0   
  // 初始化结果数组
  const res = []    
  // 缓存arr1的长度
  const len1 = arr1.length  
  // 缓存arr2的长度
  const len2 = arr2.length  
  // 合并两个子数组
  while(i < len1 && j < len2) {
      if(arr1[i] < arr2[j]) {
          res.push(arr1[i])
          i++
      } else {
          res.push(arr2[j])
          j++
      }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if(i<len1) {
      return res.concat(arr1.slice(i))
  } else {
      return res.concat(arr2.slice(j))
  }
}

const mergeSort = function(arr) {
  const len = arr.length
  if(len < 2) {
    return arr
  }
  let mid = Math.floor(len / 2)
  let left = mergeSort(arr.slice(0, mid))
  console.log('left:', left)
  let right = mergeSort(arr.slice(mid, len))
  console.log('arr', right)
  arr = merge(left, right)
  return arr
}
```

### 快速排序
时间复杂度：O(nlog(n))

快速排序在基本思想上和归并排序是一致的，仍然坚持“分而治之”的原则不动摇。区别在于，快速排序并不会把真的数组分割开来再合并到一个新数组中去，而是直接在原有的数组内部进行排序。 

```
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 定义递归边界，若子数组只有一个元素，则没有排序必要
  if(arr.length > 1) {
      // 计算当前数组的基准值
      const nextPivot = partition(arr, left, right)  
      // 如果左边子数组的长度不小于1，则递归快排这个子数组
      if(left < nextPivot-1) {
          quickSort(arr, left, nextPivot-1)
      }
      // 如果右边子数组的长度不小于1，则递归快排这个子数组
      if(nextPivot<right) {
          quickSort(arr, nextPivot, right)
      }
  }
  return arr
}   
// 寻找基准值的过程
function partition(arr, left, right) {
  // 基准值默认取中间位置的元素
  let pivotValue = arr[Math.floor(left + (right-left)/2)]
  // 初始化左右指针
  let i = left 
  let j = right  
  // 当左右指针不越界时，循环执行以下逻辑
  while(i<=j) {
      // 左指针所指元素若不大于基准值，则右移左指针
      while(arr[i] < pivotValue) {
          i++
      }
      // 右指针所指元素若不小于基准值，则左移右指针
      while(arr[j]>pivotValue) {
          j--
      }

      // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
      if(i<=j) {
          swap(arr, i, j)  
          i++  
          j--
      }
      
  }
  // 返回左指针索引作为下一个基准值的索引
  return i
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
```
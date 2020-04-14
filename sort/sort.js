/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // 时间复杂度O(n)
  let numsMap = new Map()
  // 先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。
  for (let index = 0; index < nums1.length; index++) {
    let key = nums1[index]
    if(numsMap.has(key)) {
      numsMap.set(key, numsMap.get(key) + 1)
    } else {
      numsMap.set(key, 1)
    }
  }
  // 遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组result里。
  // 如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。
  // 如果value值等于1，则result删除该元素。
  let result = []
  for (let index = 0; index < nums2.length; index++) {
    let key = nums2[index]
    if (numsMap.has(key)) {
      result.push(key)
      if (numsMap.get(key) > 1) {
        numsMap.set(key, numsMap.get(key) - 1)
      } else {
        numsMap.delete(key)
      }
    }
  }
  return result
};


// 解法二：暴力法
// 遍历数组长度小的数组
// 遍历第一个数组，然后在第二个数组查找是否有当前元素。
// 如果有，把当前元素push进返回值。然后把第二个数组里该下标元素删除。
var intersect1 = function(nums1, nums2) {
  let result = [];
  if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  for (let i = 0; i < nums1.length; i++) {
    let key = nums2.indexOf(nums1[i]);
    if (key !== -1) result.push(nums2.splice(key, 1));
  }
  return result;
};

/**
 * 寻找数组的中心索引
 * @param {number[]} nums
 * @return {number}
 * 解法1
 * 思路：动态计算index左边和右边的和，当left == right满足时，break
 * 时间复杂度：O(n^2)
 */
var pivotIndex = function(nums) {
  var len = nums.length
  var result = -1
  var reducer = function (a, b) { return a + b }
  for (let index = 0; index < len; index++) {
    // the left sums 
    var leftSums = nums.slice(0, index + 1).reduce(reducer)
    // the right sums
    var rightSums = nums.slice(index, len).reduce(reducer)
    // if leftSums === rightSums break
    if (leftSums === rightSums) {
      result = index
      break
    }
  }
  return result
};
var nums = [1, 7, 3, 6, 5, 6]

/**
 * 寻找数组的中心索引
 * @param {number[]} nums
 * @return {number}
 * 解法2
 * 思路：
 * 数组的和S，当满足中心索引时：S - nums[i] - leftSums == leftSums
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var pivotIndex1 = function(nums) {
  var len = nums.length
  var S = 0
  for (var i = 0; i< len; i++) {
      S += nums[i]
  }
  var leftSums = 0
  for (let index = 0; index < len; index++) {
    if (leftSums === (S - nums[index] - leftSums)) {
      return index
    }
    leftSums += nums[index]
  }
  return -1
};
var nums1 = [1, 7, 3, 6, 5, 6]

/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度：O(n)
 */
var dominantIndex = function(nums) {
  var max = Math.max(...nums)
  var maxIndex = nums.indexOf(max)
  nums.splice(maxIndex, 1)
  var secondMax = Math.max(...nums)
  if (secondMax * 2 <= max) {
    return maxIndex
  }
  return -1
};

var dominantIndex1 = function(nums) {
  var max = Math.max(...nums)
  var maxIndex = nums.indexOf(max)
  for (let i = 0; i < nums.length; i++) {
    if (maxIndex !== i && nums[i] * 2 > max) {
      return -1
    }
  }
  return maxIndex
};

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1, 2, 3, 4]))

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    if ((digits[i] % 10) !== 0) {
      return digits
    }
  }
  digits = [...Array(len + 1)].map(_=>0)
  digits[0] = 1
  return digits
};

/**
 * @param {string} a 
 * @param {string} b
 * @return {string}
 * 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 1
 */
var addBinary = function(a, b) {
  // 最终结果
  var result = ''
  // 是否进一位
  var lastCa = 0
  for (var i = a.length - 1, j = b.length -1; i >=0 || j >= 0; i--, j--) {
    var sum = lastCa
    sum += (i >= 0 ? parseInt(a[i]) : 0 )
    sum += (j >= 0 ? parseInt(b[j]) : 0 )
    // sum可能值为 0，1，2，3，当为2，则取0，为3取1
    result += sum % 2
    // 是否进位，sum：0，1不进，2，3进位
    lastCa = Math.floor(sum / 2)
  }
  // 最后一位是否有进位
  result += lastCa === 1 ? lastCa : ''
  return result.split('').reverse().join('')
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * indexOf的实现
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i
    }
  }
  return -1
};
strStr('mississippi', 'issip')

/**
 * @param {Array} arr
 * 数组去重
 * 时间复杂度O(n^2)
 */
var repeatArr = function(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
};

/**
 * @param {Array} arr
 * 数组去重
 * 时间复杂度O(n)
 */
var repeatArr1 = function(arr) {
  var obj = {}
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      newArr.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  return newArr
};

var repeatArr2 = function(arr) {
  var objMap = new Map()
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!objMap.has(arr[i])) {
      newArr.push(arr[i])
      objMap.set(arr[i], true)
    }
  }
  return newArr
};
console.log('repeatArr1:', repeatArr1([1,2,1, true, 'true']))

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  // 找出最短的字符串
  var minIndex = 0
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length < strs[minIndex].length) {
      minIndex = i
    }
  }
  // 将最短的字符串设置为公共前缀
  var comonStr = strs[minIndex]
  // 进行截取比较
  for (var i = 0; i < strs.length; i++) {
    for (var j = 0; j < strs[i].length && j < strs[minIndex].length; j++) {
      if (comonStr[j] !== strs[i][j]) {
        break
      }
    }
    comonStr = strs[i].substr(0, j)
    if (comonStr.length === 0) {
      return ''
    }
  }
  return comonStr
};

console.log('longestCommonPrefix:', longestCommonPrefix(["flower","flow","flight"]))
console.log('longestCommonPrefix1:', longestCommonPrefix(''))
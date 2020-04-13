# 数组去重
1. indexOf
```javascript
/**
 * @param {Array} arr
 * 数组去重indexOf、includes
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
```
2. 对象属性Object， key只能是字符串，会有bug
```javascript
/**
 * @param {Array} arr
 * 数组去重
 * 时间复杂度O(n)
 */
var repeatArr = function(arr) {
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

console.log('repeatArr:', repeatArr([1,2,1, true, 'true']))
// [1, 2, true] 把true和'true'都当成string处理了
```

3. Map，  key可以是任意类型
```javascript
/**
 * @param {Array} arr
 * 数组去重
 * 时间复杂度O(n)
 */
var repeatArr = function(arr) {
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
console.log('repeatArr:', repeatArr([1,2,1, true, 'true']))
// [1, 2, true, "true"]
```

4. Set
```
[...new Set(arr)]

Array.from(new Set(arr))
```


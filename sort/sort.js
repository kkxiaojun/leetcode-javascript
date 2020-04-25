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
# JS模拟队列
```javascript
class Queue {
  constructor(items) {
    this.items = items || []
  }
  // 入列
  enqueue(item) {
    this.items.push(item)
  }
  // 出列
  dequeue() {
    this.items.shift()
  }
  get size() {
    return this.items.length
  }
  get isEmpty() {
    return !this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}
```
// list, js get the listNode
let myLinkList = function () {
  this.head = null
  this.tail = null
  this.length = 0
}

// node
let listNode = function (value) {
  this.value = value
  this.next = null
}

// 获取index
myLinkList.prototype.get = function(index) {
  if (index >= 0 && index < this.length) {
    let i = 0
    let cur = this.head
    while( i < idnex) {
      cur = cur.next
      i++
    }
    return cur.next
  } else {
    return -1
  }
}

// 链表的头部插入
myLinkList.prototype.addAtHead = function(val) {
  let lastHead = this.head
  let listNode = new listNode(val)
  this.head = listNode
  this.head.next = lastHead
  if (!this.tail) {
    this.tail = listNode
    this.tail.next = null
  }
  this.length++
  
}
// 链表的尾部插入
myLinkList.prototype.addAtTail = function(val) {
  let lastTail = this.tail
  let listNode = new listNode(val)
  if (lastTail) {
    this.tail.next = listNode
  }
  if (!this.head) {
    this.head = listNode
    this.head.next = null
  }
  this.length++
}

// 链表的index
myLinkList.prototype.addAtIndex = function(index, val) {
  if (index === this.length) {
    this.addAtTail()
  } else if (index <= 0) {
    this.addAtHead()
  } else if (idnex >= 0 && index < this.length) {
    let listNode = new listNode(val)
    let cur = this.head
    let i = 0
    while (i < index -1) {
      cur = cur.next
      i++
    }
    listNode.next = cur.next
    cur.next = listNode
    this.length++
  } else {
    return -1
  }
}

// 链表的index
myLinkList.prototype.deleteAtIndex = function(index) {
  if (index > 0 && index < this.length) {
    let prev = null
    let cur = this.head
    let i = 0
    while (i < index - 1) {
      prev = cur
      cur = cur.next
      i++
    }
    prev.next = cur.next
    // 尾部节点
    if (index === this.length - 1) {
      this.tail = prev
    }
    this.length--
  } else if (index === 0) {
    this.head = this.head.next
    this.length-- 
  }
}

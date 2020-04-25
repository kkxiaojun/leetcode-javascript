# 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:
```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

限制：

0 <= 节点个数 <= 5000

解答：
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var pre = head
  var cur = null
  while(pre !== null) {
    var curnext = pre.next
    pre.next = cur
    cur = pre
    pre = curnext
  }
  return cur
};
```
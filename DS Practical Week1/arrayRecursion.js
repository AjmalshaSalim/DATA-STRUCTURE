function deleteValueFromLinkedList(value) {
    let currentNode = this.head;
    let previousNode = null;
  
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
      } else {
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  
    return this.head;
  }
const Node = require('./Node');

class BinaryTree {
  constructor(arr) {
    if (!Array.isArray(arr) || !arr.length) {
      throw new Error('Invalid argument to create a Binary Tre');
    }
    this.root = this.createBinaryTree((this.root = null), arr, 0);
  }

  // eslint-disable-next-line class-methods-use-this
  createBinaryTree(root, arr, i) {
    if (i < arr.length) {
      // eslint-disable-next-line no-param-reassign
      root = new Node(arr[i]);
      // eslint-disable-next-line no-param-reassign
      root.leftChild = this.createBinaryTree(root.leftChild, arr, 2 * i + 1);
      // eslint-disable-next-line no-param-reassign
      root.rightChild = this.createBinaryTree(root.rightChild, arr, 2 * i + 2);
    }
    return root;
  }

  traversePreorder(root) {
    let arr = [];

    if (root === null) return arr;
    // push node to arr
    arr.push(root.value);

    // push left node
    const left = this.traversePreorder(root.leftChild);
    arr = [...arr, ...left];

    // push right node
    const right = this.traversePreorder(root.rightChild);
    arr = [...arr, ...right];

    return arr;
  }

  traverseZigZag(root){
      let arr=[];
      let stack1=[];
      let stack2=[];

      stack1.push(root);
      while(stack1.length!==0 || stack2.length!==0)
      {
        while(stack1.length!==0)
        {
          let top=stack1[stack1.length-1];
          if(top==null)
          {
            stack1.pop();
            continue;
          }
        
          arr.push(top.value);
          stack2.push(top.leftChild);
          stack2.push(top.rightChild);
          stack1.pop();
        }
        while(stack2.length!==0)
        {
          let top=stack2[stack2.length-1];
          if(top==null)
          {
            stack2.pop();
            continue;
          }
          arr.push(top.value);
          stack1.push(top.leftChild);
          stack1.push(top.rightChild);
          stack2.pop();
        }
      }
      return arr;
  }
  
  preOrder() {
    return this.traversePreorder(this.root);
  }
}

//const bt = new BinaryTree([1, 2, 3, 4, 5, 6]);
// console.log(bt.root);
//console.log(bt.traverseZigZag(bt.root));

// const bt = new BinaryTree([1, 2, 3, 4, 5, 6]);
// console.log(bt.root);
// console.log(bt.preOrder());


module.exports = BinaryTree;

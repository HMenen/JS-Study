// TODO 请在这里编写代码
//实现一个树结构，同时实现查询新增、查询节点的操作

class Node() {
	constructor(obj: Object) {
    	this.node = obj;
        this.children = []; // null
    }
}

class Tree {
	constructor(...args) {
        // ...args
    	this.queue = []; // Node list
    }
    
    add(node: Node) {
        // this.queue.push();
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
            let node = queue.shift();
            if (node.left === null || node.right === null) {
                node.left? node.left = node: node.right = node;
                return;
            } else {
             	queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    
    query(value) {
        // this.queue.query();
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
        	let node = queue.shift();
            if (node.value === value){
                return node;
            }
            queue.push(node.left);
            queue.push(node.right);
        }
        return null;
    }
}

let tree = new Tree(...args);
tree.add(new Node);
tree.query(nodeId);

class Queue
{
	constructor()
	{
		this.items = [];
	}

	enqueue(item)
	{
		this.items.push(item);
	}

	dequeue(){
		//remove element from the queue
		if(this.isEmpty()){
			return "No element in Queue";
		}
		return this.items.shift();
	}

	top()
	{
		if(this.isEmpty()){
			return "Empty Queue";
		}
		return this.items[0];
	}


	isEmpty(){
		if(this.items.length == 0){
			return true;
		}
		else{
			return false;
		}
	}

	getQueue(){
		return this.items;
	}
}

// Implementation
var queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));

queue.getQueue();
console.log(queue.dequeue(3));

queue.getQueue();
console.log(queue.dequeue(4));

queue.getQueue();
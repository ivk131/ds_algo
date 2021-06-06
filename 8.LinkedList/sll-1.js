// print: 10->20->30

class Node{
    constructor(value){
        this.value = value,
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head = null,
        this.size =0
    }

    append(value){
        let newNode = new Node(value);
        if(this.head){
            this.head = newNode;
        }
        return this.size++
    }

    printData(){
        if(!this.size) return `Empty list`;

        while(this.head){
            console.log()
        }
    }
}
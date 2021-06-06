class HashTable{
    constructor(size){
        this.data = new Array(size);
        // this.data = [];
    }
     // Private 
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash = (hash +key.charCodeAt(i)*i )%this.data.length
        }
        return hash;
    }



}


const myHashTable = new HashTable(50);
myHashTable.set('graps',10000);
myHashTable.get('graps');


class HashTable{
    constructor(size){
        this.array=new Array(size);
        this.size=size;
    }
Hashing(key){
    let sum=0;
    for(let i=0;i<key.length;i++){
        sum=sum+key.charCodeAt(i);
        let hashCode=sum%this.size;
        return hashCode;
    }
}
insert(key,value){
    let index=this.Hashing(key);
    this.array[index]=value;
    
}

get(key){
    let index=this.Hashing(key);
    console.log(this.array[index]+" is the "+key);
}
}
const ht=new HashTable(5);
ht.insert("car","GTR");
ht.insert("bike","Ninja");
ht.get("bike");

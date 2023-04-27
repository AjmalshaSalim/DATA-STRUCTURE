class Hashtable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }

    HashKey(key){
        let sum=0;
        for(let i=0;i<key.length;i++){
            sum+=key.charCodeAt(i);
        }
            return sum % this.size;
    }

    Insert(key,value){
let index=this.HashKey(key);
this.table[index]=value;
    }

    get(key){
        let index=this.HashKey(key);
        console.log(this.table[index]);
    }

    print(){
        for(let i=0;i<this.size;i++){
            console.log(this.table[i]);
        }
    }
}
const Hash=new Hashtable(5);
Hash.Insert("car","Swift");
Hash.Insert("bike","Duke");
Hash.Insert("flight","Benz");
//Hash.get("car");
Hash.print();









// let key ="bus";
// let sum=0;
// let code=0;
// for(let i=0;i<key.length;i++){
//     console.log(key.charCodeAt(i));
//      sum+=key.charCodeAt(i);
// }
// console.log(sum+"*  "+key);
// code=sum%5;
// console.log(code+"&");
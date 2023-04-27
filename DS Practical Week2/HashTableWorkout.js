class hashtable{
    constructor(size){
this. table =new Array(size);
this. size =size;
    }
    Hash(key){
        let hashcode=0;
        for(let i=0;i<key.length;i++){
        hashcode+=key.charCodeAt(i);
        }
        return hashcode%this.size;
    }

    set(key,value){
        let index=this.Hash(key);
        this.table[index]=value;
    }

    get(key){
        let index=this.Hash(key);
        console.log(this.table[index]);
    }

    printtable(){
        for(let i=0;i<this.size;i++){
            console.log(this.table[i]);
        }
    }
    remove(key){
        let index=this.Hash(key);
        this.table[index]=undefined;
    }

    // colSet(key,value){
    //     let index=this.Hash(key);
    //     let bucket=this.table[index];
    //     if(!bucket){
    //         this.table[index]=[[key,value]];
    //     }else{
    //          const SameKey=bucket.find(item=>item[0]===key);
    //     }
    //     if(sameKey){
    //         sameKey[1]=value;
    //     }else{
    //         bucket.push([key,value])
    //     }
    // }
        }

let hash=new hashtable(12);
//hash.set("car","range rover");
hash.colSet("model","evoque");
hash.colSet("delmo","8000bhp");
//hash.get("car");
//hash.remove("power");

hash.printtable();
class hashtable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    Hashing(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
            return sum % this.size;
        }
    }

    add(key,value){
        let index=this.Hashing(key);
        this.table[index]=value;
    }

    get(key){
        let index=this.Hashing(key);
        console.log(this.table(index));
    }

    print(){
        for(let i=0;i<this.size;i++){
            console.log(this.table[i]);
        }
    }
}
let hash=new hashtable(10);
hash.add("ACTION","PUBG - CALL OF DUTY");
hash.add("SURVIVAL","LAST MEN ON EARTH - WORLD WAR");
hash.add("WAR","CLASH OF CLANS - WAR OF LORDS");
hash.print();



const CardDB = function(){
    this.map = new Array();
}
const CardDB.prototype = {
    put: (key, value) =>{
        this.map[key] = value;
    },
    get: key => {
        return this.map[key];
    },
    getAll: () =>{
        return this.map;
    },
    clear: () =>{
        this.map = new Array();
    },
    getKeys: () =>{

    },
    print: () =>{
        console.log(this.map);
    }
}

export default CardDB;
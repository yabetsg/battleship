export default class Ship{
    constructor(length,column,position){
        this.length = length;
        this.hits = [];
        this.position = position||[];
        this.column = column||[];
       
    }
    hit(hitPosition){
        // if(this.position.includes(hitPosition)&& !(this.hits.includes(hitPosition))){
            this.hits.push(hitPosition);
        //}
        
    }

    allShipSunk(){
        if(this.hits.length===16){
            return true;
        }
        return false;
    }
}


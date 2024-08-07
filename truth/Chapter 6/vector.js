class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    // had help
    plus(vector) {
        let x_param = vector.x + this.x;
        let y_param = vector.y + this.y;
        const newVec = new Vec(x_param,y_param);
        return newVec;
    }


    minus(vector) {
        let x_param = vector.x - this.x;
        let y_param = vector.y - this.y;
        const newVec = new Vec(x_param,y_param);
        return newVec;
    }

    
}

// had lots of help
Vec.prototype.length = function() {
        return ((this.x*this.x) + (this.y*this.y)) ** (1/2);
}


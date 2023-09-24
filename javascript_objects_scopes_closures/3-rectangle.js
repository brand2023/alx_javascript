#!/usr/bin/node
class Rectangle {
    constructor(w, h){
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            return "Rectangle {}";
        }
        this.width = w
        this.height = h
    }

    print() {
        for (row = 0; row < this.height; row++){
            console.log('X'.repeat(this.width))
        }
    }
}

module.exports = Rectangle;
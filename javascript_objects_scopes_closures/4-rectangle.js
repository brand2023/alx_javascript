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
        for (let i = 0; i < this.height; i++){
            console.log('X'.repeat(this.width))
        }
    }

    rotate() {
        for (let i = 0; i < this.width; i++){
            console.log('X'.repeat(this.height))
        }
    }

    double() {
        for (let i = 0; i < this.width*2; i++){
            console.log('X'.repeat(this.height*2))
        }
    }
}

module.exports = Rectangle;
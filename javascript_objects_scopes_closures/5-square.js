#!/usr/bin/node
const Base = require('./4-rectangle');
class Square extends Base{
    constructor (size){
        super(size, size)
    }
}



module.exports = Square;

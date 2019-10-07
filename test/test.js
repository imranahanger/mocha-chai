const assert = require('chai').assert;
const {sayHello,addNumbers} = require('../app')

describe('App',function(){
    describe('sayHello',function(){
        it('sayHello should return hello',function(){
            let result = sayHello()
            assert.equal(result,'hello');
        })
        it('sayHello should return type string',function(){
            let result  =sayHello();
            assert.typeOf(result,'string')
        })
    }),
    describe('addNumber',function(){
        it('addNumber should be above 5',function(){
            let result  = addNumbers(5,5);
            assert.isAbove(result,5);
        })
        it('addnumber should return type number',function(){
            let result = addNumbers();
            assert.typeOf(result,'number')
        })
    })
})
'use strict';

const { K21 } = require('@kontext21/k21');

async function basicExample() {
    const k21 = new K21();
    
    k21.setCapturer();
    k21.setProcessor();
    
    const result = await k21.run();
    console.log('Basic Example Result:', result);
}

module.exports = { basicExample }; 
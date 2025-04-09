'use strict';

const { K21 } = require('@kontext21/k21');

async function captureFromFilePathPngExample() {
    const k21 = new K21();

    k21.setCapturerFromFile({
        file: './resources/screenshot-2.png',
    });
    
    k21.setProcessor();
        
    const result = await k21.run();
    console.log('Capturer From File Example Result:', result);
}

module.exports = { captureFromFilePathPngExample }; 
'use strict';

const { K21 } = require('@kontext21/k21');

async function captureFromFilePathMp4Example() {
    const k21 = new K21();

    k21.setCapturerFromFile({
        file: './resources/output.mp4',
    });
    
    k21.setProcessor();
        
    const result = await k21.run();
    console.log('Capturer From File Example Result:', result);
}

module.exports = { captureFromFilePathMp4Example }; 
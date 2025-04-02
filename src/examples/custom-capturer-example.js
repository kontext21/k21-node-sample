'use strict';

const { K21 } = require('@kontext21/k21');

async function customCapturerExample() {
    const k21 = new K21();
    
    // Configure custom capturer settings
    k21.setCapturer({
        fps: 1,
        duration: 10,
        saveVideoTo: './',
        saveScreenshotTo: './',
        videoChunkDurationInSeconds: 5,
    });
    
    k21.setProcessor();
    
    const result = await k21.run();
    console.log('Custom Capturer Example Result:', result);
}

module.exports = { customCapturerExample }; 
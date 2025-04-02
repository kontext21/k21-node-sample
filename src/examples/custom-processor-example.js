'use strict';

const { K21 } = require('@kontext21/k21');

async function customProcessorExample() {
    const k21 = new K21();
    
    k21.setCapturer();
    
    // Configure custom processor settings
    k21.setProcessor({
        processingType: 'OCR',
        ocrConfig: {
            ocrModel: 'tesseract',
            boundingBoxes: false,
        },
    });
    
    const result = await k21.run();
    console.log('Custom Processor Example Result:', result);
}

module.exports = { customProcessorExample }; 
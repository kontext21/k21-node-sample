'use strict';

const { K21 } = require('@kontext21/k21');

async function visionExample() {
    const k21 = new K21();
    
    // Configure capturer for vision processing
    k21.setCapturer({
        fps: 1,
        duration: 15,
    });
    
    // Configure processor for vision analysis
    k21.setProcessor({
        processingType: 'Vision',
        visionConfig: {
            url: 'https://api.openai.com/v1/chat/completions',
            apiKey: '<your-api-key>',
            model: 'gpt-4-turbo',
            prompt: 'Detect all references to persons'
        },
    });
    
    const result = await k21.run();
    console.log('Vision Example Result:', result);
}

module.exports = { visionExample }; 
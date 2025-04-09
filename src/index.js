'use strict';

const { basicExample } = require('./examples/basic-example');
const { customCapturerExample } = require('./examples/custom-capturer-example');
const { customProcessorExample } = require('./examples/custom-processor-example');
const { visionExample } = require('./examples/vision-example');
const { captureFromFilePathMp4Example } = require('./examples/capture-from-file-mp4-example');
const { captureFromFilePathPngExample } = require('./examples/capture-from-file-png-example');
async function main() {
    console.log('Running K21 SDK Examples...\n');
    
    try {
        console.log('1. Running Basic Example:');
        await basicExample();
        console.log('\n2. Running Custom Capturer Example:');
        await customCapturerExample();
        console.log('\n3. Running Custom Processor Example:');
        await customProcessorExample();
        // console.log('\n4. Running Vision Example:'); // provide API key to run this example
        // await visionExample(); 
        // console.log('\n5. Running Capture From File Example:');
        // await captureFromFilePathMp4Example();
        // console.log('\n6. Running Capture From File PNG Example:');
        // await captureFromFilePathPngExample();
    } catch (error) {
        console.error('Error running examples:', error);
    }
}

main();
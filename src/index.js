'use strict';

const { basicExample } = require('./examples/basic-example');
const { customCapturerExample } = require('./examples/custom-capturer-example');
const { customProcessorExample } = require('./examples/custom-processor-example');
const { visionExample } = require('./examples/vision-example');

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
    } catch (error) {
        console.error('Error running examples:', error);
    }
}

main();
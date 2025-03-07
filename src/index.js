'use strict';

import { ping, checkScreenCapture } from "@kontext21/k21";

export async function performK21Ping() {
    try {
        const result = ping();
        return result;
    } catch (error) {
        console.error("Error in pinging Kontext21:", error);
        return "Error occurred during ping";
    }
}

async function performScreenCapture() {
    const result = await checkScreenCapture();
    return result;
}

async function main() {
    console.log('Pinging Kontext21...');
    performK21Ping();
    
    performScreenCapture();
}
  
main();
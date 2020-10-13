/// <reference path="../index.d.ts" />

let winswitcher;

// Runs on import / require
(function main() {
    try {
        const { platform } = process;
        winswitcher = require(`../build/Release/rinku_winswitcher-${platform}`);
    } catch (err) {
        console.error("Unsupported Platform! All primary functions won't work!");
    }
})()


function storeActiveWindow(): string {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }

    return winswitcher.storeActiveWindow();
}

function activateStoredWindow(): string {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }

    return winswitcher.activateStoredWindow();
}

function getActiveWindowTitle(): string {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }

    return winswitcher.getCurrentActiveWindowTitle();
}

function checkStoredWindow(): string {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }
    
    return winswitcher.checkStoredWindow();
}

export { storeActiveWindow, activateStoredWindow, getActiveWindowTitle, checkStoredWindow };
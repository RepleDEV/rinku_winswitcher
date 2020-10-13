/// <reference path="../index.d.ts" />

const winswitcher = require("../build/release/rinku_winswitcher.node");

function storeActiveWindow(): string {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }

    return winswitcher.storeActiveWindow();
}

function activateStoredWindow(): string {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }

    return winswitcher.activateStoredWindow();
}

function getActiveWindowTitle(): string {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }

    return winswitcher.getCurrentActiveWindowTitle();
}

function checkStoredWindow(): string {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }
    
    return winswitcher.checkStoredWindow();
}

export { storeActiveWindow, activateStoredWindow, getActiveWindowTitle, checkStoredWindow };
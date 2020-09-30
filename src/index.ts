/// <reference path="../index.d.ts" />

const winswitcher = require("../build/release/rinku_winswitcher.node");

function storeActiveWindow(): string {
    return winswitcher.storeActiveWindow();
}

function activateStoredWindow(): string {
    return winswitcher.activateStoredWindow();
}

function getActiveWindowTitle(): string {
    return winswitcher.getCurrentActiveWindowTitle();
}

function checkStoredWindow(): string {
    return winswitcher.checkStoredWindow();
}

export { storeActiveWindow, activateStoredWindow, getActiveWindowTitle, checkStoredWindow };
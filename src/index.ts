const winswitcher = require("");

class WinSwitcher {
    constructor() { }
    storeActiveWindow(): String {
        return winswitcher.storeActiveWindow();
    }
    activateStoredWindow(): String {
        return winswitcher.activateStoredWindow();
    }
    static getActiveWindowTitle(): String {
        return winswitcher.getCurrentActiveWindowTitle();
    }
    checkStoredWindow(): String {
        return winswitcher.checkStoredWindow();
    }
}

export = WinSwitcher;
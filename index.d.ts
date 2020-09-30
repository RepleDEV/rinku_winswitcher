/// <reference types="node" />

declare class WinManager {
    /**
     * Class Constructor
     */
    constructor();
    /**
     * Stores the current active window.
     */
    storeActiveWindow(): String;
    /**
     * Activates the window that has been stored.
     */
    activateStoredWindow(): String;
    /**
     * Gets current active window's title.
     */
    getActiveWindowTitle(): String;
    /**
     * Check the title of the stored window (if there's any).
     */
    checkStoredWindow(): String;
}

export = WinManager;
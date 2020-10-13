{
    "conditions": [
        ['OS=="win"', {
            "targets": [
                {
                    "target_name": "rinku_winswitcher-win32",
                    "sources": ["lib/windows.cc"]
                }
            ]
        }],
        ['os=="linux"', {
            "targets": [
                {
                    "target_name": "rinku_winswitcher-linux",
                    "sources": ["lib/linux.cc"]
                }
            ]
        }]
    ]
}
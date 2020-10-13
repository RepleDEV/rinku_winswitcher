{
    "conditions": [
        ['OS=="win"', {
            "targets": [
                {
                    "target_name": "rinku_winswitcher_win32",
                    "sources": ["lib/windows.cc"]
                }
            ]
        }],
        ['OS=="linux"', {
            "targets": [
                {
                    "target_name": "rinku_winswitcher_linux",
                    "sources": ["lib/linux.cc"]
                }
            ]
        }]
    ]
}

cmd_Release/rinku_winswitcher-linux.node := ln -f "Release/obj.target/rinku_winswitcher-linux.node" "Release/rinku_winswitcher-linux.node" 2>/dev/null || (rm -rf "Release/rinku_winswitcher-linux.node" && cp -af "Release/obj.target/rinku_winswitcher-linux.node" "Release/rinku_winswitcher-linux.node")
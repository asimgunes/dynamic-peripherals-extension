# Dynamic Peripherals Extension (Sample Project)

This is a sample project that includes implementation for loading the dynamic peripheral information to [Peripherals Viewer](https://marketplace.visualstudio.com/items?itemName=mcu-debug.peripheral-viewer) extension.

You can follow the guide below to build the extension and see the results in a sample project.

> Note that the implementation for loading the dynamic peripheral information still in review and not merged at the main project repository ([mcu-debug/peripheral-viewer](https://github.com/mcu-debug/peripheral-viewer)). You can find the implementation details here in [asimgunes/peripheral-viewer](https://github.com/asimgunes/peripheral-viewer) repository.

## Build the Extension Project

1. Open this project folder in VS Code.

2. Open the terminal and run the following commands for building the text package:

```bash
yarn 
yarn package
```

3. Install output VSIX package from the VS Code menu or simply run the following command to install the extension:

```bash
code --install-extension dynamic-peripherals-extension-0.0.1.vsix
```

## Testing the Extension

For testing purpose, we generate a sample Renesas RX project, running in simulator [here](https://github.com/asimgunes/sample-rx-project). For more details about the project you can visit the project github page.

### Setup Renesas Tools

First, you need to setup the Renesas tools to run the sample project.

1. Download and install the [Renesas Build Utilities](https://marketplace.visualstudio.com/items?itemName=RenesasElectronicsCorporation.renesas-build-utilities) and [Renesas Debug](https://marketplace.visualstudio.com/items?itemName=RenesasElectronicsCorporation.renesas-debug) extensions from the VS Code extension marketplace. Visit Renesas User Guide [here](http://tool-support.renesas.com/e2studio/vscode/docs/debug/index.html) for more information about installing dependent packages.

2. Download and install [GCC for Renesas 8.3.0 Toolchain](https://llvm-gcc-renesas.com/rx-download-toolchains/).

3. Include the bin folder of the GCC for Renesas 8.3.0 Toolchain to the PATH variable in enviroment variables.

### Running the sample project

1. Clone the sample project to local machine

```bash
$ git clone git@github.com:asimgunes/sample-rx-project.git 
```

```bash
$ code sample-rx-project 
```

3. Open the `.vscode/launch.json` file and replace the file content as described below:

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "renesas",
			"request": "launch",
			"name": "Renesas GDB Debugging",
			"peripherals": "command:dynamic-peripherals-extension.load-peripherals",
			"target": {
				"deviceFamily": "RX",
				"device": "R5F51115",
				"debuggerType": "SIMULATOR"
			}
		}
	]
}
```

4. Build the project in VS Code by using "Terminal" => "Run Build Task" menu.

5. Start debugging the project by using "Run" => "Start Debugging" menu.


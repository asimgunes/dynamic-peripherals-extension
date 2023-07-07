import { commands, DebugSession, ExtensionContext } from 'vscode';
import { getPeripherals } from './peripheralsProvider';

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "dynamic-peripherals-extension" is now active!');

	commands.registerCommand(
		'dynamic-peripherals-extension.load-peripherals',
		async (session: DebugSession) => {
			// Check the current launch configuration to detect 
			// the proper MCU type from "session.configuration" object
			// This is a sample line read the device from "target.device" field
			// from the launch configuration
			const device = session.configuration.target?.device; 

			// Return the peripherals data
			return getPeripherals(device);
		}
	)
}

export function deactivate() {}

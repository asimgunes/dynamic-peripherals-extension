import { PeripheralOptions } from "peripheral-viewer/src/types";

export const getPeripherals = (device: string): PeripheralOptions[] => {
	// Load your peripherals data delated to your device

	// This is a sample hard-coded data
	return [{
		name: "PORT1",
		baseAddress: 0x0008C001,
		description: "Peripherals PORT1",
		totalLength: 8,
		registers: [
			{
				addressOffset: 0,
				name: "PDR",
				size: 8
			}
		]
	}];
}
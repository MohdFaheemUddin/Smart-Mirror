/* SmartMirror Test default config for modules
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
exports.configFactory = (options) => {
	return Object.assign(
		{
			electronOptions: {
				webPreferences: {
					nodeIntegration: true,
					enableRemoteModule: true,
					contextIsolation: false
				}
			},

			modules: []
		},
		options
	);
};

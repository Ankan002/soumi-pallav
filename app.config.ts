export default {
	expo: {
		name: "Green Data",
		slug: "green-data",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		scheme: "myapp",
		userInterfaceStyle: "automatic",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			softwareKeyboardLayoutMode: "pan",
		},
		web: {
			bundler: "metro",
			favicon: "./assets/images/favicon.png",
		},
	},
};

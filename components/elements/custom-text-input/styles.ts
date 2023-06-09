import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Container: {
		width: "100%",
		padding: 5,
		marginTop: 5,
	},
	TitleText: {
		fontSize: 15,
		color: colors.black,
		letterSpacing: 2,
	},
	TextInput: {
		width: "100%",
		marginTop: 5,
		borderWidth: 2,
		borderColor: "#000",
		borderRadius: 15,
		fontSize: 19,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: colors.primaryGreen,
	},
});

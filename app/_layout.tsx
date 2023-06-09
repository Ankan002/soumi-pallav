import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { SecularOne_400Regular } from "@expo-google-fonts/secular-one";
import {
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
	Manrope_200ExtraLight,
	Manrope_300Light,
	Manrope_400Regular,
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_700Bold,
	Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import { LightNavigationTheme } from "theme";
import { authAtom } from "atoms";
import { QueryClientProvider, QueryClient } from "react-query";
import { verifyIsAuthenticated } from "helpers";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
	initialRouteName: "(auth)",
};

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SecularOne_400Regular,
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
		Manrope_200ExtraLight,
		Manrope_300Light,
		Manrope_400Regular,
		Manrope_500Medium,
		Manrope_600SemiBold,
		Manrope_700Bold,
		Manrope_800ExtraBold,
	});

	const reactQueryClient = new QueryClient();

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	return (
		<>
			{!loaded && <SplashScreen />}
			{loaded && (
				<RecoilRoot>
					<QueryClientProvider client={reactQueryClient}>
						<RootLayoutNav />
					</QueryClientProvider>
				</RecoilRoot>
			)}
		</>
	);
}

function RootLayoutNav() {
	const [isAuthenticated, setIsAuthenticated] = useRecoilState<boolean>(authAtom);
	const router = useRouter();
	const isMounted = useRef<boolean>(false);

	const onLoad = async () => {
		const isPreviouslyLoggedIn = await verifyIsAuthenticated();
		if (isPreviouslyLoggedIn) {
			setIsAuthenticated(true);
		}
	};

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("(auth)");
		} else {
			router.replace("(tabs)");
		}
	}, [isAuthenticated]);

	useEffect(() => {
		if (isMounted.current) return;

		isMounted.current = true;
		onLoad();
	}, []);

	return (
		<>
			<ThemeProvider value={LightNavigationTheme}>
				<Stack>
					<Stack.Screen name="(auth)" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</ThemeProvider>
		</>
	);
}

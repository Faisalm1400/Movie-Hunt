import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
    const isAuth = false; // later from context/firebase

    if (isAuth) {
        return <Redirect href="(tabs)" />;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="signup" />
        </Stack>
    );
}
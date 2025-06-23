
import { Stack } from "expo-router";
import './global.css';

// RootLayout defines the main navigation structure for the app
export default function RootLayout() {
  return (
    // <Stack> creates a native-style stack navigation container.
    // It automatically maps to all the files and folders in your app directory
    // unless overridden with custom <Stack.Screen> configs below.
    <Stack>
      
      {/* This hides the header for the "tabs" layout group.
          The (tabs) directory usually contains a BottomTabNavigator or Tab screens.
          Since (tabs) is a layout, we typically don't want it to have its own stack header. */}
      <Stack.Screen 
        name="(tabs)"
        options={{ headerShown: false }}
      />

      {/* This sets up a screen for movie details based on dynamic route [id]
          It maps to the file: app/movie/[id].tsx
          The header is hidden here too, probably to allow full-screen content. */}
      <Stack.Screen 
        name="movie/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

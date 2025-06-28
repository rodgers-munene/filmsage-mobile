import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ( { focused, icon, title}: any ) => {
    if(focused){
  return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row flex-1 w-full min-w-[113px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image 
          source={icon} 
          className="size-5" 
          tintColor="#151312" 
        />
        <Text className="ml-2 text-base font-semibold text-secondary">
          {title}
        </Text>
      </ImageBackground>
  )
}
return(
    <View className="items-center justify-center mt-4 rounded-full size-full">
        <Image source={icon} tintColor='#A8B5DB' className="size-5"/>
    </View>
)
};

// This component defines the tab-based layout for the (tabs) group
const _layout = () => {
  return (
    // <Tabs> sets up bottom tab navigation for screens in this folder
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center'
        },
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 0.5,
            borderColor: '#0f0D23',
        }
    }}
    >
      {/* This configures the screen at app/(tabs)/index.tsx */}
      <Tabs.Screen
        name="index" // Corresponds to the file: app/(tabs)/index.tsx
        options={{
          headerShown: false, // Hides the default header bar for this screen
          title: "Home", // Sets the label in the bottom tab bar to "home"
          tabBarIcon: ({ focused }) => (
            <TabIcon
                focused={focused}
                icon={icons.home}
                title="Home"
             />
          )
        }}
/>
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon
                focused={focused}
                icon={icons.search}
                title="Search"
             />
          )
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon
                focused={focused}
                icon={icons.save}
                title="Saved"
             />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
                focused={focused}
                icon={icons.person}
                title="Profile"
             />
          )
        }}
      />
    </Tabs>
  );
};

export default _layout;

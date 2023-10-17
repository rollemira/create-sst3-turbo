import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <TRPCProvider>
      {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerTintColor: "#222222",
            headerStyle: {
              //backgroundColor: "#f472b6",
              //backgroundColor: "#333333",
              backgroundColor: "#F471B7",
            },
            headerBackTitleVisible: false,
          }}
        />
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;

import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { name } from "@acme/calcs";

import { api } from "~/utils/api";

const Hello = () => {
  const { data, error, isLoading } = api.pinger.ping.useQuery({
    name: "about",
  });

  return (
    <SafeAreaView className="bg-[#131D47]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "About" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          About
        </Text>
        <Text className="text-center text-white">Imported package {name}</Text>
        {isLoading && (
          <Text className="text-center text-white">Loading...</Text>
        )}
        {error && (
          <Text className="text-center text-white">Error: {error.message}</Text>
        )}
        {data && <Text className="text-center text-white">{data.reply}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default Hello;

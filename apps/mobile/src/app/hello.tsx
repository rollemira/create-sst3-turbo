import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { name } from "@acme/api";

import { api } from "~/utils/api";

const Hello = () => {
  const { data, error, isLoading } = api.greet.greeting.useQuery({
    name: "hello",
  });

  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Hello" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Hello
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

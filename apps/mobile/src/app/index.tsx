import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

import { name } from "@acme/calcs";

import { api } from "~/utils/api";

const Index = () => {
  const { data, error, isLoading } = api.greet.greeting.useQuery({
    name: "mobile",
  });

  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Mobile App
        </Text>
        <Text className="text-center text-white">Imported package {name}</Text>
        {isLoading && (
          <Text className="text-center text-white">Loading...</Text>
        )}
        {error && (
          <Text className="text-center text-white">Error: {error.message}</Text>
        )}
        {data && <Text className="text-center text-white">{data.reply}</Text>}
        <Link
          href="/hello"
          className="m-5 bg-slate-600 p-2 text-center text-gray-100"
        >
          Go to About
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;

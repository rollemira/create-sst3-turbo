import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-native-input";
import * as z from "zod";

import { Success } from "~/components";
import { api } from "~/utils/api";

const CreateLead = () => {
  const [success, setSuccess] = useState(false);
  const createLead = api.leads.create.useMutation({
    onError: (err) => {
      console.log(">>> err", err);
    },
    onSettled: () => {
      setSuccess(true);
    },
  });
  const schema = z
    .object({
      firstName: z
        .string({ required_error: "Please enter your first name" })
        .min(2, { message: "Please enter your first name" }),
      lastName: z
        .string({ required_error: "Please enter your last name" })
        .min(2, { message: "Please enter your last name" }),
      email: z
        .string({ required_error: "Please enter your email" })
        .email({ message: "Please enter a valid email" }),
      phone: z
        .string({ required_error: "Please enter your phone number" })
        .min(12, "Please enter a valid phone number")
        .max(12, "Please enter a valid phone number"),
    })
    .required({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    //console.log(">>> data", data);
    createLead.mutate({
      ...data,
    });
  };
  return (
    <SafeAreaView className="bg-[#131D47]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Create an Account" }} />
      <View className="h-full w-full px-4">
        {success && <Success />}
        {!success && (
          <>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray rounded-md border-2 border-slate-400 bg-[#42496C] p-2 text-xl text-white"
                  placeholderTextColor={"#CCCCCC"}
                  placeholder="First name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text className="text-sm text-white">
                {errors.firstName.message}
              </Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray mt-2 rounded-md border-2 border-slate-400 bg-[#42496C] p-2 text-xl text-white"
                  placeholderTextColor={"#CCCCCC"}
                  placeholder="Last name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text className="text-sm text-white">
                {errors.lastName.message}
              </Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray mt-2 rounded-md border-2 border-slate-400 bg-[#42496C] p-2 text-xl text-white"
                  placeholderTextColor={"#CCCCCC"}
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text className="text-sm text-white">{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PhoneInput
                  style={{
                    color: "#FFFFFF",
                    marginTop: 8,
                    width: "100%",
                    borderWidth: 2,
                    borderRadius: 8,
                    borderColor: "#94a3b8",
                    paddingHorizontal: 16,
                    lineHeight: undefined,
                    backgroundColor: "#42496C",
                    height: 50,
                    fontSize: 20,
                  }}
                  placeholderTextColor={"#CCCCCC"}
                  defaultCountry="US"
                  placeholder="Phone"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <Text className="text-sm text-white">{errors.phone.message}</Text>
            )}

            <Pressable
              className="mt-4 bg-slate-600 p-2"
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting || createLead.isLoading}
            >
              <Text className="text-center text-xl text-gray-100">Submit</Text>
            </Pressable>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateLead;

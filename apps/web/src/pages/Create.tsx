import { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus, Waves } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";
import * as z from "zod";

import { Success } from "../components";
import { api } from "../utils/api";

export const CreateForm = () => {
  const [success, setSuccess] = useState(false);
  const createLead = api.leads.create.useMutation({
    onError: (err) => {
      console.log(">>> err", err);
    },
    onMutate: () => {},
    onSettled: () => {
      setSuccess(true);
    },
    onSuccess: () => {},
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
      // duration: true,
    });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    register,
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
    <div className="mx-auto mt-4 h-screen w-[375px] md:w-[575px]">
      <div className="h-[750px] rounded-3xl border border-gray-200 px-4 shadow">
        <h2 className="font-secondary my-4 content-center justify-center text-center text-xl font-semibold">
          <Waves className="mt-[-4px] inline-block h-8 w-8" /> Ahoy! Let's get
          going
        </h2>
        {success && <Success />}
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control w-full">
              <label className="label" htmlFor="firstName">
                <span className="label-text text-xl">First name</span>
              </label>
              <label className="input-group w-full">
                <input
                  {...register("firstName")}
                  autoComplete="given-name"
                  className="input-bordered input w-full"
                />
              </label>
              {errors.firstName && (
                <p className="text-error text-sm">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="lastName">
                <span className="label-text text-xl">Last name</span>
              </label>
              <label className="input-group w-full">
                <input
                  {...register("lastName")}
                  autoComplete="family-name"
                  className="input-bordered input w-full"
                />
              </label>
              {errors.lastName && (
                <p className="text-error text-sm">{errors.lastName?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="email">
                <span className="label-text text-xl">Email address</span>
              </label>
              <label className="input-group w-full">
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className="input-bordered input w-full"
                />
              </label>
              {errors.email && (
                <p className="text-error text-sm">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="phone">
                <span className="label-text text-xl">Phone number</span>
              </label>
              <label className="input-group w-full">
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      className="input-bordered input w-full"
                      country="US"
                    />
                  )}
                />
              </label>
              {errors.phone && (
                <p className="text-error text-sm">{errors.phone?.message}</p>
              )}
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="btn-primary btn-lg btn w-full"
                disabled={isSubmitting || createLead.isLoading}
              >
                {!createLead.isLoading ? (
                  <span>
                    Sign Up
                    <UserPlus className="ml-2 inline-block h-6 w-6 text-base" />
                  </span>
                ) : (
                  <span className="loading loading-dots loading-lg text-neutral"></span>
                )}
              </button>
            </div>
          </form>
        )}
        <DevTool control={control} />
      </div>
    </div>
  );
};

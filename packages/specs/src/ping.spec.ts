import { expect, test } from "vitest";

import { appRouter, createTRPCContext } from "@acme/api";

const createUserContext = (authId?: string, permissions?: string[]) => {
  let userPermissions = "openid profile email";
  if (permissions) {
    userPermissions = `${userPermissions} ${permissions.join(" ")}`;
  }
  return {
    session: {
      sub: authId,
      permissions: userPermissions,
    },
    user: `{"sub": "${authId}", "permissions": "${userPermissions}"}`,
  };
};

test("Pinger pongs", async () => {
  const ctx = await createTRPCContext({
    ctx: createUserContext(),
  });
  const api = appRouter.createCaller(ctx);
  const name = "Bruce Wayne";
  const res = await api.pinger.ping({ name });
  expect(res.reply).toBe(`Pong! ${name}`);
});

test("Secure pinger pongs", async () => {
  const ctx = await createTRPCContext({
    ctx: createUserContext("123", ["user"]),
  });
  const api = appRouter.createCaller(ctx);
  const name = "Bruce Wayne";
  const res = await api.pinger.pingSecure({ name });
  expect(res.reply).toBe(`Pong Secure! ${name}`);
});

test("Secure pinger fails without user", async () => {
  const ctx = await createTRPCContext({});
  const api = appRouter.createCaller(ctx);
  const name = "Bruce Wayne";
  void expect(
    async () => await api.pinger.pingSecure({ name }),
  ).rejects.toThrowError(/UNAUTHORIZED/);
});

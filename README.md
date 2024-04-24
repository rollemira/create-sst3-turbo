# create-sst3-turbo

A starter repository based on [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo) with some modifications to deploy to [AWS using SST](https://sst.dev).

[You can find more docs in Notion here](https://rollemira.notion.site/Create-SST3-Turbo-55cb58971dcf40cd8371ca3de24aebef?pvs=4)

What's in the box?

- Expo mobile app
- NextJS web site
- Vite web site
- API using tRPC

## Prerequisites

```bash
brew install nvm pnpm awscli
```

## Configure aws-cli

1. [Create an AWS account](https://aws.amazon.com)

2. [Create an IAM user](https://sst.dev/chapters/create-an-iam-user.html)

3. [Configure the aws-cli](https://sst.dev/chapters/configure-the-aws-cli.html#add-your-access-key-to-aws-cli)

### Check your AWS profile

```bash
code ~/.aws/credentials
```

> **Note** If you are using multiple profiles you can use the following command to set your profile.

```bash
export AWS_PROFILE=<profile_name>
```

## Get Started

This repository uses [Turso for database](https://turso.tech) storage. You could easily use something else such as Supabase or Amazon RDS but it would require making changes to the `packages/db` project.

> In this template, @acme is used as a placeholder for package names. As a user, you might want to replace it with your own organization or project name. You can use find-and-replace to change all the instances of @acme to something like @my-company or @project-name

## Database Setup

- Make a database at [Turso](https://turso.tech/)
- Click your database to get your URL
- Set your DATABASE_URL in .env
- Go to Databases -> Database -> Get Token to get your token
- Set your DATABASE_TOKEN in .env

Turso is free to start.

## Quick Start

Use the command below to make a .env and fill it in with the correct settings.

```bash
# configure environment variables
cp .env.example .env

# use node version
nvm use

# install dependencies
pnpm i

# setup SST secrets
pnpm run secrets

# push Drizzle schema to db
pnpm run db:push
```

> **Note** Some lambda functions require secrets. ([more about them here](https://sst.dev/chapters/handling-secrets-in-sst.html))
> To setup secrets, once you've filled in your .env file you
> can run the `pnpm run secrets` to set them in your AWS environment.

## Developing

Terminal_1: Start backend server

```bash
<wsroot>$ pnpm run dev
```

Terminal_2: Start your frontend of choice

```bash
# mobile
<wsroot>$ pnpm run dev:mobile
# web (vite)
<wsroot>$ pnpm run dev:web
```

## Running mobile apps iOS or Android

- [Expo iOS Simulator Docs](https://docs.expo.dev/workflow/ios-simulator)
- [Expo Android Emulator Docs](https://docs.expo.dev/workflow/android-studio-emulator)

## Databese management

You can use the built in Drizzle-kit Studio to view your data

```bash
<wsroot>$ pnpm run db:studio
```

## Deploying

```bash
# Mobile apps can be deployed using EAS
# Deploy API and web using SST
<wsroot>$ pnpm run deploy --stage prod
```

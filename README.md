# Make a real readme please.

## TODO

Make the real readme file explaining how to get the project started from a fresh `git cone` command.

## Install nvm pnpm aws-cli

```
brew install nvm pnpm awscli
```

### If you have them maybe upgrade?

```
brew upgrade nvm pnpm awscli
```

## Configure aws-cli

[Create an IAM user](https://sst.dev/chapters/create-an-iam-user.html)

[Configure the aws-cli](https://sst.dev/chapters/configure-the-aws-cli.html#add-your-access-key-to-aws-cli)

## Check your AWS profile (skip if single AWS account)

```
code ~/.aws/credentials # set default
```

## Setup your node version

```
nvm use
```

## Install deps

```
pnpm i
```

## Database Setup (if needed)

Make a database at [PlanetScale](https://planetscale.com/)
Go to Settings -> Passwords -> New Password
Set your DATABASE_URL in .env

## Running

Terminal_1: Start backend server

```
<project_root>$ pnpm run dev
```

Terminal_2: Start your frontend of choice

```
<project_root>/apps/<app-name>$ pnpm run dev
```

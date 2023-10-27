# Make a real readme please.

## TODO

Make the real readme file explaining how to get the project started from a fresh `git cone` command.

## More docs
[You can find more docs in Notion here](https://www.notion.so/rollemira/Create-SST3-Turbo-55cb58971dcf40cd8371ca3de24aebef?pvs=4)

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

### Check your AWS profile (skip if single AWS account)

```
code ~/.aws/credentials # set a default and profiles
```

### Setting profiles in a shell

To set a profile to be used in your shell you can use the command below

```
export AWS_PROFILE=<profile_name>
```

## Environment variables

Use the command below to make a .env and fill it in with the correct settings

```
cp .env.example .env
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

Don't want a 3rd party service? Use Lightsail instances on AWS.

PlanetScale is free to start.

## Secrets

Some lambda functions require secrets. ([more about them here](https://sst.dev/chapters/handling-secrets-in-sst.html))
To setup secrets, once you've filled in your .env file you can run the command below to set them in your AWS environment.

```
pnpm secrets
```

## Running

Terminal_1: Start backend server

```
<wsroot>$ pnpm run dev
```

Terminal_2: Start your frontend of choice

```
<wsroot>/apps/<appname>$ pnpm run dev
```

## Databese management

Use the scripts in packages/db

```
cd <wsroot>/packages/db
pnpm db:pull
pnpm db:studio
```

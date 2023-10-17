# Make a real readme please.

## TODO

Make the real readme file explaining how to get the project started from a fresh `git cone` command.

## Install pnpm & aws-cli

`brew install pnpm awscli`

### If you have them maybe upgrade?

`brew upgrade pnpm awscli`

## Configure aws-cli

[Create an IAM user](https://sst.dev/chapters/create-an-iam-user.html)

[Configure the aws-cli](https://sst.dev/chapters/configure-the-aws-cli.html#add-your-access-key-to-aws-cli)

## Check your AWS profile (skip if single AWS account)

`scripts/init.sh`

## Setup your node version

`nvm use`

## Install deps

`pnpm i`

## Running

Terminal_1: Start backend server

`<root>$ pnpm run dev`

Terminal_2: Start your frontend of choice

`<root>/apps/<app-name>$ pnpm run dev`

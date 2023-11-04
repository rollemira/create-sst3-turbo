cp .env.production .env
npx sst deploy --stage prod
cp .env.development .env
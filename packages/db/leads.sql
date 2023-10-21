CREATE TABLE IF NOT EXISTS "leads" (
    "id" integer primary key generated always as identity,
    "firstName" varchar(256),
    "lastName" varchar(256),
    "email" varchar(256),
    "phone" varchar(20),
    "address1" varchar(256),
    "address2" varchar(256),
    "city" varchar(256),
    "state" varchar(256),
    "zip" varchar(20),
    "county" varchar(256),
    "country" varchar(256),
    "lat" numeric,
    "long" numeric,
    "createdAt" timestamp not null default now()
);
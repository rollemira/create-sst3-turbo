CREATE TABLE IF NOT EXISTS "leads" (
	"id" integer PRIMARY KEY NOT NULL,
	"firstName" text,
	"lastName" text,
	"email" text,
	"phone" text,
	"address1" text,
	"address2" text,
	"city" text,
	"state" text,
	"zip" text,
	"county" text,
	"country" text
);

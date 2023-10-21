-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `leads` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`firstName` varchar(256),
	`lastName` varchar(256),
	`email` varchar(256),
	`phone` varchar(20),
	`address1` varchar(256),
	`address2` varchar(256),
	`city` varchar(256),
	`state` varchar(256),
	`zip` varchar(20),
	`county` varchar(256),
	`country` varchar(256),
	`lat` float,
	`long` float,
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);

*/
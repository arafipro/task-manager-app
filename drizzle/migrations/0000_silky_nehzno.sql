CREATE TABLE `task_table` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`description` text,
	`due_date` text,
	`completed` integer,
	`important` integer,
	`user_id` text
);

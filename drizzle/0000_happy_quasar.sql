-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `cookie_shop` (
	`vendor_id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`vendor_name` varchar(100) NOT NULL,
	`vendor_email` varchar(100),
	`vendor_phone` varchar(20),
	`vendor_address` varchar(200));
--> statement-breakpoint
CREATE TABLE `products` (
	`product_id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`vendor_id` int,
	`product_name` varchar(50),
	`price` decimal(10,2),
	`quantity` int);
--> statement-breakpoint
CREATE INDEX `vendor_id` ON `products` (`vendor_id`);--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `cookie_shop`(`vendor_id`) ON DELETE no action ON UPDATE no action;
*/
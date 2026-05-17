CREATE TABLE `portfolio_images` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fileKey` varchar(255) NOT NULL,
	`url` text NOT NULL,
	`title` varchar(255) NOT NULL,
	`category` enum('portrait','fashion','model_tests','other') NOT NULL DEFAULT 'other',
	`description` text,
	`displayOrder` int NOT NULL DEFAULT 0,
	`mimeType` varchar(50) NOT NULL DEFAULT 'image/jpeg',
	`fileSize` int,
	`isPublished` int NOT NULL DEFAULT 1,
	`uploadedBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `portfolio_images_id` PRIMARY KEY(`id`),
	CONSTRAINT `portfolio_images_fileKey_unique` UNIQUE(`fileKey`)
);

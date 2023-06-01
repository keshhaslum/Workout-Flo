DROP TABLE if exists workouts;

CREATE TABLE `workouts`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(225) NOT NULL,
    `workout` VARCHAR(255) NOT NULL,
    `reps` VARCHAR(255) NOT NULL,
    `sets` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);



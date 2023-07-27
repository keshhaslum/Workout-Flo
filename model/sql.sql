DROP TABLE if exists menstrual;
DROP TABLE if exists follicular;
DROP TABLE if exists ovulation;
DROP TABLE if exists luteal;

CREATE TABLE `menstrual`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `workout` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `embedid` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO menstrual (workout, video, embedid) VALUES 
('Yoga', 'https://www.youtube.com/watch?v=HoZHdbeqpkg', 'HoZHdbeqpkg'),
('Pilates', 'https://youtu.be/wLCQC5WmVKo', 'wLCQC5WmVKo'),
('Light Cardio', 'https://youtu.be/VWj8ZxCxrYk', 'VWj8ZxCxrYk'),
('Full Body', 'https://www.youtube.com/watch?v=S4UfZ2TV_uA', 'S4UfZ2TV_uA');

CREATE TABLE `follicular`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `workout` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `embedid` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO follicular (workout, video, embedid) VALUES 
('Strength Training', 'https://www.youtube.com/watch?v=tj0o8aH9vJw', 'tj0o8aH9vJw'),
('Cardio Workout', 'https://www.youtube.com/watch?v=kZDvg92tTMc', 'kZDvg92tTMc'),
('Skipping', 'https://www.youtube.com/watch?v=6wREO0mfsiE', '6wREO0mfsiE'),
('Full Body', 'https://www.youtube.com/watch?v=Y2eOW7XYWxc', 'Y2eOW7XYWxc');

CREATE TABLE `ovulation`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `workout` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `embedid` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO ovulation (workout, video, embedid) VALUES 
('HIIT Workout', 'https://www.youtube.com/watch?v=J4wm6qiv5pI', 'J4wm6qiv5pI'),
('Cardio Workout', 'https://www.youtube.com/watch?v=kZDvg92tTMc', 'kZDvg92tTMc'),
('Ab Workout', 'https://www.youtube.com/watch?v=r57BaAtFPKc', 'r57BaAtFPKc'),
('Full Body', 'https://www.youtube.com/watch?v=Y2eOW7XYWxc', 'Y2eOW7XYWxc');

CREATE TABLE `luteal`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `workout` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `embedid` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO luteal (workout, video, embedid) VALUES 
('Aerobics', 'https://www.youtube.com/watch?v=oFON1wxbdjw', 'oFON1wxbdjw'),
('Dance Workout', 'https://www.youtube.com/watch?v=TItIq0L0e58', 'TItIq0L0e58'),
('Light Cardio', 'https://www.youtube.com/watch?v=QbmPxLWmWr8', 'QbmPxLWmWr8'),
('Stretch Routine', 'https://www.youtube.com/watch?v=baqAriam3l8', 'baqAriam3l8');


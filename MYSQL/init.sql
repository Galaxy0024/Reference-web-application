CREATE TABLE eke.`user` (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	username varchar(256) NOT NULL,
	password varchar(256) NOT NULL,
	PRIMARY KEY(id),
	UNIQUE KEY `username` (`username`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_hungarian_ci;

CREATE TABLE IF NOT EXISTS `jokes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `title` varchar(50) NOT NULL,
  `content` varchar(255) NOT NULL,
  `creator` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE utf8_hungarian_ci;

INSERT INTO eke.`user` (username,password) VALUES
	 ('admin','c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec');

INSERT INTO eke.`jokes` (title, content, creator) VALUES
	 ('Cim', 'Tartalom', 1);
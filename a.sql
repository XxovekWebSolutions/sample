 
CREATE TABLE IF NOT EXISTS `users` (
  `u_name` varchar(300) NOT NULL,
  `u_id` varchar(300) NOT NULL,
  `u_password` varchar(300) NOT NULL,
  `u_phone` varchar(300) NOT NULL,
  `u_address` varchar(300) NOT NULL,
  `u_pincode` varchar(300) NOT NULL,
  `u_verified` tinyint(1) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



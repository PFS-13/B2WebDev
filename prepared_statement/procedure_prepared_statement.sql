DELIMITER //

CREATE PROCEDURE UserLogin(IN p_username VARCHAR(50), IN p_password VARCHAR(50))
BEGIN
    SELECT * FROM users
    WHERE username = p_username AND password = p_password;
END //

DELIMITER ;

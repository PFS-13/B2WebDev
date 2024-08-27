<?php

class User {
    private $conn;
    private $table = 'users';

    public $id;
    public $username;
    public $password;

    public function __construct() {
        $this->conn = Database::getInstance()->getConnection();
    }

    public function find($id) {
        $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE id = :id LIMIT 1");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    public function findByUsernameAndPassword($username, $password) {
        $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE username = :username AND password = :password LIMIT 1");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_OBJ);
    }
}
?>
<?php
require_once "./config.php";
$dsn = "mysql:host=$host;dbname=$dbName";
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Couldnot Connect To database");
}
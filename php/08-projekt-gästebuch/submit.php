<?php

require_once __DIR__ . "/inc/db-connect.php";
require_once __DIR__ . "/inc/functions.php";

if (!empty($_POST)) {
    $title = @(string) ($_POST["title"] ?? "");
    $name = @(string) ($_POST["name"] ?? "");
    $content = @(string) ($_POST["content"] ?? "");

    if (!empty($title) && !empty($name) && !empty($content)) {
        $stmt = $pdo->prepare("INSERT INTO entries (`name`, `title`, `content`) VALUES (:name, :title, :content)");
        $stmt->bindValue("name", $name);
        $stmt->bindValue("title", $title);
        $stmt->bindValue("content", $content);
        $stmt->execute();

        header("Location: index.php?success=1");
        die();
    }
}

$errorMessage = "Es ist ein Fehler aufgetreten...";
require __DIR__ . "/index.php";
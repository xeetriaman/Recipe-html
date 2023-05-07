<?php
require_once "./connection.php";

$message = "";

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['_method']) && $_POST['_method'] == "DELETE") {
    $id = $_POST['id'];
    $deleteQuery = "Delete FROM items where id=?";
    $deleteStatement = $pdo->prepare($deleteQuery);
    $deleteStatement->execute([$id]);
    $message = "Item deleted sucessfully";
} else if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //database save
    $title = $_POST['title'];
    $sql = "
            INSERT INTO items(title)VALUES(?)
        ";
    $statement = $pdo->prepare($sql);
    $statement->execute([$title]);
    $message = "New Item Added Sucessfully";
}



$listQuery = "
        SELECT *FROM items
    ";
$listStatement = $pdo->query($listQuery);
$items = $listStatement->fetchAll(PDO::FETCH_ASSOC);



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
</head>

<body>
    <div class="container">
        <h1>Todo List</h1>
        <p>
            <?= $message; ?>
        </p>
        <form method="post" action="index.php">
            <input type="text" name="title" />
            <button type="submit">Add</button>
        </form>

        <u1>
            <?php
            foreach ($items as $item) {
                ?>
                <li>
                    <form method="post" action="index.php">
                        <input type="hidden" name="_method" value="DELETE">
                        <input type="hidden" name="id" value=" <?= $item['id'] ?>">
                        <span>
                            <?= $item['title'] ?>
                        </span>
                        <button>Delete</button>
                    </form>
                </li>
            <?php } ?>
        </u1>

    </div>



</body>

</html>
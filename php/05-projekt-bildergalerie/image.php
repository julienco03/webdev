<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="./styles/simple.css">
    <title>PHP-Kurs</title>
</head>

<body>
    <main>
        <?php
        include './inc/data.php';
        include './inc/functions.php';

        $imageUrl = $_GET['image'];
        ?>

        <!-- Prüfe, ob Titel vorhanden ist -->
        <?php if (!empty($imageTitles[$imageUrl])): ?>
            <h2>
                <?php echo e($imageTitles[$imageUrl]); ?>
            </h2>
            <!-- Prüfe, ob Beschreibung vorhanden ist -->
            <?php if (!empty($imageDescs[$imageUrl])): ?>
                <p>
                    <?php echo e($imageDescs[$imageUrl]); ?>
                </p>
            <?php endif; ?>
            <!-- Der Query-String wird durch urlencode() URL-kodiert, um Fehler zu vermeiden -->
            <img src="images/<?php echo urlencode($imageUrl); ?>" />
        <?php endif; ?>
        <a href="index.php">Zurück zur Übersicht...</a>
    </main>
</body>

</html>
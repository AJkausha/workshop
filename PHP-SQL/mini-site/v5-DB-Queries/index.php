<?php include("app.php"); ?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo pages($page, 'title').' | '.$settings["global_title"]; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $settings["description"]; ?>">
  <meta name="keywords" content="<?php echo $settings["keywords"]; ?>">
  <meta name="author" content="<?php echo $settings["author"]; ?>">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <?php pages($page); ?>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">

  <!-- Main Title -->
  <h1 class="main-title"><?php echo pages($page, 'title');  ?></h1>

    <?php echo pages($page, 'content'); ?>
  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>copy; <?php echo date("d.m.Y"); ?> by Nobody</p>
  </footer>

</body>

</html>
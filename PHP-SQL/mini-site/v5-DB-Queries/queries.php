
<?php
/* Queries Function
Call this function with the proper argument to execute a query
------------------------------------------------------------- */
function query($zone, $params = [])
{ // What query you are in the queries thats why we put "zone" name

  // Start Switch
  switch ($zone) {

    case 'settings':
      $sql = "SELECT settings_key, settings_value from settings";

      $sth = db()->prepare($sql);
      $sth->execute();
      $results = $sth->fetchAll(PDO::FETCH_KEY_PAIR); // Fetch is one value and FetchAll is we can add too many values.

      break;

    case 'pages':
      $sql = "SELECT 
              pages_langs.slug,
              pages.id, 
              pages.is_home, 
              pages_langs.title,
              pages_langs.menu, 
              pages_langs.content 
FROM pages
INNER JOIN pages_langs ON pages.id = pages_langs.id
WHERE pages.is_visible = ?";

      $sth = db()->prepare($sql);
      $sth->execute([1]); // We can also type array() like this
      $results = $sth->fetchAll(PDO::FETCH_UNIQUE);
break;

      case 'home_slug' :
      $sql = "SELECT 
              pages_langs.slug
              FROM pages
              INNER JOIN pages_langs ON pages.id = pages_langs.id
              WHERE pages.is_home = ?";

      $sth = db()->prepare($sql);
      $sth->execute([1]); // We can also type array() like this
      $results = $sth->fetch();
break;
  } // End Switch

  return $results;
} // End Funtion

// CALL THIS WHEN LOADING THE PAGE
$settings = query('settings'); //debug ($settings);
$pages = query('pages'); //debug($pages);

$home_slug = query('home_slug'); //debug($home_slug);
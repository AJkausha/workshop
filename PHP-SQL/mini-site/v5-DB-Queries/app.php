<?php
// include();
// require();

// include_once("pdo.php");
require_once('pdo.php');
require_once('queries.php');


// GRAB THE KEY FROM THE URL
$explode_url = explode('/', $_SERVER['REQUEST_URI']); // an Array
$page = array_pop($explode_url); //echo $page;
//echo $page;

// Default page key
if (!$page) {
  $page = $home_slug['slug'];
}

/* SITE DATA
-----------------------------------------------*/
function site_data()
{
  $data_content = file_get_contents('data.json'); // debug($data_content);
  $data_arr = json_decode($data_content, true);  // debug($data_arr);
  return $data_arr;
}
site_data();

/* MENUS
-----------------------------------------------*/
function pages($page = '', $location = ''){

  global $pages; //debug($pages);

  //PAGES DATA
  if ($location === 'title') {
    $title = $pages[$page]['title'];
    return $title;
  }

  elseif ($location === 'content') {
    $content = $pages[$page]['content'];
    return $content;
  }

  //DISPLAY MENUS - Loops inside the pages array
  foreach ($pages as $slug => $item) {
    // var_dump ($slug);
    $active = ($page === $slug) ? 'active' : '';
    echo '<li class="menu-item ' . $active . '"><a href="' . $slug . '">' . $item['menu'] . '</a></li>';
  }
}

//CUSTOM DEBUG FUNCTION
function debug($value){

  echo '<pre>';
  print_r($value);
  echo '</pre>';
}

<?php
//$page = $_GET['page']; 
//echo $page;

// $page = $_GET['page'];
// echo $page;

// Default page key
$page = 'index';
// GET the key from URL if is set
if(isset($_GET['page']) ){
  $page = $_GET['page'];
}
//Compact Version
// $page = if(isset($_GET['page']) ? $_GET['page'] : 'index'

/* MENUS
-----------------------------------------------*/
function pages ($page = '', $location = 'menus') {

  // global $page;

  // PAGES DATA 
  $pages_arr = [

    'index' => [
      'title' => 'Title to the Index page', 
      'menu' => 'Home'
    ],

    'work' => [
      'title' => 'Title to the Work page', 
      'menu' => 'Work'
    ],

    'blog' => [
      'title' => 'Title to the Blog page', 
      'menu' => 'Blog'
    ],

    'contact' => [
      'title' => 'Title to the Contact page', 
      'menu' => 'Contact'
      ]
  ];

  if($location === 'head') {
    $title = $pages_arr [$page]['title'];
    return $title;
  }

  //DISPLAY MENUS - Loops inside the pages array
  foreach( $pages_arr as $key => $item) {
    // var_dump ($key);
    $active = ($page === $key) ? 'active' : '';
    echo '<li class="menu-item '.$active.'"><a href="?page='.$key.'">'.$item['menu'].'</a></li>';
  }

}

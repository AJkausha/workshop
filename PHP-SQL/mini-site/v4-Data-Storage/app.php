<?php
// GRAB THE KEY FROM THE URL
$explode_url = explode('/',$_SERVER['REQUEST_URI']); // an Array
$page = array_pop ($explode_url); echo $page;

// Default page key
if(!$page){
  $page = 'index';
}

/* SITE DATA
-----------------------------------------------*/
function site_data() {
  $data_content = file_get_contents('data.json'); // debug($data_content);
  $data_arr = json_decode($data_content, true);  // debug($data_arr);
  return $data_arr;
}
site_data();

/* MENUS
-----------------------------------------------*/
function pages ($page = '', $location = 'menus') {

  // global $page;

  // PAGES DATA 
  /*$pages_arr = [

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
  ];*/

  $pages_arr = site_data();

  if($location === 'head') {
    $title = $pages_arr [$page]['title'];
    return $title;
  }

  //DISPLAY MENUS - Loops inside the pages array
  foreach( $pages_arr as $key => $item) {
    // var_dump ($key);
    $active = ($page === $key) ? 'active' : '';
    echo '<li class="menu-item '.$active.'"><a href="'.$key.'">'.$item['menu'].'</a></li>';
  }

}

//CUSTOM DEBUG FUNCTION
function debug($value){

  echo '<pre>';
  print_r($value);
  echo '</pre>';

}
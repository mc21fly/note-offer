<?php

declare(strict_types=1);

require_once './src/Router.php';
require_once './src/CURL.php';

use App\Router;
use App\CURL;

$router = new Router();
$curl = new CURL();

$router->get('/offers', function() {
    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.
    $homePage = file_get_contents('./dist/index.html');
    echo $homePage;
});

$router->get('/offers/szkolenia', function() {
    global $curl;
    $url = 'https://centrumszkolen.notemaster.pl/szkolenia/';
    $data = $curl->getJSONContent($url);

    echo $data;
});

$router->get('/offers/kontakty', function() {
    global $curl;
    $url = 'https://centrumszkolen.notemaster.pl/kontakt/';
    $data = $curl->getJSONContent($url);

    echo $data;
});

$router->run();
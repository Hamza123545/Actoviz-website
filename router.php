<?php
// Simple router for Next.js on Plesk
header('Content-Type: text/html; charset=utf-8');

// Get the requested path
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// If it's a static file, serve it directly
if (preg_match('/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/', $path)) {
    return false; // Let Apache handle it
}

// For all other requests, serve the main page
readfile(__DIR__ . '/index.html');
?>

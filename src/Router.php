<?php

declare(strict_types=1);

namespace App;

class Router {

    private array $handlers;
    private const METHOD_GET = 'GET';

    public function get(string $path, $handler): void {
        $this->addHandler(self::METHOD_GET, $path, $handler);
    }

    private function addHandler(string $method, string $path, $handler): void {
        $this->handlers[$method . $path] = [
            'path' => $path,
            'method' => $method,
            'handler' => $handler,
        ];
    }

    public function run(): void {

        $requestUri = parse_url($_SERVER['REQUEST_URI']);
        $requestPath = $requestUri['path'];
        $method = $_SERVER['REQUEST_METHOD'];
        
        $callback = null;

        foreach ($this->handlers as $handler) {
            if ($handler['path'] === $requestPath && $handler['method'] === $method) {
                $callback = $handler['handler'];
            }
        }

        if(!$callback) {
            header('Location: /offers');
            return;
        }

        call_user_func_array($callback, [
            array_merge($_GET, $_POST)
        ]);
    }

}

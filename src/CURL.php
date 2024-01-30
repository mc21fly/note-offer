<?php

declare(strict_types=1);

namespace App;

class CURL {

    public function getJSONContent(string $requested_url): false|string {
        header("Content-Type: application/json");
        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch,CURLOPT_URL, $requested_url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
        $data = curl_exec($ch);
        curl_close($ch);

        if($data) {
            $obj = (object) [
                'data' => $data
            ];

            return json_encode($obj);
        }

        return json_encode('{}');
    }

}
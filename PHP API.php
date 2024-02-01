<?php
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL =>"https://fortnite-api.com/v2/shop/br", 
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_ENCODING => "",
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
?>
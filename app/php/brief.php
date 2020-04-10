<?php

include('adress.php');


// тема письма
$subject = 'Бриф от клиента';

$type = '';
if (!empty($_POST["type"]) && is_array($_POST["type"]))
{
    $type = implode(";
    ", $_POST["type"]);
}

$source = '';
if (!empty($_POST["source"]) && is_array($_POST["source"]))
{
    $source = implode(";
    ", $_POST["source"]);
}


// текст письма
$message = 'Имя пользователя: ' . $_POST['name'] . '
' . 'Номер телефона: ' . $_POST['phone'] . '
' . 'Компания: ' . $_POST['company'] . '
' . 'Почта: ' . $_POST['email'] . '

' . 'Тип проекта: ' . '
    ' . $type . '

' . 'Краткое описание от клиента: ' . $_POST['description'] . '

' . 'Бюджет проекта: ' . $_POST['price'] . 'р.' . '

' . 'Откуда про нас узнал: ' . '
    ' .$source;

// Для отправки HTML-письма должен быть установлен заголовок Content-type

$headers = "From: $email\r\nReply-To: $email" . "\r\n" . "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8";
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
// $headers .= 'To: Илья <murzalev_97@mail.ru>' . "\r\n"; // Свое имя и email
// $headers .= 'From: ' . '<' . 'develio@mail.ru' . '>' . "\r\n";


// Отправляем
if(mail($to, $subject, $message, $headers)) {
    // header("Refresh:5; ../index.html");
    header("Location: ../thanks.html");
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1>Ваше сообщение успешно отправлено!</h1>
    </body>');
} else {
    header("Refresh:5; ../index.html");

    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1 class="red">Ошибка отправки сообщения!</h1><p>Проверьте правильность заполненных данных.<br>
    Через 5 секунд вы вернетесь на главную страницу.');
    $title = 'Ошибка!';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body>
    <h1 class="text-3xl mt-10 text-center font-bold text-sky-600">Halaman About</h1>
    <h1> <?= $name ?></h1>
    <h1> <?= $email ?></h1>

    @vite('resources/js/app.js')
</body>
</html>
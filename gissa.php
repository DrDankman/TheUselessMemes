<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width", initial-scale=1.0">
	<title>Guess the number</title>
</head>
<body>

<form method="POST" action="">
	<input type="text" name="guess" id="guess">
	<input type="submit" name="submit" id="Gissa">	
</form>

<?php
echo(rand() . "<br>");
echo(rand() . "<br>");
echo(rand(0,100));
?>

</body>
</html>
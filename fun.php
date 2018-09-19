
<?php
if(is_numeric("guru"))
{
   echo "true";
}
else
{
   echo "false";
}
echo number_format(2509663);
echo rand();
$str = addcslashes("Hello World!","W");
echo($str);
$str = addslashes('What does "yolo" mean?');
echo($str);
$str = bin2hex("Hello World!");
echo($str);
$str = "Hello World!";
echo $str . "<br>";
echo chop($str,"World!");
$str = "Hello world!";
echo chunk_split($str,2,".");
$str = ",2&5L;&\@=V]R;&0A `";
echo convert_uudecode($str);
$str = "Hello World!";
echo count_chars($str,3);

?>

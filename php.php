<?php

$string = 'zeeshan fun';
$reverse = '';
$i = 0;
while(!empty($string[$i])){
      $reverse = $string[$i].$reverse;
      $i++;
      echo $reverse.'<br>';
}
echo $reverse;

// take an array with some elements
$array = array(9, 2, 18, 34, 3, 10, 15);
// get the size of array
$count = count($array);
echo "<pre>";
// Print array elements before sorting
print_r($array);
for ($i = 0; $i < $count; $i++) {
    for ($j = $i + 1; $j < $count; $j++) {
        if ($array[$i] > $array[$j]) {
            $temp = $array[$i];
            $array[$i] = $array[$j];
            $array[$j] = $temp;
        }
    }
}
echo "Sorted Array:" . "<br/>";
// Print array elements after sorting
print_r($array);
 ?>

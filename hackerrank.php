<?php
 function taumBday($b, $w, $bc, $wc, $z) {
    // Write your code here
    $totalCost = 0;
    if (($z + $bc) < $wc) {
        // masalah dengan wc
        $totalCost = ($b * $bc) + ($w * ($bc + $z));
    } else if (($z + $wc) < $bc) {
        // masalah dengan bc
        $totalCost = ($w * $wc) + ($b * ($wc + $z));
    } else {
        $totalCost = ($b * $bc) + ($w * $wc);
    }

    return $totalCost;

}

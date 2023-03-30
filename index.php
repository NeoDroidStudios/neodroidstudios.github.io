<?php
include("vues/v_entete.html");

if (!isset($_REQUEST['uc'])) {
    $uc = 'home';
} else {
    $uc = $_REQUEST['uc'];

    switch ($uc) {
        case 'home': {
                include("./vues/header.html");
                break;
            }
    }
    include("vues/v_pied.html");
}

<?php
include("vues/v_entete.html");

if (!isset($_REQUEST['page'])) {
    $page = 'home';
} else {
    $page = $_REQUEST['page'];

    switch ($page) {
        case 'home': {
                include("./vues/v_header.html");
                break;
            }
    }
    //include("vues/v_pied.html");
}

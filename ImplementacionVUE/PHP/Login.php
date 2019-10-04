
<?php

include('conex.inc');
$Nomb=$_POST['Nombre'];
$Con=$_POST['Contraseña'];
$query = new MongoDB\Driver\Query([]);

$cursor = $manager->executeQuery("mydb.users", $query);
if(!empty($cursor)){
        session_start();
        $_SESSION["newsession"]=$value;
        if (ini_get('register_globals'))
        {
                foreach ($_SESSION as $key=>$value)
                {
                        if (isset($GLOBALS[$key]))
                        unset($GLOBALS[$key]);
                }
                header("Location: index.html");
        }
}
else{
        echo "Sesion Invalida";
}
?>

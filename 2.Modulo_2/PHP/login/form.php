<?php
  $usuario = $_POST["usuario"];
  $contraseña = $_POST["password"];

  // Normalmente, se leería en la base de datos la tablar users para comprobar las credenciales
  if($usuario == "pepito" && $contraseña == "Supersafe"){
    echo "Has iniciado sesión";
    // Seguir programando
  }else{
    echo "Esos datos no son correctos";
    // Se acabó
  }
?>
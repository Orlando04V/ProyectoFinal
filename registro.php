<?php
    include 'cn.php';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $sql = "INSERT INTO tabla(nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
    if (mysqli_query($conn, $sql)) {
        echo '<script lenguage="javascript">
        alert("comentario enviado"); 
        </script>';

        echo "<script>location.replace('./index.html')</script>";
    }
?>
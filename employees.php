<?php
include 'login.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre_empleado'];
    $apellidoPaterno = $_POST['apellido_paterno'];
    $apellidoMaterno = $_POST['apellido_materno'];
    $telefono = $_POST['celular'];

    $sql = "INSERT INTO empleado (nombre_empleado, apellido_paterno, apellido_materno, celular) 
            VALUES ('$nombre', '$apellidoPaterno', '$apellidoMaterno', '$telefono')";

    if ($conn->query($sql) === TRUE) {
        echo "Empleado agregado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

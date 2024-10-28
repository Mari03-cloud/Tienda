<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "Erika";
$password = "Jimin2320";
$dbname = "tiendita";
$port = 33067;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos enviados desde el formulario
$nombre_empleado = $_POST['nombre_empleado'];
$apellido_paterno = $_POST['apellido_paterno'];
$apellido_materno = $_POST['apellido_materno'];
$celular = $_POST['celular'];

// Verificar si el número de celular ya existe
$check_sql = "SELECT id_empleado FROM empleado WHERE celular = '$celular'";
$check_result = $conn->query($check_sql);

if ($check_result->num_rows > 0) {
    // Si el número de celular ya existe, redirigir con un mensaje de error
    header("Location: formulario.php?status=error&message=celular_duplicado");
} else {
    // Insertar los datos en la tabla empleado
    $sql = "INSERT INTO empleado (nombre_empleado, apellido_paterno, apellido_materno, celular) 
            VALUES ('$nombre_empleado', '$apellido_paterno', '$apellido_materno',  '$celular')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Guardado correctamente'); window.location.href = 'employees.html';</script>";
    } else {
        echo "<script>alert('Error'); window.location.href = 'employees.html';</script>";
    }
}

$conn->close(); 
?>

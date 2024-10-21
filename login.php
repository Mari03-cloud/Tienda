<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "programaddor"; // Cambia si tu usuario de base de datos es diferente
$password = "itsp2024"; // Cambia si tu contraseña de MySQL es diferente
$dbname = "tiendita";
$port = 33067; // Especifica el puerto de conexión (3306 es el puerto predeterminado de MySQL)

// Crear conexión con puerto incluido
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos enviados desde el formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Consulta para verificar el usuario y la contraseña
$sql = "SELECT empleado.nombre_empleado, perfil.password
        FROM empleado, perfil
        WHERE perfil.id_perfil = empleado.id_empleado
        AND empleado.nombre_empleado = '$username'
        AND perfil.password = '$password'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Si las credenciales son correctas, redirigir al menú
  header("Location: index.html");
  exit();
} else {
  // Si las credenciales son incorrectas, mostrar un mensaje de error
  echo "<script>alert('Usuario o contraseña incorrectos.'); window.location.href = 'login.html';</script>";
}

// Cerrar la conexión
$conn->close();
?>

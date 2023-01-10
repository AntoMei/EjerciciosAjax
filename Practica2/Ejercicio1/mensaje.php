<?php
    $usuario = $_GET['nombre'];
    $servername = "localhost";
    $username = "root";
    $password = "sa";
    $dbname = "usuarios";

    $connection = new mysqli($servername, $username, $password, $dbname);

    if($connection->connect_error){
        die("Connection failed: " . $connection->connect_error);
    }

    $sql = "SELECT * FROM usuario where nombre='".$usuario."'";

    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<br> nombre: ". $row["nombre"]. "<br> apellidos: " .$row["apellidos"]. "<br> edad: " . $row["edad"]. "<br> email: " . $row["email"] . "<br>";
        }
    } else {
        echo "No hay resultados";
    }

    $connection->close();
?>
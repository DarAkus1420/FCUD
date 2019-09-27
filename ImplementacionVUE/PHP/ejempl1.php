
<?php
$bulk = new MongoDB\Driver\BulkWrite;
$document = ['_id' => new MongoDB\BSON\ObjectId, 
            'Nombres' => 'Jaime Rodrigo',
            'Apellidos' => 'Martínez Topo',
            'Domicilio' => 'Calle Falsa Nº123',
            'Telefono' => '123456789',
            'Fecha de Nacimiento' => '01/01/2000',
            'Rut' => '12345678-9',
            'Sistema de salud' => 'FONASA',
            'Tipo' => 'A',
            'Medico que lo atiende' => 'Eduardo Lobos',
            'Telefono Ubicable' => '123456789',
            'Alergias' => 'Chocolate',
            'Grupo Sanguíneo' => 'O',
            '¿Padece alguna enfermedad crónica?' => 'No',
            '¿Ha padecido enfermedades o intervenciones de relevancia?' => 'No',
            '¿Se esta efectuando algún tratamiento medico?' => 'No',
            '¿Esta consumiendo algún medicamento?' => 'No',
            'Observaciones' => 'Nada destacable'
        ];

$_id1 = $bulk->insert($document);
var_dump($_id1);
$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$result = $manager->executeBulkWrite('mydb.usuarios', $bulk);
?>

<?php

$conn = require_once "./_db_conn.php";


function getData($table, $columns, $condition = "1")
{
    global $conn;
    $cols = implode(", ", $columns);
    $sql = "SELECT $cols FROM $table WHERE $condition";

    $result = $conn->query($sql);
    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    return $data;
}

function putData($table, $data)
{
    global $conn;
    $columns = implode(", ", array_keys($data));
    $values = implode(", ", array_map(function ($val) {
        return "'" . addslashes($val) . "'";
    }, array_values($data)));

    $sql = "INSERT INTO $table ($columns) VALUES ($values)";

    return $conn->query($sql);
}


function updateData($table, $data, $condition = "1") {
    global $conn;
    $setValues = [];
    foreach ($data as $column => $value) {
        $setValues[] = "$column = '" . addslashes($value) . "'";
    }

    $setString = implode(", ", $setValues);
    $sql = "UPDATE $table SET $setString WHERE $condition";

    return $conn->query($sql);
}

function deleteData($table, $condition = "1") {
    global $conn;
    $sql = "DELETE FROM $table WHERE $condition";

    return $conn->query($sql);
}


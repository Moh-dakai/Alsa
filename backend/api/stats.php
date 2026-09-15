<?php
// ============================================================
// GET /api/stats.php
// Returns site stats (visas processed, countries served, etc.)
// ============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../config/db.php';

$pdo = getDbConnection();

$stmt = $pdo->query(
    'SELECT key_name, value, label, suffix FROM stats ORDER BY id ASC'
);
$rows = $stmt->fetchAll();

// Transform into key-value map for easy frontend consumption
$stats = [];
foreach ($rows as $row) {
    $stats[$row['key_name']] = [
        'value'  => (int) $row['value'],
        'label'  => $row['label'],
        'suffix' => $row['suffix'],
    ];
}

echo json_encode([
    'success' => true,
    'data'    => $stats,
]);

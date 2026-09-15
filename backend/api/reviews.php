<?php
// ============================================================
// GET /api/reviews.php
// Returns all featured reviews as JSON
// ============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Lock this to your domain in production

require_once __DIR__ . '/../config/db.php';

$pdo = getDbConnection();

$stmt = $pdo->prepare(
    'SELECT id, name, instagram_handle, avatar_url, role, review_text, rating
     FROM reviews
     WHERE is_featured = 1
     ORDER BY created_at DESC
     LIMIT 20'
);
$stmt->execute();
$reviews = $stmt->fetchAll();

echo json_encode([
    'success' => true,
    'data'    => $reviews,
    'count'   => count($reviews),
]);

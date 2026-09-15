<?php
// ============================================================
// POST /api/contact.php
// Receives a contact inquiry and saves it to the database
// Body (JSON): full_name, phone, email, destination, trip_type, message
// ============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

require_once __DIR__ . '/../config/db.php';

// ── Parse JSON body ─────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON body.']);
    exit;
}

// ── Validate required fields ─────────────────────────────────
$fullName = trim($body['full_name'] ?? '');
$phone    = trim($body['phone']     ?? '');

if (empty($fullName) || empty($phone)) {
    http_response_code(422);
    echo json_encode(['error' => 'full_name and phone are required.']);
    exit;
}

// ── Sanitise optional fields ─────────────────────────────────
$allowedTripTypes = ['group_trip', 'vacation', 'business_trip', 'visa_only', 'other'];
$tripType    = in_array($body['trip_type'] ?? '', $allowedTripTypes, true)
               ? $body['trip_type']
               : 'other';

$email       = filter_var($body['email']       ?? '', FILTER_VALIDATE_EMAIL) ?: null;
$destination = substr(trim($body['destination'] ?? ''), 0, 100) ?: null;
$message     = substr(trim($body['message']     ?? ''), 0, 2000) ?: null;
$ipAddress   = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? null;

// ── Insert ────────────────────────────────────────────────────
$pdo  = getDbConnection();
$stmt = $pdo->prepare(
    'INSERT INTO inquiries (full_name, phone, email, destination, trip_type, message, ip_address)
     VALUES (:full_name, :phone, :email, :destination, :trip_type, :message, :ip)'
);

$stmt->execute([
    ':full_name'   => $fullName,
    ':phone'       => $phone,
    ':email'       => $email,
    ':destination' => $destination,
    ':trip_type'   => $tripType,
    ':message'     => $message,
    ':ip'          => $ipAddress,
]);

http_response_code(201);
echo json_encode([
    'success' => true,
    'message' => 'Inquiry received. We will be in touch shortly.',
    'id'      => $pdo->lastInsertId(),
]);

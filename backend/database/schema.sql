-- ============================================================
-- Alsa Travels Database Schema
-- MySQL 8.0+
-- Run this file to set up the database:
--   mysql -u root -p < schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS alsa_travels CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE alsa_travels;

-- ── Reviews ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(100)  NOT NULL,
  instagram_handle VARCHAR(100) NULL,
  avatar_url      VARCHAR(255)  NULL,
  role            VARCHAR(150)  NULL,
  review_text     TEXT          NOT NULL,
  rating          TINYINT       DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_featured     BOOLEAN       DEFAULT TRUE,
  created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Seed reviews
INSERT INTO reviews (name, instagram_handle, avatar_url, role, review_text, rating, is_featured) VALUES
('Mrs. Adaeze O.', '@adaeze_fabrics', 'https://ui-avatars.com/api/?name=Adaeze+O&background=1B2254&color=F5A623&size=80', 'Fabric Importer, Lagos', 'Alsa handled my China business trip and visa in under two weeks. Smoothest travel experience I''ve ever had.', 5, TRUE),
('Chidi N.', '@chidi_biz', 'https://ui-avatars.com/api/?name=Chidi+N&background=1B2254&color=F5A623&size=80', 'Business Owner, Abuja', 'I''ve done three group trips with them now. Organised, transparent, and they actually answer their phone.', 5, TRUE),
('Funmilayo B.', '@funmi_trader', 'https://ui-avatars.com/api/?name=Funmilayo+B&background=1B2254&color=F5A623&size=80', 'Trader, Kano', 'My China visa was rejected once before with another agency. Alsa got it approved in 10 working days.', 5, TRUE),
('Emeka U.', '@emeka_travels', 'https://ui-avatars.com/api/?name=Emeka+U&background=1B2254&color=F5A623&size=80', 'First-time traveller', 'The Dubai group trip was well planned — hotel, tours, everything sorted before we even landed.', 5, TRUE),
('Hauwa M.', '@hauwa_m', 'https://ui-avatars.com/api/?name=Hauwa+M&background=1B2254&color=F5A623&size=80', 'Business Owner', 'Professional from the first call to the day we boarded. Already booking my next trip with them.', 5, TRUE),
('Mr. Mohammed A.', '@mohammed_imports', 'https://ui-avatars.com/api/?name=Mohammed+A&background=1B2254&color=F5A623&size=80', 'Importer, Port Harcourt', 'Got my UK visa without stress. The team guided me through every document needed. Very professional.', 5, TRUE),
('Ngozi K.', '@ngozi_k_official', 'https://ui-avatars.com/api/?name=Ngozi+K&background=1B2254&color=F5A623&size=80', 'Fashion Designer, Lagos', 'Turkey group trip was phenomenal. Shopping, sightseeing, everything was perfectly coordinated.', 5, TRUE),
('Tunde F.', '@tunde_f_ceo', 'https://ui-avatars.com/api/?name=Tunde+F&background=1B2254&color=F5A623&size=80', 'CEO, Ibadan', 'Best travel agency in Nigeria, hands down. My entire team traveled to China and back without a single issue.', 5, TRUE);


-- ── Inquiries / Contact Form ────────────────────────────────
CREATE TABLE IF NOT EXISTS inquiries (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  full_name    VARCHAR(150) NOT NULL,
  phone        VARCHAR(30)  NOT NULL,
  email        VARCHAR(150) NULL,
  destination  VARCHAR(100) NULL,
  trip_type    ENUM('group_trip','vacation','business_trip','visa_only','other') NOT NULL DEFAULT 'other',
  message      TEXT         NULL,
  ip_address   VARCHAR(45)  NULL,
  created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- ── Stats ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS stats (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  key_name    VARCHAR(50)  UNIQUE NOT NULL,
  value       INT          NOT NULL,
  label       VARCHAR(100) NOT NULL,
  suffix      VARCHAR(20)  NULL,
  updated_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO stats (key_name, value, label, suffix) VALUES
('visas_processed',    1000, 'Visas Processed & Counting', '+'),
('countries_served',      5, 'Countries Served', ''),
('satisfaction_rate',    98, 'Client Satisfaction', '%')
ON DUPLICATE KEY UPDATE value = VALUES(value);

# Alsa Travels — Website

Nigeria's #1 Travel & Tours Agency for curated China business trips.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Backend | PHP 8.x (REST API) |
| Database | MySQL 8 |

---

## Project Structure

```
Alsa/
├── alsa-travels/          ← Next.js frontend
│   ├── app/               ← Pages (App Router)
│   ├── components/        ← React components
│   ├── lib/               ← Config, types, data, API helpers
│   └── public/            ← Static assets (images, logo)
│
└── backend/               ← PHP REST API
    ├── api/               ← Endpoints: reviews, stats, contact
    ├── config/            ← Database connection
    └── database/          ← MySQL schema + seed data
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- PHP 8.0+
- MySQL 8.0+

---

### 1. Set Up the Database

```bash
mysql -u root -p < backend/database/schema.sql
```

Then update `backend/config/db.php` with your MySQL credentials:

```php
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
```

---

### 2. Run the PHP Backend

Place the `backend/` folder in your web server root (e.g. XAMPP's `htdocs/alsa-travels/backend/` or a PHP hosting server).

Test it:
```
GET http://localhost/alsa-travels/backend/api/reviews.php
GET http://localhost/alsa-travels/backend/api/stats.php
POST http://localhost/alsa-travels/backend/api/contact.php
```

---

### 3. Configure the Frontend

```bash
cd alsa-travels
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost/alsa-travels/backend/api
```

---

### 4. Run the Frontend

```bash
cd alsa-travels
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

All site-wide settings live in one file: [`lib/config.ts`](alsa-travels/lib/config.ts)

```typescript
export const siteConfig = {
  whatsappNumber: '2348000000000',  // ← Update this!
  phoneNumber: '+234 800 000 0000', // ← Update this!
  email: 'hello@alsatravels.com',   // ← Update this!
  // ...
}
```

**Update the WhatsApp number** — this controls every "Contact Us" and "WhatsApp Us" button across the entire site.

---

## 📁 Adding Real Trip Photos

1. Copy your trip photos into `alsa-travels/public/images/trips/`
2. Update `lib/data.ts` — the `carouselImages` array at the bottom
3. Replace the Unsplash URLs with `/images/trips/your-photo.jpg`

---

## 📄 Pages

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/about` | About Us |
| `/china` | China (Full Service) |
| `/dubai` | Dubai (Full Service) |
| `/turkey` | Turkey (Full Service) |
| `/canada` | Canada (Visa Only) |
| `/uk` | UK (Visa Only) |
| `/group-trip` | Group Trips |
| `/vacation` | Vacations |
| `/visa-processing` | Visa Processing |
| `/individual-business-trip` | Individual Business Trip |

---

## 🚀 Deployment

### Frontend (Vercel — recommended)
```bash
npm run build
# Deploy to Vercel or any Node.js host
```

### Backend (cPanel / Shared Hosting)
- Upload `backend/` to your hosting
- Import `backend/database/schema.sql`
- Update `backend/config/db.php`
- Set `NEXT_PUBLIC_BACKEND_URL` to your hosting URL

---

## 📦 Logo Files

Place logo files in `alsa-travels/public/logo/`:
- `alsa-main.png` — coloured logo (navy + amber)
- `alsa-white.png` — all-white logo for dark backgrounds

These are referenced automatically in the Navbar and Footer.

This project is still under continuous development ,not a final product,there may be various changes 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



#  GLEAMIA — Your Jewellery Destination

**Live App:** [https://gleamia-1az3.vercel.app/](https://gleamia-1az3.vercel.app/)

A modern full-stack jewellery e-commerce platform built with Next.js and Supabase.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-green?style=flat-square&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)

---

## Features

- **User Authentication** — Sign up, login, and session management via Supabase Auth
- **Product Catalogue** — Browse jewellery by category (Rings, Necklaces, Earrings, Bracelets, Anklets, Sets)
- **Shopping Cart** — Add to cart and manage orders
- **Checkout Flow** — Seamless checkout with order success page
- **Admin Dashboard** — Manage products, view analytics, and handle orders
- **Product Reviews** — Customers can leave star ratings and written reviews
- **Responsive Design** — Mobile-friendly UI across all pages
- **Image Uploads** — Product images stored in Supabase Storage

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React, Tailwind CSS |
| Backend | Supabase (PostgreSQL + Auth + Storage) |
| Deployment | Vercel |
| Language | JavaScript / TypeScript |

---

## 📁 Project Structure

```
gleamia/
├── app/
│   ├── admin/           # Admin dashboard (products, orders, analytics)
│   ├── users/           # User-facing pages (products, cart, checkout)
│   ├── login/           # Authentication pages
│   ├── signup/
│   ├── logout/
│   └── page.js          # Home page
├── components/          # Reusable UI components
│   ├── NavBar.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── ProductReviews.js
│   ├── StarRating.js
│   ├── ReviewForm.js
│   ├── ReviewList.js
│   └── ...
├── lib/
│   └── supabase.js      # Supabase client configuration
├── public/              # Static assets
└── next.config.ts       # Next.js configuration
```

---


### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) account
- A [Vercel](https://vercel.com) account (for deployment)

## Product Categories

- Rings
- Necklaces
-  Earrings
-  Bracelets
-  Anklets
-  Sets

---


## 🔐 Access Levels

| Role | Access |
|------|--------|
| Guest | Home page, login, signup |
| User | Product catalogue, cart, checkout, profile, reviews |
| Admin | Full dashboard — products, orders, analytics |

---

## License

This project is private and not open for redistribution.

---

##  Author

**bemvelo** — [github.com/bemvelo](https://github.com/bemvelo)

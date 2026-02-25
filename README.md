# toklutarim.com

Toklu Tarim resmi web sitesi - Konya merkezli tarim makinalari ureticisi.

## Teknoloji

- React 18 + Vite
- TailwindCSS
- Framer Motion
- shadcn/ui (Radix UI)
- React Router DOM

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build ciktisi `dist/` klasorune olusturulur.

## Proje Yapisi

```
src/
  assets/        # Gorsel referanslari
  components/    # UI componentleri
  data/          # Urun, blog, iletisim verileri
  pages/         # Sayfa componentleri
  context/       # Global state
  lib/           # Yardimci fonksiyonlar
public/          # Statik dosyalar
```

## Icerik Yonetimi

- **Gorseller:** `src/assets/images.js`
- **Urunler:** `src/data/productsData.js`
- **Iletisim:** `src/data/departments.js`
- **Blog:** `src/data/blogData.js`

## HTTP Methodları

Rehber uygulamasında kullanılan temel API endpointleri ve metodları:

**GET**  
- Tüm kişileri listelemek için kullanılır  
- Örnek: `GET /contact` -> Tüm rehber kayıtlarını getirir

**POST**  
- Yeni kişi eklemek için kullanılır  
- Örnek: `POST /contact` -> Yeni kişi oluşturur

**PUT**  
- Varolan bir kişinin TÜM bilgilerini günceller  
- Örnek: `PUT /contact/1` -> ID'si 1 olan kişinin tüm alanlarını güncelle

**DELETE**  
- Kişi silmek için kullanılır  
- Örnek: `DELETE /contact/3` -> ID'si 3 olan kişiyi kalıcı olarak siler

# rehber-app

**Kişi Rehberi Uygulaması** - React ile geliştirilmiş tam stack kişi yönetim uygulaması 📱

![Proje Arayüzü](https://via.placeholder.com/800x400?text=Rehber+Uygulama+Görseli)

---

## 🛠️ Teknik Özellikler

- 🔹 **Frontend**: React + Vite ile geliştirildi
- 🔹 **Styling**: SCSS ile responsive tasarım
- 🔹 **State Management**: Context API yerine props drilling kullanımı
- 🔹 **Backend**: JSON Server ile REST API entegrasyonu
- 🔹 **Veritabanı**: `db.json` dosyası ile veri kalıcılığı

---

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/omerffae/rehber-app.git
cd rehber-app
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. JSON Server'ı başlatın (farklı terminalde):
```bash
npm run server
```

4. Uygulamayı çalıştırın:
```bash
npm run dev
```

---

## ✨ Temel Fonksiyonlar

- 📌 Yeni kişi ekleme 
- 📌 Arama ve filtreleme özelliği
- 📌 Kişi bilgilerini düzenleme
- 📌 Telefon ve email bilgileri ile iletişim
- 📌 Responsive grid görünümü
- 📌 Modal üzerinden form yönetimi

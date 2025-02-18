## HTTP Methodları

RESTful API'lerde kaynaklar üzerinde işlem yapmak için kullanılan temel HTTP metodları:

**GET**  
- Sunucudan veri okumak için kullanılır (sadece veri getirir)  
- Örnek: `GET /contact` -> Tüm kişileri listele

**POST**  
- Yeni kaynak oluşturmak için kullanılır  
- Örnek: `POST /contact` -> Yeni kişi ekle

**PUT**  
- Varolan bir kaynağın TAMAMINI günceller  
- Örnek: `PUT /contact/1` -> ID'si 1 olan kişiyi güncelle

**PATCH**  
- Kaynağın SADECE BELİRLİ BİR KISMINI günceller  
- Örnek: `PATCH /contact/5` -> ID'si 5 olan kişinin sadece email adresini güncelle

**DELETE**  
- Kaynak silmek için kullanılır  
- Örnek: `DELETE /contact/3` -> ID'si 3 olan kişiyi sil
# rehber-app

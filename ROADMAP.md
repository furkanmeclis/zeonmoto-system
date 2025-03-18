# ZEON MOTO - Alışveriş Sistemi Geliştirme Yol Haritası

## 1. Layout ve Tasarım İyileştirmeleri (Öncelik: Yüksek)
- [x] ShopLayout oluşturulması
  - [x] Navbar tasarımı (sarı tonlarında modern)
  - [x] Footer tasarımı (kurumsal ve şık)
  - [x] Sepet sidebar entegrasyonu (PrimeReact + TailwindCSS)
  - [x] Layout'un Index ve Show sayfalarına entegrasyonu

## 2. Sepet Sistemi İyileştirmeleri (Öncelik: Yüksek)
- [x] Sepet Sidebar Özellikleri
  - [x] Ürün listesi görüntüleme
  - [x] Adet değiştirme kontrolü
  - [x] Ürün silme
  - [x] Toplam fiyat gösterimi
  - [x] Sepet boş durumu tasarımı

## 3. Ürün Detay Sayfası İyileştirmeleri (Öncelik: Orta)
- [x] Çoklu resim desteğinin düzeltilmesi
  - [x] Swiper entegrasyonu
  - [x] Thumbnail görünümü
  - [x] Zoom özelliği
- [x] Ürün bilgilerinin daha detaylı gösterimi
- [x] Animasyon iyileştirmeleri

## 4. ProductCard Tasarım İyileştirmeleri (Öncelik: Orta)
- [x] Sarı tonlarında yeni tasarım
- [x] Hover efektleri
- [x] Sepetteki ürünlerin belirtilmesi
- [x] Animasyon iyileştirmeleri

## 5. Sepet İsimlendirme Özelliği (Öncelik: Düşük)
- [x] Migration oluşturulması
  ```sql
  ALTER TABLE carts ADD COLUMN cart_name VARCHAR(255) NULL;
  ```
- [x] Model güncelleme
- [x] İsim girişi için modal tasarımı
- [x] LocalStorage entegrasyonu

## 6. Sepet Paylaşım Sistemi (Öncelik: Düşük)
- [x] Migration oluşturulması (share_token)
- [x] Model güncelleme
- [ ] Link kopyalama özelliği
- [ ] Paylaşılan sepeti görüntüleme sayfası
- [ ] Paylaşılan sepeti kendi sepetine ekleme özelliği

## Teknik Detaylar

### Kullanılacak Teknolojiler
- TailwindCSS (Tasarım)
- Framer Motion (Animasyonlar)
- PrimeReact (Sidebar ve UI Komponentleri)
- Laravel (Backend)
- React (Frontend)
- LocalStorage (Sepet İsmi Saklama)

### Tasarım Prensipleri
1. **Renk Paleti**
   - Ana Renk: #FFD700 (Altın Sarısı)
   - İkincil Renk: #1a1a1a (Koyu Gri)
   - Vurgu Rengi: #FFB100 (Turuncu Sarı)
   - Arka Plan: #f8f8f8 (Açık Gri)

2. **Animasyonlar**
   - Sayfa geçişleri
   - Hover efektleri
   - Loading durumları
   - Modal geçişleri

3. **Responsive Tasarım**
   - Mobile First yaklaşım
   - Tablet ve desktop için özel düzenlemeler
   - Sidebar responsive davranış

### Test Edilecek Özellikler
- [x] Sepet işlemleri
- [x] Çoklu resim gösterimi
- [x] Responsive tasarım
- [ ] Sepet paylaşımı
- [ ] LocalStorage entegrasyonu

### Performans Hedefleri
- Sayfa yüklenme süresi < 2s
- First Contentful Paint < 1s
- Time to Interactive < 3s

## İlerleme Takibi
- [x] Layout ve Tasarım: 100%
- [x] Sepet Sistemi: 90%
- [x] Ürün Detay: 100%
- [ ] ProductCard: 0%
- [ ] Sepet İsimlendirme: 50%
- [ ] Sepet Paylaşımı: 30%

## Notlar
- Her özellik için branch oluşturulacak
- Commit mesajları açıklayıcı olacak
- Kod kalitesi ve performans öncelikli
- Modern ve kullanıcı dostu arayüz hedefi

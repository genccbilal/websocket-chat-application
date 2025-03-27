# WebSocket Chat Uygulaması

Modern web teknolojileri kullanılarak geliştirilmiş, gerçek zamanlı mesajlaşma özelliğine sahip bir sohbet uygulaması.

## 📋 Proje Hakkında

Bu proje, frontend ve backend olmak üzere iki ana bileşenden oluşmaktadır:

- **[Frontend README](frontend/README.md)**: React ve Vite kullanılarak geliştirilmiş modern bir web arayüzü
- **[Backend README](backend/README.md)**: Node.js ve WebSocket kullanılarak geliştirilmiş gerçek zamanlı
  mesajlaşma sunucusu

## 📁 Proje Yapısı

```
websocket-chat-application/
├── frontend/                 # Frontend uygulaması
│   ├── src/                 # Kaynak kodlar
│   │   ├── pages/          # Sayfa bileşenleri
│   │   ├── App.jsx         # Ana uygulama bileşeni
│   │   ├── socket.js       # WebSocket bağlantı yönetimi
│   │   └── main.jsx        # Uygulama giriş noktası
│   ├── public/             # Statik dosyalar
│   └── package.json        # Frontend bağımlılıkları
│
├── backend/                 # Backend sunucusu
│   ├── server.js           # WebSocket sunucu kodu
│   └── package.json        # Backend bağımlılıkları
│
└── README.md               # Proje dokümantasyonu
```

## 🚀 Özellikler

- Gerçek zamanlı mesajlaşma
- Kullanıcı seçim ekranı
- WebSocket bağlantısı
- Basit kullanıcı doğrulama

## 🛠️ Kullanılan Teknolojiler

### Frontend

- React.js
- Vite
- WebSocket
- React Router
- CSS3

### Backend

- Node.js
- WebSocket (ws)
- JavaScript

## 📦 Kurulum

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

## 🔧 Kullanım

1. Backend sunucusunu başlatın
2. Frontend uygulamasını başlatın
3. İki farklı tarayıcı sekmesi açın
4. Her sekmede `http://localhost:5173` adresine gidin
5. İlk sekmede bir kullanıcı seçin (örn: "Bilal")
6. İkinci sekmede farklı bir kullanıcı seçin (örn: "Ahmet")
7. Her iki sekmede de "Sohbete Başla" butonuna tıklayın
8. Artık iki kullanıcı arasında gerçek zamanlı mesajlaşma yapabilirsiniz

### Örnek Kullanım Senaryosu:

1. **Kullanıcı 1 (Bilal)**:

   - Giriş yap
   - "Ahmet"i seç
   - "Sohbete Başla"ya tıkla
   - Mesaj gönder

2. **Kullanıcı 2 (Ahmet)**:
   - Giriş yap
   - "Bilal"i seç
   - "Sohbete Başla"ya tıkla
   - Mesajları gör ve yanıtla

### Nasıl Çalışır?

- Backend sunucusu `ws://localhost:3000` adresinde çalışır
- Frontend uygulaması bu WebSocket sunucusuna bağlanır
- Kullanıcılar mesaj gönderdiğinde, mesajlar WebSocket üzerinden anında iletilir
- Her kullanıcı sadece bir sohbet partneri ile mesajlaşabilir
- Maksimum 2 kullanıcı aynı anda bağlanabilir

## 📧 İletişim

- 📧 E-posta: bilalgnc34@gmail.com
- 🔗 LinkedIn: [Bilal Genç](https://www.linkedin.com/in/bilalgnc/)
- 💻 GitHub: [genccbilal](https://github.com/genccbilal/)

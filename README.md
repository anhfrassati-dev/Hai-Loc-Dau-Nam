# 🌸 Hái Lộc Lời Chúa Đầu Xuân 2026 - Next.js Version ✝️

**Ứng dụng rút Lộc Thánh online** - Phiên bản hiện đại sử dụng Next.js Framework.

> *"Lời Chúa là ngọn đèn soi cho con bước, là ánh sáng chỉ đường con đi."*  
> — Thánh Vịnh 119:105

---

## 📖 Giới thiệu

Đây là ứng dụng web cho phép người dùng **rút lộc Lời Chúa** trong dịp Tết Nguyên Đán. Phiên bản này đã được nâng cấp lên **Next.js 16 (App Router)** để tối ưu hóa hiệu suất, SEO và khả năng mở rộng.

### ✨ Tính năng

- 🙏 **Màn hình cầu nguyện** - Hiệu ứng chuyển cảnh mượt mà với nến và lời kinh, giúp tĩnh tâm trước khi nhận Lộc.
- 🎴 **Lộc Thánh Đa Dạng** - Hỗ trợ hiển thị ngẫu nhiên từ kho ảnh Lộc Thánh.
- 🎨 **Hiệu Ứng Đẹp Mắt** - Cánh hoa rơi, nến lung linh, và hiệu ứng lật trang sách.
- 📥 **Tải & Chia Sẻ** - Dễ dàng tải ảnh về máy hoặc chia sẻ lên mạng xã hội.
- 🚀 **Next.js Power** - Tốc độ tải trang nhanh, tối ưu SEO.

---

## 🚀 Cài đặt & Sử dụng

### Yêu cầu
- Node.js 18+ được cài đặt trên máy.

### Cách chạy dự án

1. **Cài đặt thư viện:**
   Mở terminal tại thư mục dự án và chạy:
   ```bash
   npm install
   ```

2. **Chạy môi trường phát triển (Dev):**
   ```bash
   npm run dev
   ```
   Truy cập [http://localhost:3000](http://localhost:3000) (hoặc port khác nếu 3000 đang bận).

3. **Build bản Production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🖼️ Hướng dẫn Thay đổi/Bổ sung Hình ảnh Lộc Thánh

Để thêm hoặc thay đổi các hình ảnh Lộc Thánh, bạn hãy làm theo các bước sau:

### 1. Chuẩn bị hình ảnh
- Chuẩn bị các file ảnh Lộc Thánh mới (định dạng `.png`, `.jpg`).
- Đặt tên file gợi nhớ, ví dụ: `LocThanh-31.png`, `LocThanh-32.png`.

### 2. Copy vào thư mục dự án
- Copy các file ảnh vào thư mục:  
  `public/assets/images/`

### 3. Cập nhật danh sách trong code
Để ứng dụng nhận diện được ảnh mới, bạn cần thêm tên file vào danh sách trong code.

- Mở file: **`src/app/page.tsx`**
- Tìm đến dòng khai báo biến `locImages` (khoảng dòng 10):

```typescript
const locImages = [
    'Lộc Thánh IRC-01.png',
    'Lộc Thánh IRC-02.png',
    // ... các ảnh cũ
    'Lộc Thánh IRC-30.png',
    
    // 👇 THÊM ẢNH MỚI VÀO ĐÂY (nhớ có dấu phẩy cuối dòng)
    'LocThanh-31.png',
    'LocThanh-32.png' 
];
```

- **Lưu file lại** (`Ctrl + S`).
- Ứng dụng sẽ tự động cập nhật (nếu đang chạy `npm run dev`).

---

## 📁 Cấu trúc thư mục

```
locthanh2026/
├── public/                 # Chứa file tĩnh
│   └── assets/
│       └── images/         # 📂 KHO ẢNH LỘC THÁNH Ở ĐÂY
├── src/
│   ├── app/
│   │   ├── page.tsx        # Trang chủ & Cấu hình danh sách ảnh
│   │   ├── layout.tsx      # Cấu hình Fonts, SEO
│   │   ├── globals.css     # Style toàn bộ web
│   │   └── result/         # Trang kết quả
│   └── components/         # Các thành phần giao diện (Intro, Transition...)
├── next.config.ts          # Cấu hình Next.js
├── package.json            # Khai báo thư viện
└── README.md               # File hướng dẫn này
```

---

## 📱 Responsive
Ứng dụng tương thích tốt trên mọi thiết bị: Mobile, Tablet, và Desktop.

---

## 🙏 Credits
- **Phát triển bởi:** Cộng đoàn Anh Frassati
- **Website:** [anhfrassati.io.vn](https://anhfrassati.io.vn)
- **Công nghệ:** Next.js, React, TypeScript.

---

*Chúc bạn một năm mới bình an trong Chúa! 🙏*

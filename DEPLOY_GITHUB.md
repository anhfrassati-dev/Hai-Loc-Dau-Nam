# 🚀 Hướng dẫn Deploy lên GitHub Pages

Dưới đây là hướng dẫn chi tiết để đưa trang web **Lộc Thánh 2026** lên GitHub Pages hoàn toàn miễn phí.

## Cách 1: Deploy Thủ Công (Dễ nhất cho người mới)

Cách này phù hợp nếu bạn không muốn cài đặt nhiều thứ phức tạp.

### Bước 1: Build dự án
Mở terminal tại thư mục dự án và chạy:
```bash
npm run build
```
Sau khi chạy xong, bạn sẽ thấy thư mục **`out`** được tạo ra. Đây chính là trang web tĩnh của bạn.

### Bước 2: Tạo Repo trên GitHub
1. Vào [GitHub](https://github.com) và tạo một Repository mới (ví dụ: `hai-loc-2026`).
2. **QUAN TRỌNG:** Chọn chế độ **Public**.

### Bước 3: Upload lên GitHub
Có 2 cách upload:
- **Cách A (Kéo thả):** Vào repo vừa tạo trên GitHub, chọn "Upload files", và kéo toàn bộ nội dung trong thư mục **`out`** (lưu ý là nội dung bên trong, không phải cả thư mục `out`) vào đó và Commit.
- **Cách B (Dùng Git - Khuyên dùng):**
  1. Vào thư mục `out` trên máy: `cd out`
  2. Chạy các lệnh sau:
     ```bash
     git init
     git add .
     git commit -m "Deploy"
     git branch -M main
     git remote add origin https://github.com/<username>/<repo-name>.git
     git push -u origin main
     ```

### Bước 4: Cấu hình GitHub Pages
1. Vào mục **Settings** của repository trên GitHub.
2. Chọn menu **Pages** ở cột bên trái.
3. Tại mục **Build and deployment**, phần **Source**, chọn **Deploy from a branch**.
4. Chọn nhánh **main** và folder **/(root)**.
5. Bấm **Save**.
6. Đợi khoảng 1-2 phút, load lại trang, bạn sẽ thấy link trang web (ví dụ: `https://username.github.io/repo-name/`).

---

## Cách 2: Tự động hóa với GitHub Actions (Chuyên nghiệp)

Cách này giúp mỗi lần bạn đẩy code lên GitHub, trang web sẽ tự động update.

### Bước 1: Tạo Config
Đảm bảo bạn đã upload toàn bộ source code (code gốc Next.js, không phải folder `out`) lên GitHub.

### Bước 2: Cấu hình GitHub Pages
1. Vào **Settings** > **Pages**.
2. Tại **Source**, chọn **GitHub Actions**.
3. Chọn **Next.js** (click Configure).
4. GitHub sẽ tạo 1 file `.yml`, bạn chỉ cần bấm **Commit changes**.

---

## ⚠️ Lưu ý quan trọng về Đường dẫn ảnh

Nếu bạn deploy vào địa chỉ dạng `username.github.io/repo-name`, ảnh có thể bị lỗi không hiện.
Để sửa lỗi này, bạn cần thêm `basePath` vào file `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/repo-name', // Thay repo-name bằng tên repo của bạn
  images: {
    unoptimized: true,
  },
};
```

Sau đó build và deploy lại.

Chúc bạn thành công! 🎉

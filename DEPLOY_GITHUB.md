# 🚀 Hướng dẫn Deploy lên GitHub Pages (Tự động hóa)

Do cấu hình thủ công gặp lỗi, tôi đã chuyển sang phương án **Tự động hóa với GitHub Actions**. Đây là cách chuyên nghiệp và ổn định nhất.

## Quy trình mới:
Bạn chỉ cần đẩy **Source Code** lên GitHub, hệ thống sẽ tự động build và deploy trang web cho bạn.

### Bước 1: Tạo Config (Tôi đã làm cho bạn)
- Đã tạo file `.github/workflows/nextjs.yml` (Quy trình tự động).
- Đã tạo file `.gitignore` (Để loại bỏ các file rác không cần thiết).
- Đã khởi tạo Git tại thư mục gốc dự án.

### Bước 2: Đẩy Code lên GitHub
Mở Terminal tại thư mục gốc `d:\locthanh2026` (Lưu ý: Không phải folder `out` nữa) và chạy các lệnh sau:

1. **Thêm Remote (Liên kết với GitHub - Nếu chưa làm):**
   ```bash
   git remote add origin https://github.com/anhfrassati-dev/Hai-Loc-Dau-Nam.git
   ```
   *(Nếu báo lỗi "remote origin already exists", bạn chạy lệnh: `git remote set-url origin https://github.com/anhfrassati-dev/Hai-Loc-Dau-Nam.git`)*

2. **Đẩy Code lên:**
   ```bash
   git push -u origin main --force
   ```
   *(Dùng `--force` để ghi đè lên các thử nghiệm lỗi trước đó)*

### Bước 3: Cấu hình trên GitHub (QUAN TRỌNG)
1. Truy cập trang repo của bạn trên GitHub: [tại đây](https://github.com/anhfrassati-dev/Hai-Loc-Dau-Nam/settings/pages).
2. Vào **Settings** > **Pages**.
3. Tại phần **Build and deployment**:
   - **Source**: Chọn **GitHub Actions** (Thay vì "Deploy from a branch").
4. GitHub sẽ tự động nhận diện file workflow mình vừa tạo và bắt đầu deploy.
5. Chờ khoảng 2-3 phút, load lại trang Settings > Pages, bạn sẽ thấy link trang web hiện ra.

Chúc bạn thành công! 🎉

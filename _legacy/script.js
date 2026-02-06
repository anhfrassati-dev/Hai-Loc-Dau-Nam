/**
 * HÁI LỘC LỜI CHÚA ĐẦU XUÂN
 * Catholic Tet Blessing Draw - Main Application Script
 */

// ============================================
// CONFIGURATION - CẤU HÌNH DANH SÁCH ẢNH
// ============================================
const locImages = [
    'Lộc Thánh IRC-01.png',
    'Lộc Thánh IRC-02.png',
    'Lộc Thánh IRC-03.png',
    'Lộc Thánh IRC-04.png',
    'Lộc Thánh IRC-05.png',
    'Lộc Thánh IRC-06.png',
    'Lộc Thánh IRC-07.png',
    'Lộc Thánh IRC-08.png',
    'Lộc Thánh IRC-09.png',
    'Lộc Thánh IRC-10.png',
    'Lộc Thánh IRC-11.png',
    'Lộc Thánh IRC-12.png',
    'Lộc Thánh IRC-13.png',
    'Lộc Thánh IRC-14.png',
    'Lộc Thánh IRC-15.png',
    'Lộc Thánh IRC-16.png',
    'Lộc Thánh IRC-17.png',
    'Lộc Thánh IRC-18.png',
    'Lộc Thánh IRC-19.png',
    'Lộc Thánh IRC-20.png',
    'Lộc Thánh IRC-21.png',
    'Lộc Thánh IRC-22.png',
    'Lộc Thánh IRC-23.png',
    'Lộc Thánh IRC-24.png',
    'Lộc Thánh IRC-25.png',
    'Lộc Thánh IRC-26.png',
    'Lộc Thánh IRC-27.png',
    'Lộc Thánh IRC-28.png',
    'Lộc Thánh IRC-29.png',
    'Lộc Thánh IRC-30.png'
];

const IMAGE_BASE_PATH = 'assets/images/';
const TRANSITION_DURATION = 15000; // 15 giây

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getRandomImage() {
    return locImages[Math.floor(Math.random() * locImages.length)];
}

function getImagePath(imageName) {
    return IMAGE_BASE_PATH + encodeURIComponent(imageName);
}

// Lấy tên ảnh từ URL parameter
function getImageFromURL() {
    const params = new URLSearchParams(window.location.search);
    const img = params.get('img');
    if (img && locImages.includes(img)) {
        return img;
    }
    return null;
}

function switchScreen(hideScreen, showScreen) {
    if (hideScreen) hideScreen.classList.remove('active');
    if (showScreen) showScreen.classList.add('active');
}

// ============================================
// FALLING PETALS ANIMATION
// ============================================

function createPetal() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    const petal = document.createElement('div');
    petal.className = 'petal';

    // Random: hoa đào (pink) hoặc hoa mai (yellow)
    const isPink = Math.random() > 0.5;
    petal.classList.add(isPink ? 'petal-pink' : 'petal-yellow');

    // Vị trí X ngẫu nhiên
    petal.style.left = Math.random() * 100 + 'vw';

    // Kích thước ngẫu nhiên (15px - 35px)
    const size = 15 + Math.random() * 20;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Thời gian rơi ngẫu nhiên (15-25 giây) - chậm hơn
    const fallDuration = 15 + Math.random() * 10;
    const swayDuration = 2 + Math.random() * 2;
    petal.style.animationDuration = fallDuration + 's, ' + swayDuration + 's';

    // Delay ngẫu nhiên
    const delay = Math.random() * 2;
    petal.style.animationDelay = delay + 's, 0s';

    container.appendChild(petal);

    // Xóa petal sau khi animation kết thúc
    setTimeout(() => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    }, (fallDuration + delay) * 1000);
}

let petalIntervalId = null;
let isPetalAnimationActive = true;

function startPetalAnimation() {
    // Tạo container nếu chưa có
    if (!document.getElementById('petals-container')) {
        const container = document.createElement('div');
        container.id = 'petals-container';
        document.body.appendChild(container);
    }

    // Tạo cánh hoa mỗi 1500ms (ít hơn trước)
    petalIntervalId = setInterval(() => {
        if (isPetalAnimationActive) {
            createPetal();
        }
    }, 1500);

    // Tạo ngay 5 cánh hoa ban đầu (ít hơn trước)
    for (let i = 0; i < 5; i++) {
        setTimeout(createPetal, i * 200);
    }
}

function stopPetalAnimation() {
    isPetalAnimationActive = false;
    // Xóa tất cả cánh hoa hiện có
    const container = document.getElementById('petals-container');
    if (container) {
        container.innerHTML = '';
    }
}

function resumePetalAnimation() {
    isPetalAnimationActive = true;
}

// ============================================
// INDEX PAGE LOGIC
// ============================================

function initIndexPage() {
    const introScreen = document.getElementById('intro-screen');
    const transitionScreen = document.getElementById('transition-screen');
    const btnStart = document.getElementById('btn-start');

    // Hiển thị màn hình intro
    if (introScreen) {
        introScreen.classList.add('active');
    }

    // Gắn event listener cho nút rút lộc
    if (btnStart) {
        btnStart.addEventListener('click', function () {
            // Tắt hiệu ứng rơi hoa trong lúc cầu nguyện
            stopPetalAnimation();

            // Chuyển sang màn hình cầu nguyện
            switchScreen(introScreen, transitionScreen);

            // Sau 13 giây, bắt đầu hiệu ứng fade-out
            setTimeout(function () {
                startDivineTransition();
            }, TRANSITION_DURATION - 2000);

            // Sau 15 giây, chọn ảnh và chuyển sang trang kết quả
            setTimeout(function () {
                const selectedImage = getRandomImage();
                // Truyền tên ảnh qua URL parameter
                window.location.href = 'result.html?img=' + encodeURIComponent(selectedImage);
            }, TRANSITION_DURATION);
        });
    }
}

// Divine light transition effect
function startDivineTransition() {
    const overlay = document.getElementById('divine-light-overlay');
    const transContent = document.querySelector('.trans-content');

    if (overlay) {
        overlay.classList.add('active');
    }
    if (transContent) {
        transContent.classList.add('fading-out');
    }
}

// ============================================
// RESULT PAGE LOGIC
// ============================================

function initResultPage() {
    const resultScreen = document.getElementById('result-screen');
    const blessingImage = document.getElementById('blessing-image');
    const blessingCard = document.querySelector('.blessing-card');
    const blessingGlow = document.querySelector('.blessing-card-glow');
    const cardFrame = document.querySelector('.card-frame');
    const resultButtons = document.querySelector('.result-buttons');
    const wishText = document.querySelector('.wish-text');
    const btnDownload = document.getElementById('btn-download');
    const btnHome = document.getElementById('btn-home');

    // Lấy tên ảnh từ URL
    const imageName = getImageFromURL();

    if (!imageName) {
        // Không có ảnh trong URL - quay về trang chủ
        window.location.href = 'index.html';
        return;
    }

    const imagePath = getImagePath(imageName);

    // Set image source but don't show yet
    if (blessingImage) {
        blessingImage.src = imagePath;
        blessingImage.alt = 'Lộc Thánh - ' + imageName;
    }

    // Start staged reveal animation
    startStagedReveal(resultScreen, blessingGlow, blessingCard, cardFrame, blessingImage, resultButtons, wishText);

    // Initialize Share Buttons
    initShareButtons();

    // Nút tải ảnh
    if (btnDownload) {
        btnDownload.addEventListener('click', async function () {
            const downloadNotice = document.getElementById('download-notice');

            try {
                const response = await fetch(imagePath);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'LocThanh_2026_' + imageName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                // Hiển thị thông báo thành công
                if (downloadNotice) {
                    downloadNotice.classList.remove('hidden');
                    setTimeout(function () {
                        downloadNotice.classList.add('hidden');
                    }, 3000);
                }
            } catch (error) {
                window.open(imagePath, '_blank');
            }
        });
    }

    // Nút về trang chủ
    if (btnHome) {
        btnHome.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
}

// ============================================
// STAGED REVEAL ANIMATION
// ============================================

function startStagedReveal(resultScreen, blessingGlow, blessingCard, cardFrame, blessingImage, resultButtons, wishText) {
    // Initially set to dark reveal mode
    if (resultScreen) {
        resultScreen.classList.add('reveal-mode');
    }

    // Stage 1: Background lightens and content fades in (0-2s)
    setTimeout(() => {
        if (resultScreen) {
            resultScreen.classList.add('reveal-stage-1');
        }
    }, 100);

    // Stage 2: Glow disabled - skip to stage 3

    // Stage 3: Card emerges (2s)
    setTimeout(() => {
        if (blessingCard) {
            blessingCard.classList.remove('hidden-initial');
            blessingCard.classList.add('revealing');
        }
    }, 2000);

    // Stage 4: Image reveals from left to right (starts at 2.5s, takes 8s with pauses)
    setTimeout(() => {
        if (blessingImage) {
            blessingImage.classList.add('revealing');
        }
    }, 2500);

    // Stage 5: Buttons and wish text fade in after image fully revealed (2.5s + 8s = 10.5s)
    setTimeout(() => {
        if (resultButtons) {
            resultButtons.classList.remove('hidden-initial');
            resultButtons.classList.add('revealing');
        }
    }, 11000);

    setTimeout(() => {
        if (wishText) {
            wishText.classList.remove('hidden-initial');
            wishText.classList.add('revealing');
        }
        // Resume petal animation after full reveal
        resumePetalAnimation();
    }, 11500);
}

// Create sparkle effect around the blessing card
function startSparkleEffect(container) {
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    // Create sparkles for 5 seconds
    const sparkleInterval = setInterval(() => {
        createSparkle(container, containerRect);
    }, 200);

    setTimeout(() => {
        clearInterval(sparkleInterval);
    }, 5000);
}

function createSparkle(container, rect) {
    const sparkle = document.createElement('div');
    sparkle.className = 'divine-sparkle';

    // Random position around the card
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    const x = rect.width / 2 + Math.cos(angle) * distance;
    const y = rect.height / 2 + Math.sin(angle) * distance;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';

    container.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 4000);
}

// Handle Share Buttons
function initShareButtons() {
    const btnFB = document.getElementById('btn-share-fb');
    const btnZalo = document.getElementById('btn-share-zalo');
    const btnInsta = document.getElementById('btn-share-insta');
    const currentUrl = window.location.href;

    if (btnFB) {
        btnFB.addEventListener('click', function () {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl), '_blank');
        });
    }

    if (btnZalo) {
        btnZalo.addEventListener('click', function () {
            // Zalo share link usually requires mobile app or specific implementation
            // Using generic share intent if possible or copy link
            window.open('https://zalo.me/share/?url=' + encodeURIComponent(currentUrl), '_blank');
        });
    }

    if (btnInsta) {
        btnInsta.addEventListener('click', function () {
            // Instagram doesn't support direct link sharing from web easily
            // Fallback to copy link behavior
            navigator.clipboard.writeText(currentUrl).then(function () {
                showCopyNotice('Đã copy link! Hãy dán vào Instagram stories hoặc bài viết.');
            }, function (err) {
                console.error('Không thể copy text: ', err);
            });
        });
    }
}

function showCopyNotice(message) {
    let notice = document.querySelector('.copy-notice');
    if (!notice) {
        notice = document.createElement('div');
        notice.className = 'copy-notice';
        document.body.appendChild(notice);
    }
    notice.textContent = message;
    notice.classList.add('show');

    setTimeout(() => {
        notice.classList.remove('show');
    }, 3000);
}

// ============================================
// SECURITY MODE
// ============================================
function initSecurityMode() {
    // 1. Disable Right Click Context Menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // 2. Disable Keyboard Shortcuts for DevTools & Source
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+S (Save Page)
        if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Prevent Drag & Drop for Images
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Kích hoạt chế độ bảo mật
    initSecurityMode();

    // Bắt đầu hiệu ứng rơi hoa
    startPetalAnimation();

    // Xác định đang ở trang nào
    const isResultPage = window.location.pathname.includes('result.html');

    if (isResultPage) {
        initResultPage();
    } else {
        initIndexPage();
    }
});

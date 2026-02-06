"use client";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
    return (
        <section id="intro-screen" className="screen active">
            {/* Full Width Layout */}
            <div className="full-layout">
                {/* Center Content */}
                <div className="center-content">
                    {/* Header */}
                    <header className="header">
                        <div className="cross">✝</div>
                        <p className="greeting">Chúc Mừng Năm Mới</p>
                        <a href="https://anhfrassati.io.vn/" target="_blank" className="parish">
                            PIER GIORGIO FRASSATI
                        </a>
                    </header>

                    {/* Main */}
                    <main className="main">
                        <h1 className="title hero-title">
                            <span className="line1">Hái Lộc</span>
                            <span className="line2 glow">Lời Chúa</span>
                            <span className="line1">Đầu Xuân</span>
                        </h1>

                        <div className="scripture-box">
                            <blockquote>
                                "Lời Chúa là ngọn đèn soi cho con bước,<br />
                                là ánh sáng chỉ đường con đi."
                            </blockquote>
                            <cite>Thánh Vịnh 119:105</cite>
                        </div>

                        <p className="instruction">
                            Xin hãy đặt tay lên tim, tĩnh tâm cầu nguyện,<br />
                            rồi bấm nút bên dưới để đón nhận Lời Chúa dành cho bạn.
                        </p>

                        <button id="btn-start" className="cta-btn" onClick={onStart}>
                            ✝ Cầu Nguyện & Rút Lộc
                        </button>
                    </main>

                    {/* Footer */}
                    <footer className="footer expanded-footer">
                        <p className="copyright">© 2026 Pier Giorgio Frassati</p>
                        <p className="description">
                            Đây là trang web giúp các bạn trẻ Việt Nam tìm hiểu về Thánh Pier Giorgio Frassati
                        </p>
                        <p className="contact">
                            Mọi đóng góp ý kiến, thiết kế và tài liệu vui lòng liên hệ với chúng tôi qua email:{" "}
                            <a href="mailto:anhfrassati@gmail.com">anhfrassati@gmail.com</a>
                        </p>
                    </footer>
                </div>
            </div>
        </section>
    );
}

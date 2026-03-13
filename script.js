// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动导航
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // 减去导航栏高度
                behavior: 'smooth'
            });
        });
    });

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // 简单的表单验证
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }

            // 模拟表单提交
            alert('留言已发送！我们会尽快回复您。');
            this.reset();
        });
    }

    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(51, 51, 51, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = '#333';
            nav.style.boxShadow = 'none';
        }
    });

    // 页面加载动画
    const fadeElements = document.querySelectorAll('.hero, .about, .portfolio, .contact');

    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初始设置
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // 第一次调用
    fadeInOnScroll();

    // 滚动时调用
    window.addEventListener('scroll', fadeInOnScroll);

    // 图片查看功能
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');
    const portfolioImages = document.querySelectorAll('.portfolio-item img');

    // 为所有图片添加点击事件
    portfolioImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 按ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
// 粒子背景效果
/*
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
*/

// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端导航菜单
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 点击导航链接关闭菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 滚动到指定区域
document.getElementById('scrollDown').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// 返回顶部按钮
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 数字增长动画
function animateNumbers() {
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2秒完成动画
        const startTime = Date.now();
        const startValue = 0;
        
        function updateNumber() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(startValue + progress * (target - startValue));
            stat.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        }
        
        updateNumber();
    });
}

// 修复案例轮播功能
document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.case-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
  let slideInterval;

  // 显示指定幻灯片
function showSlide(index) {
    // 隐藏所有幻灯片
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // 更新指示点状态
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // 显示当前幻灯片和激活当前指示点
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

  // 初始化：确保只显示第一张幻灯片
  function initSlider() {
    // 先隐藏所有幻灯片
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // 只显示第一张
    if(slides.length > 0) {
      slides[0].classList.add('active');
      dots[0].classList.add('active');
    }
  }
  
  // 切换到下一张幻灯片
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

  // 设置自动轮播
  function startAutoSlide() {
    // 清除可能存在的旧定时器
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // 点击指示点切换幻灯片
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval); // 清除当前计时器
      showSlide(index);
      startAutoSlide(); // 重新开始自动轮播
    });
  });
  
  // 初始化轮播
  initSlider();
  startAutoSlide();
});

// 滚动动画
function checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.9) {
            element.classList.add('visible');
        }
    });
}

// 初始检查
window.addEventListener('load', () => {
    checkScroll();
    animateNumbers();
});

// 滚动时检查
window.addEventListener('scroll', checkScroll);

// 表单提交验证
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和提交到服务器的代码
            
            // 显示美化的成功消息
            showSuccessMessage();
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 显示成功消息函数
    function showSuccessMessage() {
        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'form-overlay';
        document.body.appendChild(overlay);
        
        // 创建成功消息框
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `
            <h4>提交成功！</h4>
            <p>感谢您的信息，我们将尽快与您联系。</p>
            <button class="close-btn">关闭</button>
        `;
        document.body.appendChild(successMessage);
        
        // 绑定关闭按钮事件
        const closeBtn = successMessage.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
            document.body.removeChild(successMessage);
        });
        
        // 点击遮罩层也可关闭
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
            document.body.removeChild(successMessage);
        });
    }
});

// 移动端优化
function optimizeCaseImages() {
    const caseImages = document.querySelectorAll('.case-image img');
    const isMobile = window.innerWidth <= 768;
    
    caseImages.forEach(img => {
        // 让图片加载完成后再计算高度
        img.onload = function() {
            if (isMobile) {
                // 移动端优化：限制最大高度并使用cover模式
                img.style.maxHeight = '250px';
                img.style.objectFit = 'cover';
            } else {
                // 桌面端：自适应高度
                img.style.maxHeight = '';
                img.style.objectFit = 'cover';
            }
        };
        
        // 如果图片已经加载完成，立即执行
        if (img.complete) {
            img.onload();
        }
    });
}

// 页面加载和窗口大小改变时优化图片
window.addEventListener('load', optimizeCaseImages);
window.addEventListener('resize', optimizeCaseImages);

// 案例轮播图片优化
function optimizeSquareCaseImages() {
  const caseImages = document.querySelectorAll('.case-image');
  const isMobile = window.innerWidth <= 768;
  
  caseImages.forEach(container => {
    // 确保容器是正方形
    container.style.aspectRatio = "1/1";
    
    const img = container.querySelector('img');
    if (img) {
      // 确保图片正确填充容器
      img.style.objectFit = "cover";
      img.style.width = "100%";
      img.style.height = "100%";
      
      // 适应左右布局
      if (!isMobile) {
        // 桌面端左右布局优化
        const containerWidth = container.parentElement.offsetWidth * 0.45;
        // 控制最大宽度
        if (containerWidth > 400) {
          container.style.maxWidth = "400px";
        }
      } else {
        // 移动端优化
        container.style.maxWidth = "none";
      }
    }
  });
}

// 确保DOM加载完成后初始化显示
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.case-slide');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (slides.length > 0) {
    // 显示第一张幻灯片
    slides[0].classList.add('active');
    if (dots.length > 0) {
      dots[0].classList.add('active');
    }
    
    // 优化图片尺寸
    optimizeSquareCaseImages();
  }
});

// 窗口大小变化时重新调整
window.addEventListener('resize', optimizeSquareCaseImages);

// 优化移动端视频组件逻辑
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    // 只在移动端执行
    if (isMobile) {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return; // 如果没有找到hero-content元素，提前返回
        
        // 检查是否已经存在视频播放组件
        if (document.querySelector('.mobile-video-player')) return; // 如果已存在，避免重复创建
        
        // 创建视频播放器
        const videoPlayer = createVideoPlayer();
        heroContent.appendChild(videoPlayer.container);
        
        // 设置事件监听和控制逻辑
        setupVideoEvents(videoPlayer);
    }
    
    // 创建视频播放器函数
    function createVideoPlayer() {
        // 创建容器
        const container = document.createElement('div');
        container.className = 'mobile-video-player';
        Object.assign(container.style, {
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            marginTop: '25px',
            marginBottom: '25px',
            width: '100%',
            maxWidth: '320px'
        });
        
        // 创建视频元素
        const video = document.createElement('video');
        Object.assign(video, {
            playsInline: true,
            muted: true,
            autoplay: true,
            loop: false,
            controls: false,
            id: 'mobile-hero-video'
        });
        Object.assign(video.style, {
            display: 'block',
            width: '100%',
            borderRadius: '12px'
        });
        
        // 添加视频源
        const source = document.createElement('source');
        source.src = 'bg.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);
        
        // 创建控制界面
        const controls = createCustomControls();
        
        // 组装播放器
        container.appendChild(video);
        container.appendChild(controls.container);
        
        return {
            container,
            video,
            controls
        };
    }
    
    // 创建自定义控制界面函数
    function createCustomControls() {
        // 创建控制容器
        const container = document.createElement('div');
        container.className = 'video-custom-controls';
        Object.assign(container.style, {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '10px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });
        
        // 创建左侧控制按钮组
        const leftControls = document.createElement('div');
        leftControls.style.display = 'flex';
        leftControls.style.alignItems = 'center';
        
        // 播放/暂停按钮
        const playPauseBtn = createButton('video-play-pause-btn', 
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="white"></path></svg>',
            { marginRight: '10px' });
        
        // 音量按钮
        const volumeBtn = createButton('video-volume-btn',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="white"></path></svg>');
        
        // 进度条容器
        const progressContainer = document.createElement('div');
        progressContainer.className = 'video-progress-container';
        Object.assign(progressContainer.style, {
            flex: '1',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '5px',
            margin: '0 10px',
            position: 'relative',
            cursor: 'pointer'
        });
        
        // 进度条
        const progressBar = document.createElement('div');
        progressBar.className = 'video-progress-bar';
        Object.assign(progressBar.style, {
            height: '100%',
            width: '0%',
            background: '#0A3D62',
            borderRadius: '5px',
            transition: 'width 0.1s ease'
        });
        progressContainer.appendChild(progressBar);
        
        // 创建右侧控制按钮组
        const rightControls = document.createElement('div');
        rightControls.style.display = 'flex';
        rightControls.style.alignItems = 'center';
        
        // 时间显示
        const timeDisplay = document.createElement('div');
        timeDisplay.className = 'video-time-display';
        timeDisplay.textContent = '0:00 / 0:00';
        Object.assign(timeDisplay.style, {
            color: 'white',
            fontSize: '12px',
            marginRight: '10px'
        });
        
        // 全屏按钮
        const fullscreenBtn = createButton('video-fullscreen-btn',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"></path></svg>');
        
        // 组装控制界面
        leftControls.appendChild(playPauseBtn);
        leftControls.appendChild(volumeBtn);
        
        rightControls.appendChild(timeDisplay);
        rightControls.appendChild(fullscreenBtn);
        
        container.appendChild(leftControls);
        container.appendChild(progressContainer);
        container.appendChild(rightControls);
        
        return {
            container,
            playPauseBtn,
            volumeBtn,
            progressContainer,
            progressBar,
            timeDisplay,
            fullscreenBtn
        };
    }
    
    // 创建按钮辅助函数
    function createButton(className, innerHTML, extraStyles = {}) {
        const button = document.createElement('button');
        button.className = className;
        button.innerHTML = innerHTML;
        
        const baseStyles = {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };
        
        Object.assign(button.style, baseStyles, extraStyles);
        
        return button;
    }
    
    // 设置视频事件监听函数
    function setupVideoEvents(player) {
        const { video, controls, container } = player;
        const { playPauseBtn, volumeBtn, progressContainer, progressBar, timeDisplay, fullscreenBtn } = controls;
        
        // 状态变量
        let videoLoadFailed = false;
        let userPaused = false;
        let videoMuted = true;
        
        // 辅助函数：格式化时间
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        // 辅助函数：更新时间显示
        function updateTimeDisplay() {
            if (!isNaN(video.duration)) {
                const currentTime = formatTime(video.currentTime);
                const duration = formatTime(video.duration);
                timeDisplay.textContent = `${currentTime} / ${duration}`;
            }
        }
        
        // 错误处理
        video.addEventListener('error', function() {
            videoLoadFailed = true;
            container.style.display = 'none';
            
            // 创建透明占位符保持布局
            try {
                const placeholderHeight = getComputedStyle(container).height;
                if (placeholderHeight && placeholderHeight !== '0px') {
                    const placeholder = document.createElement('div');
                    placeholder.style.height = placeholderHeight;
                    placeholder.style.marginBottom = '25px';
                    placeholder.style.opacity = '0';
                    container.parentNode.appendChild(placeholder);
                }
            } catch (e) {
                console.log('无法创建占位符');
            }
        });
        
        // 超时处理
        const videoTimeout = setTimeout(function() {
            if (video.readyState === 0) {
                videoLoadFailed = true;
                container.style.display = 'none';
            }
        }, 3000);
        
        // 元数据加载完成
        video.addEventListener('loadedmetadata', function() {
            video.style.transform = 'translateZ(0)'; // 启用硬件加速
            updateTimeDisplay();
            
            if (!userPaused) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(function() {
                        // 播放成功，1秒后显示控制界面，再1秒后隐藏
                        setTimeout(function() {
                            controls.container.style.opacity = '1';
                            setTimeout(function() {
                                if (!video.paused) {
                                    controls.container.style.opacity = '0';
                                }
                            }, 1000);
                        }, 1000);
                    }).catch(function() {
                        // 自动播放失败，显示播放按钮
                        controls.container.style.opacity = '1';
                        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" fill="white"></path></svg>';
                    });
                }
            }
        });
        
        // 视频加载完成
        video.addEventListener('loadeddata', function() {
            clearTimeout(videoTimeout);
            if (!videoLoadFailed && !userPaused) {
                video.play();
            }
        });
        
        // 时间更新
        video.addEventListener('timeupdate', function() {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${progress}%`;
            updateTimeDisplay();
        });
        
        // 播放状态改变
        video.addEventListener('playing', function() {
            playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="white"></path></svg>';
        });
        
        // 播放结束
        video.addEventListener('ended', function() {
            playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" fill="white"></path></svg>';
            controls.container.style.opacity = '1';
        });
        
        // 播放/暂停按钮点击
        playPauseBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                userPaused = false;
                playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="white"></path></svg>';
            } else {
                video.pause();
                userPaused = true;
                playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" fill="white"></path></svg>';
            }
        });
        
        // 音量按钮点击
        volumeBtn.addEventListener('click', function() {
            videoMuted = !videoMuted;
            video.muted = videoMuted;
            
            volumeBtn.innerHTML = videoMuted ? 
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="white"></path></svg>' :
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="white"></path></svg>';
        });
        
        // 全屏按钮点击
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen();
            }
        });
        
        // 全屏状态变化
        document.addEventListener('fullscreenchange', function() {
            fullscreenBtn.innerHTML = document.fullscreenElement ?
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="white"></path></svg>' :
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"></path></svg>';
        });
        
        // 进度条点击
        progressContainer.addEventListener('click', function(e) {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        });
        
        // 视频点击
        video.addEventListener('click', function() {
            const controlsOpacity = controls.container.style.opacity;
            if (controlsOpacity === '0' || controlsOpacity === '') {
                controls.container.style.opacity = '1';
                // 如果正在播放，3秒后自动隐藏
                if (!video.paused) {
                    setTimeout(function() {
                        controls.container.style.opacity = '0';
                    }, 3000);
                }
            } else {
                controls.container.style.opacity = '0';
            }
        });
        
        // 鼠标悬停
        container.addEventListener('mouseenter', function() {
            controls.container.style.opacity = '1';
        });
        
        // 鼠标离开
        container.addEventListener('mouseleave', function() {
            if (!video.paused) {
                controls.container.style.opacity = '0';
            }
        });
    }
});

// 添加以下更可靠的代码来确保品牌承诺模块正确显示
document.addEventListener('DOMContentLoaded', function() {
  // 确保品牌承诺模块正确显示
  const promiseSection = document.getElementById('promise');
  if (promiseSection) {
    // 确保模块可见
    promiseSection.style.display = 'block';
    
    // 确保标题和内部元素正确显示
    const promiseTitle = promiseSection.querySelector('h2');
    if (promiseTitle) {
      promiseTitle.style.display = 'block';
      promiseTitle.style.color = 'white';
      promiseTitle.style.visibility = 'visible';
      promiseTitle.style.opacity = '1';
    }
    
    // 确保段落正确显示
    const promiseParagraph = promiseSection.querySelector('p.text-center');
    if (promiseParagraph) {
      promiseParagraph.style.display = 'block';
      promiseParagraph.style.color = 'white';
      promiseParagraph.style.visibility = 'visible';
      promiseParagraph.style.opacity = '1';
    }
    
    // 确保所有promise-item正确显示
    const promiseItems = promiseSection.querySelectorAll('.promise-item');
    promiseItems.forEach(item => {
      item.style.display = 'block';
      item.style.visibility = 'visible';
      item.style.opacity = '1';
      
      // 确保SVG图标正确显示
      const iconContainer = item.querySelector('.promise-icon');
      const svg = item.querySelector('svg');
      if (iconContainer && svg) {
        iconContainer.style.display = 'flex';
        svg.style.fill = 'white';
        svg.style.display = 'block';
        svg.style.visibility = 'visible';
        svg.style.opacity = '1';
      }
      
      // 确保标题和段落可见
      const h3 = item.querySelector('h3');
      const p = item.querySelector('p');
      if (h3) {
        h3.style.color = 'white';
        h3.style.display = 'block';
        h3.style.visibility = 'visible';
      }
      if (p) {
        p.style.color = 'white';
        p.style.display = 'block';
        p.style.visibility = 'visible';
      }
    });
  }
});

// 添加移动端视频背景修复代码
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const heroSection = document.querySelector('.hero');
    const videoBackground = document.querySelector('.video-background');
    const isMobile = window.innerWidth <= 768;
    
    // 仅针对移动端处理
    if (isMobile) {
        // 确保视频背景容器清晰可见
        if (videoBackground) {
            videoBackground.style.opacity = '1';
        }
        
        if (video) {
            // 重置视频样式
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.position = 'absolute';
            video.style.top = '0';
            video.style.left = '0';
            video.style.transform = 'none';
            
            // 确保视频正确属性设置
            video.muted = true;
            video.playsInline = true;
            video.autoplay = true;
            
            // 处理视频加载失败的情况
            video.addEventListener('error', handleVideoFailure);
            
            // 设置加载超时
            const videoTimeout = setTimeout(function() {
                if (video.readyState === 0) { // 尚未加载
                    handleVideoFailure();
                }
            }, 3000);
            
            // 视频成功加载后清除超时
            video.addEventListener('loadeddata', function() {
                clearTimeout(videoTimeout);
            });
            
            // 尝试播放视频
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(function() {
                    handleVideoFailure();
                });
            }
        } else {
            // 视频元素不存在时使用静态背景
            handleVideoFailure();
        }
        
        // 确保没有黑色遮罩
        document.querySelectorAll('.hero::before, .hero::after, .video-background::before, .video-background::after').forEach(function(overlay) {
            if (overlay) overlay.style.display = 'none';
        });
    }
    
    // 视频失败处理函数
    function handleVideoFailure() {
        // 隐藏视频背景
        if (videoBackground) {
            videoBackground.style.display = 'none';
        }
        
        // 使用静态背景图
        heroSection.style.backgroundImage = 'url("bg.jpeg")';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }
});


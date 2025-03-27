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
    // 判断是否为移动设备
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 1. 只在移动端执行
    if (isMobile) {
        // 尝试加载移动端视频组件
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        // 视频加载和播放逻辑
        loadMobileVideo(heroContent);
    }
    
    // 移动端视频加载函数
    function loadMobileVideo(heroContent) {
        try {
            // 防止重复创建
            if (document.querySelector('.mobile-video-player')) return;
            
            // 创建视频元素但先不添加到DOM
            const videoElement = document.createElement('video');
            videoElement.id = 'mobile-hero-video';
            videoElement.setAttribute('playsinline', '');
            videoElement.setAttribute('webkit-playsinline', '');
            videoElement.setAttribute('preload', 'metadata');
            videoElement.setAttribute('poster', 'images/bg.jpeg');
            videoElement.setAttribute('controls', '');
            videoElement.muted = true;
            
            // 添加视频源
            const videoSource = document.createElement('source');
            videoSource.src = 'bg.mp4';
            videoSource.type = 'video/mp4';
            videoElement.appendChild(videoSource);
            
            // 视频容器样式
            const containerStyles = {
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                margin: '25px auto',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '16/9',
                backgroundColor: '#000',
                display: 'none' // 初始隐藏，等加载成功再显示
            };
            
            // 视频元素样式
            const videoStyles = {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
            };
            
            // 设置视频加载事件
            videoElement.addEventListener('loadedmetadata', function onMetadataLoaded() {
                // 清除可能的超时检测
                if (window.videoLoadTimeout) {
                    clearTimeout(window.videoLoadTimeout);
                }
                
                // 创建并添加容器
                const videoContainer = document.createElement('div');
                videoContainer.className = 'mobile-video-player';
                Object.assign(videoContainer.style, containerStyles);
                
                // 设置视频样式
                Object.assign(videoElement.style, videoStyles);
                
                // 添加到容器
                videoContainer.appendChild(videoElement);
                
                // 添加到页面
                heroContent.appendChild(videoContainer);
                
                // 显示容器并播放视频
                setTimeout(() => {
                    videoContainer.style.display = 'block';
                    
                    // 尝试播放视频
                    const playPromise = videoElement.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            console.log('需要用户交互才能播放视频');
                        });
                    }
                }, 100);
                
                // 移除事件监听器
                videoElement.removeEventListener('loadedmetadata', onMetadataLoaded);
            });
            
            // 处理加载失败 - 完全静默失败
            function handleFailure() {
                // 停止加载视频
                try {
                    videoElement.pause();
                    videoElement.src = '';
                    videoElement.load();
                } catch (e) {}
                
                // 不添加任何DOM元素，不影响布局
                console.log('视频加载失败，无需任何处理');
            }
            
            // 错误处理
            videoElement.addEventListener('error', handleFailure);
            
            // 设置超时检测
            window.videoLoadTimeout = setTimeout(() => {
                if (!videoElement.readyState || videoElement.readyState < 2) {
                    handleFailure();
                }
            }, 5000);
            
            // 开始加载视频
            videoElement.load();
        } catch (error) {
            // 完全静默处理任何错误
            console.error('视频组件初始化失败，但不影响布局', error);
        }
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


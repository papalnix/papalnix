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
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 1. 只在移动端执行
    if (isMobile) {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        // 提前保存布局信息用于失败时恢复
        const originalLayout = {
            marginTop: '25px',
            marginBottom: '25px',
            width: '100%',
            maxWidth: '320px',
            height: '180px' // 预设高度，如果加载失败时使用
        };
        
        // 2. 尝试调用移动端原生媒体播放控件
        try {
            // 检查是否已经存在视频播放组件
            if (document.querySelector('.mobile-video-player')) return;
            
            // 创建一个不可见的视频容器，先不添加到DOM，避免出现布局闪烁
            const videoContainer = document.createElement('div');
            videoContainer.className = 'mobile-video-player';
            Object.assign(videoContainer.style, {
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                marginTop: originalLayout.marginTop,
                marginBottom: originalLayout.marginBottom,
                width: originalLayout.width,
                maxWidth: originalLayout.maxWidth,
                opacity: '0', // 初始不可见，加载成功后才显示
                transition: 'opacity 0.3s ease'
            });
            
            // 使用最简单的原生视频标签
            const videoElement = document.createElement('video');
            
            // 设置关键属性
            videoElement.setAttribute('playsinline', ''); // 支持内联播放，iOS需要
            videoElement.setAttribute('webkit-playsinline', ''); // 兼容旧版Safari
            videoElement.setAttribute('x5-playsinline', ''); // 兼容微信浏览器
            videoElement.setAttribute('x5-video-player-type', 'h5'); // 强制H5播放器，微信浏览器
            videoElement.setAttribute('x5-video-player-fullscreen', 'true'); // 全屏设置，微信浏览器
            videoElement.setAttribute('preload', 'metadata'); // 只预加载元数据，减少流量
            videoElement.setAttribute('poster', './images/bg.jpeg'); // 设置封面，加载前显示
            videoElement.setAttribute('controls', ''); // 显示原生控件
            
            // 不自动设置autoplay，我们将在加载后手动尝试播放
            videoElement.muted = true; // 默认静音，增加自动播放成功率
            videoElement.id = 'mobile-hero-video';
            
            // 设置样式
            Object.assign(videoElement.style, {
                display: 'block',
                width: '100%',
                borderRadius: '12px',
                backgroundColor: '#000',
                objectFit: 'cover' // 确保视频填充整个容器
            });
            
            // 添加视频源
            const videoSource = document.createElement('source');
            videoSource.src = './bg.mp4';
            videoSource.type = 'video/mp4';
            videoElement.appendChild(videoSource);
            
            // 添加到容器，但暂不显示
            videoContainer.appendChild(videoElement);
            
            // 设置超时检测，如果视频在指定时间内没有加载，则使用备用方案
            const loadTimeout = setTimeout(() => {
                if (!videoElement.readyState || videoElement.readyState < 2) {
                    useFallbackSolution(videoContainer, originalLayout);
                }
            }, 3000);
            
            // 监听视频加载成功事件
            videoElement.addEventListener('loadeddata', function() {
                clearTimeout(loadTimeout);
                
                // 视频加载成功，显示容器
                videoContainer.style.opacity = '1';
                
                // 尝试自动播放
                const playPromise = videoElement.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // 自动播放失败，但已经显示了原生控件，用户可以手动点击播放
                        console.log('需要用户交互才能播放视频');
                    });
                }
            });
            
            // 监听错误事件
            videoElement.addEventListener('error', function() {
                clearTimeout(loadTimeout);
                useFallbackSolution(videoContainer, originalLayout);
            });
            
            // 将容器添加到页面
            heroContent.appendChild(videoContainer);
            
        } catch (error) {
            // 如果任何步骤出错，静默处理，使用备用方案
            console.error('视频组件初始化失败，使用备用方案', error);
            useFallbackSolution(null, originalLayout, heroContent);
        }
    }
    
    // 备用方案：使用静态图片或空白占位符
    function useFallbackSolution(container, layout, parentElement) {
        try {
            // 如果容器不存在，创建一个新的
            if (!container) {
                container = document.createElement('div');
                container.className = 'mobile-video-fallback';
                Object.assign(container.style, {
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginTop: layout.marginTop,
                    marginBottom: layout.marginBottom,
                    width: layout.width,
                    maxWidth: layout.maxWidth,
                    height: layout.height,
                    backgroundImage: 'url("./images/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                });
                
                // 如果提供了父元素，添加到父元素
                if (parentElement) {
                    parentElement.appendChild(container);
                }
            } else {
                // 清空现有容器内容
                container.innerHTML = '';
                
                // 更新容器样式为静态背景
                Object.assign(container.style, {
                    opacity: '1',
                    backgroundImage: 'url("./images/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: layout.height
                });
            }
        } catch (e) {
            // 完全静默失败，不影响页面
            console.error('备用方案也失败了，但用户无感知', e);
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


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

// 添加移动端首屏区域调整代码
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    // 只在移动端执行以下代码
    if (isMobile) {
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent) {
            // 创建移动端视频播放器容器
            const videoPlayerContainer = document.createElement('div');
            videoPlayerContainer.className = 'mobile-video-player';
            
            // 创建视频元素
            const videoElement = document.createElement('video');
            videoElement.controls = false; // 初始不显示控制栏
            videoElement.playsInline = true;
            videoElement.muted = true; // 默认静音以允许自动播放
            videoElement.id = 'mobile-hero-video';
            videoElement.style.display = 'block';
            
            // 添加视频源
            const videoSource = document.createElement('source');
            videoSource.src = 'bg.mp4'; // 视频源
            videoSource.type = 'video/mp4';
            
            // 播放失败时显示的文本
            videoElement.textContent = '您的浏览器不支持视频播放';
            
            // 将源添加到视频元素
            videoElement.appendChild(videoSource);
            
            // 创建播放按钮
            const playButton = document.createElement('button');
            playButton.className = 'video-play-btn';
            playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>';
            
            // 添加视频元素和播放按钮到容器
            videoPlayerContainer.appendChild(videoElement);
            videoPlayerContainer.appendChild(playButton);
            
            // 添加到hero-content之后
            heroContent.appendChild(videoPlayerContainer);
            
            // 处理视频加载错误
            videoElement.addEventListener('error', function() {
                console.log('视频加载失败');
                videoPlayerContainer.style.display = 'none'; // 隐藏整个视频播放器容器
            });
            
            // 播放按钮点击事件
            playButton.addEventListener('click', function() {
                // 尝试播放视频
                const playPromise = videoElement.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(function() {
                        // 播放成功
                        videoElement.controls = true; // 显示控制栏
                        videoElement.muted = false; // 取消静音
                        playButton.style.display = 'none'; // 隐藏播放按钮
                    }).catch(function(error) {
                        // 播放失败
                        console.log('视频播放失败:', error);
                        // 如果是因为用户交互限制，提示用户
                        alert('请点击视频进行播放');
                    });
                }
            });
            
            // 尝试自动播放（通常移动设备会阻止，但我们仍然尝试）
            videoElement.addEventListener('loadeddata', function() {
                const autoplayPromise = videoElement.play();
                
                if (autoplayPromise !== undefined) {
                    autoplayPromise.catch(function() {
                        // 自动播放失败，保持播放按钮可见
                        console.log('自动播放被阻止，等待用户交互');
                    });
                }
            });
            
            // 监听DOM变化，如果视频元素被移除，确保不影响布局
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' && !heroContent.contains(videoPlayerContainer)) {
                        // 如果视频容器被移除，确保布局正常
                        console.log('视频容器被移除，调整布局');
                        // 可以在这里添加额外的布局调整代码
                    }
                });
            });
            
            // 开始观察DOM变化
            observer.observe(heroContent, { childList: true });
            
            // 设置加载超时（5秒）
            setTimeout(function() {
                if (videoElement.readyState === 0) { // 未加载
                    console.log('视频加载超时');
                    videoPlayerContainer.style.display = 'none'; // 隐藏视频容器
                }
            }, 5000);
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


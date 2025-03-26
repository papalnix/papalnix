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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nameErrorMessage = document.getElementById('name-error-message');
    const phoneErrorMessage = document.getElementById('phone-error-message');
    const phoneRegex = /^(?:\d{8}|\d{11})$/; // 正则表达式：8位或11位数字

    // 清空错误信息
    if (nameErrorMessage) nameErrorMessage.textContent = '';
    if (phoneErrorMessage) phoneErrorMessage.textContent = '';

    // 姓名校验
    if (nameInput.value.trim() === '') {
        if (nameErrorMessage) nameErrorMessage.textContent = '姓名不能为空。';
    }

    // 手机号校验
    if (!phoneRegex.test(phoneInput.value)) {
        if (phoneErrorMessage) phoneErrorMessage.textContent = '请输入有效的8位或11位手机号。';
    }

    // 如果没有错误，显示成功提示并清除输入框
    if (nameInput.value.trim() !== '' && phoneRegex.test(phoneInput.value)) {
        alert('提交成功！');
        nameInput.value = ''; // 清除姓名输入框
        phoneInput.value = ''; // 清除电话输入框
        // 这里可以添加表单提交的逻辑
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

// 添加视频背景的相关处理
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    
    // 确保视频自动播放
    video.play().catch(function(error) {
        console.log('视频自动播放失败，这在某些浏览器中是正常的: ', error);
        // 可以在这里添加一个播放按钮作为后备方案
    });
    
    // 其他现有的初始化代码保持不变...
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

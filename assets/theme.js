/**
 * Knowledge Hub - 主题切换系统
 * 支持深色/浅色模式切换，自动跟随系统主题
 */

(function() {
  'use strict';

  // 检查系统主题偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // 获取保存的主题或默认使用系统偏好
  function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return prefersDark.matches ? 'dark' : 'light';
  }

  // 应用主题
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateButtonIcon(theme);
  }

  // 更新按钮图标
  function updateButtonIcon(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
      btn.title = theme === 'light' ? '切换到深色模式' : '切换到浅色模式';
    }
  }

  // 切换主题
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  }

  // 初始化主题
  function initTheme() {
    const theme = getTheme();
    applyTheme(theme);
  }

  // 创建主题切换按钮
  function createThemeButton() {
    // 避免重复创建
    if (document.querySelector('.theme-toggle')) return;

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.onclick = toggleTheme;
    document.body.appendChild(btn);
    
    // 设置初始图标
    updateButtonIcon(getTheme());
  }

  // 监听系统主题变化
  prefersDark.addEventListener('change', function(e) {
    // 只有当用户没有手动设置过主题时才自动切换
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      createThemeButton();
    });
  } else {
    initTheme();
    createThemeButton();
  }

  // 暴露全局函数（供手动调用）
  window.ThemeSystem = {
    toggle: toggleTheme,
    set: applyTheme,
    get: getTheme
  };
})();


document.addEventListener('DOMContentLoaded', () => {

  
  const uuid_input = document.getElementById('uuid');
  const color_input = document.getElementById('color-input');
  const color_box = document.getElementById('color-box');
  const font_size_input = document.getElementById('font_size');
  const font_size_value = document.getElementById('font_size_value');
  const speed_input = document.getElementById('speed');
  const speed_value = document.getElementById('speed_value');
  //const css_style_input = document.getElementById('css_style');
  const enable_danmu_input = document.getElementById('enable_danmu');
  const channel_list_input = document.getElementById('channel_list');
  const notice_span = document.getElementById('notice');

  // 加载之前保存的设置
  chrome.storage.local.get([
    'uuid', 
    'color', 
    'font_size', 
    'speed', 
    'css_style', 
    'enable_danmu',
    'channel_list'
  ], (data) => {
    
    if (data.color) {
      color_input.value = data.color;
      color_box.style.backgroundColor = data.color;
    }
    if (data.font_size) {
      font_size_input.value = data.font_size;
      font_size_value.textContent = data.font_size;
    }
    if (data.speed) {
      speed_input.value = data.speed;
      speed_value.textContent = data.speed;  // 显示当前速度
    }
    if (data.css_style) {
      css_style_input.value = data.css_style;
    }
    if (data.enable_danmu !== undefined) {
      enable_danmu_input.checked = data.enable_danmu;
    }

    if (data.uuid) {
      uuid_input.value = data.uuid;
    }

    if (data.channel_list){
      channel_list_input.value = data.channel_list;
    }

  });

  // 更新字体大小显示值
  font_size_input.addEventListener('input', () => {
    font_size_value.textContent = font_size_input.value;
  });

  // 更新弹幕速度显示值
  speed_input.addEventListener('input', () => {
    speed_value.textContent = speed_input.value;
  });

  // 实时更新颜色框
  color_input.addEventListener('input', () => {
    const color_value = color_input.value;
    color_box.style.backgroundColor = color_value;
  });

  // 弹幕开关状态自动保存
  enable_danmu_input.addEventListener('input', () => {
    const enable_danmu = enable_danmu_input.checked; 
    chrome.storage.local.set({ enable_danmu })
  });


  // 保存设置
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const uuid = uuid_input.value;
    const color = color_input.value;
    const font_size = parseInt(font_size_input.value, 10);
    const speed = parseInt(speed_input.value, 10);
    const css_style = "";
    const enable_danmu = enable_danmu_input.checked;  // 获取开关状态
    const channel_list = channel_list_input.value;

    chrome.storage.local.set({ 
      uuid, 
      color, 
      font_size, 
      speed, 
      css_style, 
      enable_danmu,
      channel_list
    }, () => {
      //alert('设置已保存');
      notice_span.style.cssText = 'opacity: 1; transition: none;';
      notice_span.textContent="设置已保存，刷新页面生效";
      setTimeout(() => (notice_span.style.transition = 'opacity 3s ease-out', notice_span.style.opacity = 0), 500);
      //browser.runtime.reload(); //重新加载拓展
      // 手动注入 content.js 脚本
      // browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      //   browser.tabs.executeScript(tabs[0].id, { file: "content.js" });
      // });

    });
  });

  // 可选：根据弹幕开关的状态来控制弹幕的启用或禁用
  enable_danmu_input.addEventListener('change', () => {
    const danmu_enabled = enable_danmu_input.checked;
    if (danmu_enabled) {
      // 启用弹幕
      console.log("弹幕已开启");
      // 你可以在这里调用启动弹幕的代码
    } else {
      // 禁用弹幕
      console.log("弹幕已关闭");
      // 你可以在这里调用停止弹幕的代码
    }
  });
});

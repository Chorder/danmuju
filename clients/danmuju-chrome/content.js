function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
}

function md51(s) {
    txt = "";
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i;
    for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
}

/* there needs to be support for Unicode here,
* unless we pretend that we can redefine the MD-5
* algorithm for multi-byte characters (perhaps
* by adding every four 16-bit characters and
* shortening the sum to 32 bits). Otherwise
* I suggest performing MD-5 as if every character
* was two bytes--e.g., 0040 0025 = @%--but then
* how will an ordinary MD-5 sum be matched?
* There is no way to standardize text to something
* like UTF-8 before transformation; speed cost is
* utterly prohibitive. The JavaScript standard
* itself needs to look at this: it should start
* providing access to strings as preformed UTF-8
* 8-bit unsigned value arrays.
*/
function md5blk(s) {
    /* I figured global was faster.   */
    var md5blks = [],
        i; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
}

var hex_chr = "0123456789abcdef".split("");

function rhex(n) {
    var s = "",
        j = 0;
    for (; j < 4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
    return s;
}

function hex(x) {
    for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]);
    return x.join("");
}

function md5(s) {
    return hex(md51(s));
}
  
/* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */

function add32(a, b) {
    return (a + b) & 0xffffffff;
}
    
if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
    function add32(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xffff);
    }
}
      
//MD5 Calc Function coded by http://www.myersdaily.org/joseph/javascript/md5.js


(async function() {
    'use strict';

    //获取最后一级目录作为URL
    const url = window.location.origin + window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/') + 1);
    const url_hash = await md5(url);

    let currentChannelUrl = ''; // 存储当前选择的频道的 URL   

    // 创建并插入 Modal
    async function createModal() {
        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'none';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = 9999;

        const modalContent = document.createElement('div');
        modalContent.id = 'modalContent';
        modalContent.style.backgroundColor = '#FFFFFF';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.textAlign = 'center';
        modalContent.style.width = '800px';

        const title = document.createElement('h3');
        title.textContent = '弹幕局 @ 全网弹幕 v1.0';
        modalContent.appendChild(title);

        const channelContainer = document.createElement('div');
        channelContainer.style.display = 'flex';
        channelContainer.style.alignItems = 'center';
        channelContainer.style.marginTop = '15px';

        const channelLabel = document.createElement('p');
        channelLabel.textContent = '切换频道';
        channelLabel.style.fontSize = '14px';
        channelLabel.style.color = '#333';
        channelLabel.style.marginRight = '10px';
        channelContainer.appendChild(channelLabel);

        const channelSelect = document.createElement('select');
        channelSelect.id = 'channelSelect';
        channelSelect.style.width = '150px';
        channelSelect.style.padding = '10px';
        channelSelect.style.border = '1px solid #ccc';
        channelSelect.style.borderRadius = '5px';

        await chrome.storage.local.get(["channel_list","currentChannelUrl"],(data => {
            //console.log(data.channel_list);
            let channels = []
            const default_channels = [
                { name: '弹幕局官方频道', url: 'https://danmuju.pages.dev/api' },
                // { name: '死道友不死频道', url: 'https://xxx/api/' },
            ]

            try{
                channels = JSON.parse(data.channel_list)
                if(channels.length == 0){
                    channels = default_channels;
                }
            }catch(error){
                channels = default_channels;;
            }

            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.url;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });

            if(!data.currentChannelUrl){
                const currentChannelUrl = channels[0].url;//默认选择channels的第一条作为当前channels
                chrome.storage.local.set({currentChannelUrl},() => {
                    console.log(`[弹幕局] 频道已自动设置为 ${currentChannelUrl}`)
                })
            }else{
                console.log(`[弹幕局] 已设置的频道 ${data.currentChannelUrl}`)
            }
            
        }))

        channelContainer.appendChild(channelSelect);
        modalContent.appendChild(channelContainer);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'messageInput';
        input.placeholder = '输入弹幕内容';
        input.style.width = '100%';
        input.style.height = '60px';
        input.style.padding = '3px';
        input.style.marginTop = '10px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
        modalContent.appendChild(input);

        const button = document.createElement('button');
        button.id = 'sendMessageButton';
        button.textContent = '🚀走你';
        button.style.marginTop = '15px';
        button.style.width = '300px';
        button.style.padding = '10px 20px';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => sendMessage(input.value.trim(), channelSelect.value));
        modalContent.appendChild(button);

        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        // 设置关闭按钮的样式
        closeButton.style.position = 'absolute';  // 使用绝对定位
        closeButton.style.top = '1px';           // 距离顶部 10px
        closeButton.style.right = '10px';         // 距离右边 10px
        closeButton.style.fontSize = '36px';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.color = 'red';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontWeight = 'bold';
        // 关闭按钮点击事件
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        // 确保 modalContent 的 position 是 relative，这样按钮能相对它来定位
        modalContent.style.position = 'relative'; // 为 modalContent 设置相对定位
        
        // 将关闭按钮添加到 modalContent 中
        modalContent.appendChild(closeButton);

        const description = document.createElement('p');
        description.innerHTML = '<hr> Created by <a href="https://chorder.net/about/" target="_blank" style="color: #4CAF50; text-decoration: none;">Chorder</a> with <a href="https://chatgpt.com" target="_blank" style="color: #4CAF50; text-decoration: none;">ChatGPT</a> @2024 | <a href="https://github.com/Chorder/danmuju" target="_blank" style="color: #4CAF50; text-decoration: none;">源代码</a> | <a href="https://danmuju.pages.dev/issues" target="_blank" style="color: #4CAF50; text-decoration: none;">Bug反馈及交流</a>';
        description.style.fontSize = '14px';
        description.style.color = '#666';
        description.style.marginTop = '10px';
        modalContent.appendChild(description);

        modal.appendChild(modalContent);

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.body.appendChild(modal);

        return modal;
    }

    // 发送弹幕消息
    async function sendMessage(message, channelUrl) {
        if (!message) {
            alert('请输入弹幕内容');
            return;
        }

        if (!channelUrl) {
            alert('请选择一个频道');
            return;
        }

        const send_url = `${channelUrl}/post`;

        // 获取设置
        await chrome.storage.local.get(['uuid', 'color', 'font_size', 'speed', 'css_style', 'enable_danmu'], (data) => {
            const uuid = data.uuid || '00000000-0000-0000-0000-000000000000';
            const color = data.color || '#00FF00';  // 默认颜色
            const font_size = data.font_size;
            const speed = data.speed || 5;  // 默认速度
            const css_style = data.css_style || '';  // 默认样式
            const enable_danmu = data.enable_danmu || true;

            //console.log(uuid, color, speed, css_style, enable_danmu);

            fetch(send_url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uuid: uuid,
                    url_hash: url_hash,
                    url: url,
                    payload: {
                        message: message,
                        color: color,
                        font_size: font_size,
                        speed: speed
                    }
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('弹幕发送成功!');
                //document.getElementById('modal').style.display = 'none';
            })
            .catch(error => {
                alert(`弹幕发送失败 👉 ${error}`);
            });

        })
        
    }

    // 定期获取并显示弹幕
    async function fetchAndDisplayMissiles(channelUrl) {
        

        if (!channelUrl){
            console.log("没有指定频道")
            return
        };

        const currentTimestamp = Math.floor(Date.now() / 1000);

        //const cursor = localStorage.getItem('cursor') || 0;
        const cursor = localStorage.getItem('cursor') ? localStorage.getItem('cursor') : 0;

        const url = `${channelUrl}/fetch?cursor=${cursor}&url_hash=${url_hash}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                if (data.missiles && Array.isArray(data.missiles)) {
                    // 对 missiles 按时间戳排序
                    data.missiles.sort((a, b) => a.timestamp - b.timestamp);
                    
                    // 计算每个弹幕的显示延迟，并按时序显示
                    let lastTimestamp = 0;
                    data.missiles.forEach(missile => {
                        // 计算与上一个弹幕的时间差
                        let delay = missile.timestamp - lastTimestamp;
                        lastTimestamp = missile.timestamp;
                        if(delay>10)
                            delay = 10
                        
                        // 使用 setTimeout 控制弹幕显示的延迟
                        setTimeout(() => {
                            createMissileElement(missile);
                        }, delay * 1000);  // 时间差 * 1000 转换为毫秒
                    });
                }
            })
            .catch(error => console.error('Error fetching missiles:', error));

        localStorage.setItem('cursor', currentTimestamp.toString());
    }

    // 创建弹幕元素
    async function createMissileElement(missile) {
        const missileElement = document.createElement('div');
        missileElement.classList.add('missile');
        missileElement.textContent = missile.payload.message;
        missileElement.style.position = 'absolute';
        missileElement.style.color = missile.payload.color;
        missileElement.style.fontStyle = missile.payload.font_style;
        missileElement.style.fontSize = `${missile.payload.font_size}px`;
        missileElement.style.whiteSpace = 'nowrap';
        missileElement.style.zIndex = '9999';  // 确保弹幕在最外层

        document.body.appendChild(missileElement);

        //const [originX, originY] = missile.origin;
        //const [targetX, targetY] = missile.direction;
        const [originX, originY] = [ window.innerWidth, Math.random() * window.innerHeight ];
        const [targetX, targetY] = [ window.innerWidth * -2, Math.random() * window.innerHeight ];
        missileElement.style.left = `${originX}px`;
        missileElement.style.top = `${originY}px`;

        let startTime = null;
        const duration = 30000 / parseInt(missile.payload.speed);

        function animate(time) {
            if (!startTime) startTime = time;
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const deltaX = targetX - originX;
            const deltaY = targetY - originY;

            const moveX = deltaX * progress;
            const moveY = deltaY * progress;

            missileElement.style.left = `${originX + moveX}px`;
            missileElement.style.top = `${originY + moveY}px`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(missileElement);
            }
        }

        requestAnimationFrame(animate);
    }

    // 监听按键事件
    async function listenForKeyPress() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'F4' || event.code === 'F4') { //F4
                const modal = document.getElementById('modal') || createModal();
                modal.style.display = 'flex';

                const channelSelect = document.getElementById('channelSelect');
                channelSelect.addEventListener('change', function() {
                    currentChannelUrl = channelSelect.value;;
                    chrome.storage.local.set({currentChannelUrl})
                    console.log(`[弹幕局] 频道已变更为 ${currentChannelUrl}`)
                    
                  });
                
            }
        });
    }

    await createModal(); // 创建弹幕面板
    await listenForKeyPress(); //监听弹幕按键

    setInterval(() => {
        chrome.storage.local.get(["enable_danmu","currentChannelUrl"],( data => {
            if(data.enable_danmu){
                fetchAndDisplayMissiles(data.currentChannelUrl);
            }else{
                const missileElements = document.querySelectorAll('.missile');
                missileElements.forEach(element => {
                    element.style.display = 'none'; // 将所有missile类的元素隐藏
                    element.remove(); // 删除元素
                });
            }
        }))
        
    }, 3000);
      

})();

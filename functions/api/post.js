
export const onRequest = async (context) => {
    // 处理预检请求 OPTIONS
    if (context.request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',  // 允许 POST 方法
                'Access-Control-Max-Age': '86400',  // 预检请求的缓存时间
            },
            });
    }

    // 判断请求方法是否为 POST
    if (context.request.method === 'POST') {
        // 获取请求体内容
        const requestData = await context.request.json();

        console.log(JSON.stringify(requestData))
        
        const { uuid, url, url_hash, payload } = requestData;
        
        // 校验请求数据
        if (!uuid || !url || !url_hash || !payload) {
            return new Response('Missing url, url_hash, or payload', { status: 400 });
        }

        // 调用插入函数将数据保存到 D1 数据库
        const sql = ` INSERT INTO missiles (uuid, url, url_hash, payload) VALUES (?, ?, ?, ?);`;

        await context.env.DB.prepare(sql).bind(uuid, url, url_hash, JSON.stringify(payload)).run();

        return new Response(JSON.stringify({success:true}), { 
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',  // 允许 POST 方法
                'Access-Control-Max-Age': '86400',  // 预检请求的缓存时间
            },
        });
    }

    //忽略其他请求
    return new Response(null,{
        status: 404,
        headers:{
            "content-type": "text/html"
        }
    });

}


export const onRequest = async (context) => {
    // 处理预检请求 OPTIONS
    if (context.request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
                'Access-Control-Max-Age': '86400',
            },
        });
    }

    // 处理 GET 请求
    if (context.request.method === 'GET') {
        console.log(context.request.url)
        // 获取 URL 查询参数
        const urlParams = new URLSearchParams(context.request.url.split('?')[1]);
        const cursor = parseInt(urlParams.get('cursor'));
        const url_hash = urlParams.get('url_hash');

        // 校验 cursor 和 url_hash 是否存在
        if (!cursor || !url_hash) {
            return new Response('Missing cursor or url_hash', { status: 400 });
        }

        // 查询符合条件的 missile 数据
        const sql = `
            SELECT * FROM missiles
            WHERE url_hash = ? AND timestamp > ?
            ORDER BY timestamp limit 100;
        `;
        
        const missiles = await context.env.DB.prepare(sql).bind(url_hash, cursor).all();
        

        // 格式化查询结果
        const formattedMissiles = missiles.results.map((missile) => ({
            timestamp: missile.timestamp,
            user: "匿名",  // 示例数据，实际应用中可以根据需求调整
            payload: JSON.parse(missile.payload),
            // color: missile.color,  // 示例数据
            // style: "xxx",  // 示例数据
            origin: [1920,300],  // 示例位置
            direction: [-100, 300],  // 示例方向
            // speed: 1,  // 示例速度
        }));

        return new Response(JSON.stringify({ missiles: formattedMissiles }), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
                'Access-Control-Max-Age': '86400',
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
};

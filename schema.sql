-- 初始化数据表 
-- wrangler d1 execute danmuju --file=./schema.sql --local 
DROP TABLE IF EXISTS missiles;
CREATE TABLE missiles (
    uuid TEXT NOT NULL, 
    timestamp INTEGER DEFAULT (strftime('%s', 'now')),  -- 默认当前时间戳（秒）
    url TEXT NOT NULL,  -- 存储 URL
    url_hash TEXT NOT NULL,  -- 存储 URL 的哈希值
    payload TEXT NOT NULL  -- 存储弹幕内容
);

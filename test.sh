curl -XPOST "http://localhost:8788/api/post" -H "Content-Type:application/json" -d '{
"uuid":"00000000-0000-0000-0000-000000000000",
"url_hash":"d8430cb7d7851dd72be5cba17230d718",
"url":"http://192.168.1.2/",
"payload":{
    "message":"<script>alert(1);</script>",
    "color":"red",
    "font_size":30,
    "speed":1
}
}'


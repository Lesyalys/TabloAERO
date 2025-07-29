import express from 'express'
import path from 'path';

const app = express();
const port = 4004;
const hostname = '172.17.10.12';

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/TimeTable_Aero', (res, req) => {
    req.sendFile(path('../dist/index.html'));
})

app.listen(port, hostname, () => {
    console.log(`listen port: ${port} | host: ${hostname}`);
})



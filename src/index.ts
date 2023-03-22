import express, { Request, Response } from 'express';
import packageJson from '.././package.json';
import http from "http";
import querystring from 'querystring';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '.././swagger.json'; // Replace with your Swagger definition file

const PORT = 30000;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function postman_echo() {
    const params = {
        'foo': 'bar',
        'baz': 'qux'
    };

    const options: http.RequestOptions = {
        hostname: 'postman-echo.com',
        path: '/get?' + querystring.stringify(params),
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (data) => {
            console.log(data.toString());
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.end();
}

app.get('/api/ping', async (req: Request, res: Response) => {
    const msg = req.query.message as string;
    const env = process.env.NODE_ENV || 'TEST';
    const version = packageJson.version || 'unknown';

    await postman_echo();

    const response = {
        "echo": msg,
        "timestamp": Date.now(),
        "env": env,
        "version": version,
    };
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export { app };
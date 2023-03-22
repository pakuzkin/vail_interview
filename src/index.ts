import express, { Request, Response } from 'express';
import packageJson from '.././package.json';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '.././swagger.json'; // Replace with your Swagger definition file
import axios from 'axios';


const PORT = 30000;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export async function getEchoResponse(message: string): Promise<any> {
    try {
        const response = await axios.get('https://postman-echo.com/get', {
            params: {
                message: message
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

app.get('/api/ping', async (req: Request, res: Response) => {
    const msg = req.query.message as string;
    const env = process.env.NODE_ENV || 'TEST';
    const version = packageJson.version || 'unknown';

    const echo = await getEchoResponse(msg);
    const response = {
        "echo": echo,
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
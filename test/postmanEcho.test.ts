import { getEchoResponse } from '../src';
import * as sinon from 'sinon';
const axios = require("axios")
const expect = require("chai").expect

describe('getEchoResponse', () => {
    it('should return the message sent in the response', async () => {
        const message = 'Hello, Postman Echo!';
        const expectedResponse = {
            args: {
                message: message
            },
            url: 'https://postman-echo.com/get?message=hello'
        };

        const axiosGetStub = sinon.stub(axios, 'get').resolves({ data: expectedResponse });
        const response = await getEchoResponse(message);
        expect(response).to.deep.equal(expectedResponse);
        axiosGetStub.restore();
    });
});
import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/index';

chai.use(chaiHttp);

describe('Endpoint tests', () => {
    it('Ping endpoint should return status 200', (done) => {
        const msg = "hello";
        chai.request(app)
            .get('/api/ping')
            .query({
                "message": msg
            })
            .end((err, res) => {
                console.log(res.body);
                chai.expect(res).to.have.status(200);
                const body = res.body;
                chai.assert.equal(msg, body.echo, "Wrong echo message returned");
                chai.assert.equal("1.0.0", body.version, "Wrong version returned");
                chai.assert.equal("TEST", body.env, "Wrong env returned");
                done();
            });
    });
});

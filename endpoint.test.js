const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

chai.use(chaiHttp);

describe('Endpoint tests', () => {
    it('should return status 200', (done) => {
        const msg = "hello"
        chai.request(app)
            .get('/api/ping')
            .query({
                "message": msg
            })
            .end((err, res) => {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                const body = res.body
                chai.assert(body.echo == msg, `Wrong echo message returned`)
                chai.assert(body.version == "1.0.0", `Wrong version returned`)
                chai.assert(body.env == "development", `Wrong env returned`)
                done();
            });
    });
});

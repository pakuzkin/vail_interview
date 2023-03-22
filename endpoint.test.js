const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

chai.use(chaiHttp);

describe('Endpoint tests', () => {
    it('should return status 200', (done) => {
        chai.request(app)
            .get('/api/ping')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });
});

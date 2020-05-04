const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /loginuser", () => {
  it("loginuser", done => {
    chai
      .request(app)
      .post("/loginuser")
      .send({
        "username": "navyakay",
        "password": "abc"
      })
      .end((err, res) => {
        if (err) {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('success').to.equal(false)
          done()
        }
        expect(res.body).be.a('object')
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('success').to.equal(true)
        done()
      })
  });
});
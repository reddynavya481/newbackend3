const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /loginadmin", () => {
  it("login admin", async () => {
    let response = await chai
      .request(app)
      .post("/loginadmin")
      .send({
        "username": "admin",
        "password": "admin"
      })
    if (response.error == false) {
      expect(response.body).be.a('object')
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('success').to.equal(true)
    }
    else {
      expect(response.body).be.a('object')
      if (response.body.error == undefined) {
        expect(response).to.have.status(400);
        expect(response.body).to.have.property('status').to.equal("fail")
      }
      else {
        expect(response).to.have.status(500);
        expect(response.body).to.have.property('status').to.equal("fail")
      }
    }
  });
});
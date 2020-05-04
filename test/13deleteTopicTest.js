const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
// const get=require('./getTopicTest')
chai.use(chaiHttp);
// router.delete('/del/:tname', delTopic)
describe("DELETE /del/:tname", () => {
  it("deletes specified topic", async () => {
    let response = await chai
      .request(app)
      .delete("/del/" + "mlpart1")
    if (response.error == false) {
      expect(response.body).be.a('object')
      expect(response.body).to.have.property('status')
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('status').to.equal("success")
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
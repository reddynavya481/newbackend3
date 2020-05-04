const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
// const addContent=require("./addContentTest")
const { expect } = chai;
chai.use(chaiHttp);
// router.delete('/del/:tname', delTopic)
// router.delete('/delcont/:contname', delcont)
describe("DELETE /delcont/:contname", () => {
  it("deletes specified content", async () => {
    let response = await chai
      .request(app)
      .delete("/delcont/" + "content1")
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
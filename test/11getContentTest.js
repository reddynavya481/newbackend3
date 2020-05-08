const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
// router.get('/content/:tname', getContent)
describe("GET /content/:tname", () => {
  it("gets contents present in topic", async () => {
    let response = await chai
      .request(app)
      .get("/content/"+"mlpart1")
    if (response.error == false) {
      expect(response.body).be.a('object')
      expect(response.body).to.have.property('status')
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('status').to.equal("success")
    }
    else if(response.error){

    }
    else {
      expect(response.body).be.a('object')
      // if (response.body.error == undefined) {
        expect(response).to.have.status(404);
        expect(response.body).to.have.property('status').to.equal("fail")
      // }
      // else {
      //   expect(response).to.have.status(500);
      //   expect(response.body).to.have.property('status').to.equal("fail")
      // }
    }
  });
});
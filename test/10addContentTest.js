const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
// router.post('/content1/:toname', contV, addContent)
describe("POST /content1/:toname", () => {
  it("add content to a topic", async () => {
    let response = await chai
      .request(app)
      .post("/content1/" + "mlpart1")
      .send({
        "contentname": "content1",
        "contenturl": "https://www.youtube.com/watch?v=Y9PhWggKoz8"
      })
    if (response.error == false) {
      expect(response.body).be.a('object')
      expect(response.body).to.have.property('status')
      expect(response).to.have.status(201);
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
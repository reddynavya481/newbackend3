const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /topic1/:coname", () => {
  it("add topic", async () => {
    let response = await chai
      .request(app)
      .post("/topic1/"+"iot")
      .send({
       "topicname": "iot basics"
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
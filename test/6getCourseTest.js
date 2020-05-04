const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
// const updateCourse=require("./updateCourseTest")
const { expect } = chai;
chai.use(chaiHttp);
module.exports=describe("GET /getcourse", () => {
  it("gets course", async () => {
    let response = await chai
      .request(app)
      .get("/getcourse")
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
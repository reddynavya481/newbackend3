const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
module.exports=describe("POST /course", () => {
  it("add course", done => {
    chai
      .request(app)
      .post('/course')
      .send({
        "coursename": "machine learning",
        "authorname": "ramalingam",
        "description": "it introduces the basic concepts,uses and applications of machine learning"
      }).end((err, res) => {
        if(err)
        {
          expect(res).to.have.status(400);
        }
        else{
        expect(res.body).be.a('object')
        // expect(response.body).to.have.property('status')

        // expect(response).to.have.status(201);
        expect(res).to.have.status(201);
        expect(res.body.status).to.equals("success");
        expect(res.body).to.have.property('message').to.equal("course created")
        done();
        }

        // else {
        //   expect(response.body).be.a('object')
        //   if (response.body.error == undefined) {
        //     expect(response).to.have.status(400);
        //     expect(response.body).to.have.property('status').to.equal("fail")
        //   }
        //   else {
        //     expect(response).to.have.status(500);
        //     expect(response.body).to.have.property('status').to.equal("fail")
        //   }
        // }
      });
  })
});
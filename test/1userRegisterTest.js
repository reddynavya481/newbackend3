const app = require("../routers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /registeruser", () => {
  it("registeruser", done => {
    // let response = await 
    chai
      .request(app)
      .post('/registeruser')
      .send({
       "username": "navyakaynew3",
        "password": "abc",
        "typ":"user"
      })
      .end((err,res)=> {
        if(err){
          expect(res.body).be.a('object')
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('status').to.equal("fail")
        }
        else{
        expect(res.body).be.a('object')
        expect(res.body).to.have.property('status')
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('status').to.equal("success")
        done()}
      })
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
  });
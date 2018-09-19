import * as request from "supertest";
import App from '../app';


//Test either todos are coming or not
describe("GET todos test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App).get("/api/todos/")
      .expect(200);
  });
});


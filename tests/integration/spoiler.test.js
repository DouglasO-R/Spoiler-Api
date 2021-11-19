import request from "supertest";
import { app } from "./../../src/App";


describe("Integration Test", () => {

    test("GET::Index",async()=>{
        const res = await request(app).get('/api/spoiler').send();
        expect(res.status).toBe(200);
    });

    test("GET::Show", async() => {
        const res = await request(app).get('/api/spoiler/1').send();
        expect(res.status).toBe(200);

    });
});
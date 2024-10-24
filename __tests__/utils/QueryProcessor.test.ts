import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ntalib"
          ));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ntalib"
          ));
    });

    test('should return 67', () => {
        const query = "What is 70 plus 67?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "137"
          ));
    });

    //  Which of the following numbers is both a square and a cube: 

    test('should return 729', () => {
        const query = "Which of the following numbers is both a square and a cube: 343, 729, 4083, 1521, 2479, 4710, 1381?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "729"
          ));
    });

    test('should return 67', () => {
        const query = "What is 53 multiplied by 83?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "4399"
          ));
    });

    test('should return 67', () => {
        const query = "What is 13 minus 77?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "-64"
          ));
    });

    test('should return 5, 97, 59', () => {
        const query = "Which of the following numbers are primes: 99, 5, 74, 97, 59?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "5, 97, 59"
          ));
    });

});

import { describe } from "node:test";
import { Queue } from "./queue";

describe("LinkedList", () => {
	it("should create an empty queue list", () => {
		expect(Queue).toBeDefined();
	});
	it("should return true by defaults", () => {
		expect(Queue()).toBe(true);
	});
});

import { describe } from "node:test";
import { LinkedList } from ".";

describe("LinkedList", () => {
	it("should create an empty linked list", () => {
		expect(LinkedList).toBeDefined();
	});

	it("should return true by default", () => {
		expect(LinkedList(42)).toBe(true);
	});
});

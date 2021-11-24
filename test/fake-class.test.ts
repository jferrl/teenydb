import { FakeClass } from '../lib/fake-class';

describe('FakeClass', () => {
	it('should create a class instance', () => {
		const sut = new FakeClass();
		expect(sut).toBeInstanceOf(FakeClass);
	});
});

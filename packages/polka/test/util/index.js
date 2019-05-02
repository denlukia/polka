import tape from 'tape';

Object.assign(tape.Test.prototype, {
	isEmpty(val, msg) {
		this.ok(!Object.keys(val).length, msg);
	},
	isArray(val, msg) {
		this.ok(Array.isArray(val), msg);
	},
	isObject(val, msg) {
		this.is(Object.prototype.toString.call(val), '[object Object]', msg);
	},
	isFunction(val, msg) {
		this.is(typeof val, 'function', msg);
	}
});

export const test = tape;

export function listen(app, host) {
	app.listen(); // boots
	let { port } = app.server.address();
	return `http://${host || 'localhost'}:${port}`;
}

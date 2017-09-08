
const m = new Map();
m.set("KEY",123);
log(m.get("KEY"));

const KEY = {}; //object key
m.set(KEY,() => {console.log(321);} ); //anonymous function
m.set(NaN,() => {return 999;} );

log(m.values());
log([...m]); //spread operator
log([...m.keys()]);
log([...m.values()]);

log([...m.keys()][2]); //array instance
[...m.values()][1](); 
log([...m.values()][2]());

const m2 = new Map([['a',1],['b',2],['c',99]]);
const m3 = new Map([...m2].map(([k, v]) => [k.toUpperCase(), 2 * v]));
log([...m3]);
log([...m3].filter(([k, v]) => v < 100)); //filter callback
log([...m3.keys()].filter(k => k < 'C'));
const m2str = JSON.stringify([...m2]);
log(m2str);
log(JSON.parse(m2str));

function log(s) {
    console.log(s);
}
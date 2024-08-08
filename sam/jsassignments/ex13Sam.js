//Arrays


// Modify these definitions...

topScope.array = (...values) => values;

topScope.length = (array) => array.length;

topScope.element = (array, i) => array[i];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6

//Closure





//Comments
function skipSpace(string) {
	let skippable = string.match(/^(\s|#.*)*/);
	return string.slice(skippable[0].length);
}

console.log(parse('# hello\nx'));
// → {type: "word", name: "x"}

console.log(parse('a # one\n   # two\n()'));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}


//Fixing Scope
specialForms.set = (args, env) => {
	if (args.length != 2 || args[0].type != 'word') {
		throw new SyntaxError('Bad use of set');
	}
	let varName = args[0].name;
	let value = evaluate(args[1], env);

	
	}
	throw new ReferenceError(`Undefined Variable ${varName}`);
};

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
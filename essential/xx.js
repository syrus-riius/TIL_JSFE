let o = {
  isLoading: false,
};

let o2 = o;

// o2.isLoading = true;

function foo(o) {
  o.isLoading = true;
}

foo(o2);
console.log(o, o2);

var codes = {
    '6' : 'Poland',
    '38' : 'Ukraine',
    '1' : 'USA'
};

var order = ['6', '38', '1'];

var entries = Object.entries(codes);

entries.sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));

entries.forEach(([code, country]) => {
    console.log(`"${code}": "${country}"`);
});
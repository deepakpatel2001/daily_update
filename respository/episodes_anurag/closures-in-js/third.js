// chaning in the closures

function dada(){
    const a = 1343
    function papa(){
        const b = 14;
        function me(){
            return a+b;
        }
        return me
    }
    return papa()
}

const result = dada();
console.log(result());
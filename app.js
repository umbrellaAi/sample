function testing(){
    console.log("testing")
}

testing.prototype.logger = function() {
    console.log("Sample forking");
}

var a = new testing()
a.logger()
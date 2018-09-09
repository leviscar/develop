var name = "tom";
var person = {
    name:'jer',
    getName: function(){
        return this.name;
    }
}
var getName = person.getName;
var name1 =person.getName();
var name2 = getName();


const obj = {a:1,b:2};
obj.a = 2;
var obj2 = Object.freeze({a:1,b:2});
obj2.a = 2;
console.log(obj,obj2);
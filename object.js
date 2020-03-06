var stu = {id:10001, phone:14602, name:"raju" };
var stu2= { id: 10002, phone:438095, name:"mukta"};

var phoneNo = stu.phone; //shudhu phone no ber hobe
console.log(stu, stu2);
console.log(phoneNo);

var phoneNo =stu["phone"];
console.log(phoneNo);

phonePropName="phone"
var phoneNo=stu[phonePropName];
console.log(phoneNo);

stu.phone=907;   //to change one property or update
stu["phone"]=234; //2nd way to change phone
stu[phonePropName]=456; //3rd way to change phone
console.log(stu, stu2);
var phoneNo = stu.phone;
console.log(phoneNo);

stu2.cinema="ogni" //new property add
console.log(stu, stu2);
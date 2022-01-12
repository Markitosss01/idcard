function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    

    //for (var numberArray i=0; i<=100)
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] <= 100){
        document.getElementById("postAge").innerHTML = "Age: " + age;
        }

        // use your documentbyelementid innerHTML with your age variable
         else if (numberArray[i] > 100){
          // same thing populate postPhoneNumber
          document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;

         }
       }

}
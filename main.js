function register(){
    let name = prompt("Enter your name: " , "");
    let age = prompt("Enter your age: " , "");
    let mood = prompt("Enter your mood: ", "");
    if ((name!=null) && (age!=null) && (mood!=null))
        document.getElementById("txt1").innerHTML= "Hello " + name + " your age is " + age + " your mood is " + mood;
}
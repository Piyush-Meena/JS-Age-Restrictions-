age > 18 ? (
    alert("OK, you can register."),
    redirectTo("register.html");
) : (
    stop = true,
    alert("Sorry, you are too young!")
);

//register.html is an online file.

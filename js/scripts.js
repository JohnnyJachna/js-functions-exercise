function marinaraSauce(cookName) {
    const two = 2;
    const oneFourth = "1/4"
    
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!\n\n");
    console.log("- Heat a medium-large saucepan over medium heat.\n");
    console.log("- Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes.\n");
    console.log("- Add " + oneFourth + " cup water, " + two + " cans of crushed tomates, and salt and season with black pepper to taste.\n");
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes.\n");
    console.log("- Stir in " + oneFourth + " cup roughly chopped fresh basil, salt and pepper as needed.\n");
}

function cook(cookName) {
    marinaraSauce(cookName);
}

cook("Adam");
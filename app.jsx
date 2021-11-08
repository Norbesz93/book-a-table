const menu = {
    pizzas: [ 
    {pizza: "Margarita", price: 2000, photo: "/margarita.jpeg"},
    {pizza: "Dolce Vita", price: 2000, photo: "/dolce.jpeg"},
    {pizza: "Funghi", price: 2000, photo: "/funghi.jpeg"},
    {pizza: "Marinara", price: 2000, photo: "/margarita.jpeg"},
    {pizza: "Chilli", price: 2000, photo: "/chilli.jpeg"},
    {pizza: "Fitness", price: 2000, photo: "/fitness.jpeg"}
    ],

    drinks: [
    {drink: "Coke", price: 1000, photo: "coke.png"},
    {drink: "Sprite", price: 1000, photo: "sprite.png"},
    {drink: "Volvic", price: 1000, photo: "volvic.png"},
    {drink: "San Benedetto", price: 1000, photo: "sanbenedetto.png"},
    {drink: "Perrier", price: 1000, photo: "perrier.png"},
    {drink: "Evian", price: 1000, photo: "evian.png"}
    ]
}

const booking = () => {
    return (
        <div id="reservation">
            <input type="Enter your email" />
            <select name="date" id="date">Date</select>
            <select name="time" id="time">Time</select>
            <select name="guests" id="guests">Guests</select>
            <button id="proceed">Book Now</button>
        </div>
    )
} 

const App = () => {
    return (
        <div>
            <img id="logo" src="/hotpizza.jpg" alt="pizza hut logo"/>
            
            <nav id="nav">
                <div id="intro"> 
                    <p id="text">
                        Hot Pizza Shutterstock is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides pizza and other Italian-American pizza, including pizza, fancy mineral water like perrier and pizza.
                        The chain has 2 restaurants worldwide as of December 31, 2019, making it the world's largest pizza chain in the number of locations.
                        It is a subsidiary of Yum! Brands, Inc., one of the world's largest restaurant companies.
                    </p>
                </div>
                <div id="menu">
                    <div>
                    {menu.pizzas.map(pizza => 
                    <div key={pizza} className="pizzasshown"><img className="contentphoto" src={pizza.photo} /> <div className="pizzatype"> {pizza.pizza} </div> <div className="pizzaprice"> {pizza.price} </div> </div>) }
                    </div>

                    <div>
                    {menu.drinks.map(drink => <div key={drink} className="drinksshown"> <img className="contentphoto" src={drink.photo} /> <div className="drinktype"> {drink.drink} </div> <div className="drinkprice"> {drink.price} </div> </div>) }
                    </div>
                </div>
            </nav>

            <button onClick={booking} id="booking">Booking a table</button>
        </div>
    )
}

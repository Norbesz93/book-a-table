const menu = {
    pizzas: [
        { pizza: "Margarita", price: 2000, photo: "/margarita.jpeg" },
        { pizza: "Dolce Vita", price: 2000, photo: "/dolce.jpeg" },
        { pizza: "Funghi", price: 2000, photo: "/funghi.jpeg" },
        { pizza: "Marinara", price: 2000, photo: "/margarita.jpeg" },
        { pizza: "Chilli", price: 2000, photo: "/chilli.jpeg" },
        { pizza: "Fitness", price: 2000, photo: "/fitness.jpeg" }
    ],
    drinks: [
        { drink: "Coke", price: 1000, photo: "coke.png" },
        { drink: "Sprite", price: 1000, photo: "sprite.png" },
        { drink: "Volvic", price: 1000, photo: "volvic.png" },
        { drink: "San Benedetto", price: 1000, photo: "sanbenedetto.png" },
        { drink: "Perrier", price: 1000, photo: "perrier.png" },
        { drink: "Evian", price: 1000, photo: "evian.png" }
    ]
}

// const booking = () => {
//     return (
//         <div id="reservation">
//             <input type="Enter your email" />
//             <select name="date" id="date">Date</select>
//             <select name="time" id="time">Time</select>
//             <select name="guests" id="guests">Guests</select>
//             <button id="proceed">Book Now</button>
//         </div>
//     )
// }

const App = () => {

    const [email, setEmail] = React.useState("Enter your email!")
    const [date, setDate] = React.useState("")
    const [time, setTime] = React.useState("")
    const [guest, setGuest] = React.useState(1)

    const currentDay = new Date()
    const timePlusOneH = currentDay.getHours() +1 + ":" + currentDay.getMinutes()

    const today = new Date().toISOString().split("T")[0];

    const [myBool, setMyBool] = React.useState(false)
    function goToMenu() {
        setMyBool(true)
    }
    
    const [myBookingPage, setMyBookingPage ] = React.useState(false)
    function goToBookingPage() {
        setMyBookingPage(true)
    }

    function menuToBooking(){
        setMyBool(false)
        setMyBookingPage(true)
    }

    function goBack(){
        setMyResConfirmed(false)
        setMyBookingPage(true)
    }

    const [myResConfirmed, setMyResConfirmed] = React.useState(false)
    function goToResConfirmed() {
        if(email.includes("@") && (date == currentDay && timePlusOneH <= time || date != today)) {
        setMyBookingPage(false)
        setMyResConfirmed(true)
        }
    }

    return (
        <div> 

            {myBool ? 

            <div id="menupage">
                <img id="logo" src="/nypizzalogo.svg" alt="ny pizza logo" />
                <p id="text">
                    About us: <br />
                    New York Pizza is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides pizza and other Italian-American pizza, including pizza, fancy mineral water like perrier and pizza.
                    The chain has 2 restaurants worldwide as of December 31, 2019, making it the world's largest pizza chain in the number of locations.
                    It is a subsidiary of Yum! Brands, Inc., one of the world's largest restaurant companies.
                </p>
                <div id="menu">
                    <div>
                        {menu.pizzas.map(pizza =>
                            <div key={pizza.pizza} className="pizzasshown"><img className="contentphoto" src={pizza.photo} /> <div className="pizzatype"> {pizza.pizza} </div> <div className="pizzaprice"> {pizza.price} </div> </div>)}
                    </div>

                    <div>
                        {menu.drinks.map(drink => <div key={drink.drink} className="drinksshown"> <img className="contentphoto" src={drink.photo} /> <div className="drinktype"> {drink.drink} </div> <div className="drinkprice"> {drink.price} </div> </div>)}
                    </div>
                </div>
            <a onClick={menuToBooking} className="fancy-btn">Booking</a> 
            </div>
            
            : myBookingPage ?

            <div className="reservationtab">
                <img id="logo" src="/nypizzalogo.svg" alt="ny pizza logo" />

                <form>
                    
                    <label for="email">Enter your email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" value={email}/>
            
                    <label for="date">Date:</label>
                    <input onChange={(e) => setDate(e.target.value)} type="date" min={today} id="dt" value={date}/>

                    <label for="appt">Select a time:</label>
                    <input onChange={(e) => setTime(e.target.value)} type="time" value={time} min={timePlusOneH} id="appt" name="appt"/> 

                    <select onChange={(e) => setGuest(e.target.value)} name="seats" id="seats" value={guest}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input onClick={goToResConfirmed} className="reservationbtn" type="submit"/>
                </form>
            </div>

            : myResConfirmed ?

            <div className="reservationtab">
                <img id="logo" src="/nypizzalogo.svg" alt="ny pizza logo" />

                <form>
                    <p>Your booking is confirmed as below:</p>

                    <p>Contact: {email}</p>

                    <p>Date: {date}</p>

                    <p>Time: {time}</p>

                    <p>Guests: {guest}</p>
                
                    <button onClick={goBack} className="reservationbtn">Go back!</button>
                    <button className="reservationbtn">Comfirm!</button>
                </form>
            </div>
            
            : <div id="landingpage">
                
                <img id="logo" src="/nypizzalogo.svg" alt="ny pizza logo" /> 
                <a onClick={goToMenu} className="fancy-btn" id="menubtn"> Menu</a>
                <a onClick={goToBookingPage} className="fancy-btn" id="bookingbtn">Booking</a> 
            </div> 
            
            }
             
        </div>
    )
}

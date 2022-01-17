const menu = {
    pizzas: [
        { pizza: "THE WICKER MAN", price: 17, description: "Tomato, mozzarella, cobble lane nduja & pepperoni, mascarpone & scotch bonnet chilli honey" },
        { pizza: "TOP BOY", price: 20, description: "Tomato, artichoke, caramelised onions, olives, garlic & thyme mushrooms, walnuts & truffle oil" },
        { pizza: "BLUE ART", price: 16, description: "Tomato, mozzarella, gorgonzola, artichokes & olives"},
        { pizza: "DIRTY BIRDIE", price: 22, description: "Tomato, mozzarella, caramelised onions, garlic & thyme mushrooms & smoked pancetta" },
        { pizza: "LORENA", price: 21, description: "Tomato, mozzarella, butternut squash, feta, pine nuts & rosemary" },
        { pizza: "JON BON CHOVY", price: 20, description: "Tomato, mozzarella, anchovies, capers, olives, chillies & fresh parsley" }
    ],
    drinks: [
        { drink: "Coke 0,5l", price: 8, photo: "coke.png" },
        { drink: "Coke 1,5l", price: 10, photo: "fanta.png" },
        { drink: "Sprite 0,5l", price: 8, photo: "sprite.png" },
        { drink: "Water 0,5l", price: 10, photo: "water.png" },
        { drink: "Beer 0,5l", price: 12, photo: "beer.png" },
        { drink: "Dreher 0,5l", price: 12, photo: "powerade.png" }
    ]
}

const App = () => {

    const [email, setEmail] = React.useState("Enter your email!")
    const [date, setDate] = React.useState("")
    const [time, setTime] = React.useState("")
    const [guest, setGuest] = React.useState(1)

    const currentDay = new Date()
    const timePlusOneH = currentDay.getHours() +1 + ":" + currentDay.getMinutes()

    const today = new Date().toISOString().split("T")[0];

    const [myBool, setMyBool] = React.useState(false)
    const [myResConfirmed, setMyResConfirmed] = React.useState(false)
    const [myBookingPage, setMyBookingPage ] = React.useState(false)

    function goToBookingPage() {
        setMyBookingPage(true)
    }
    
    function bookingToMenu() {
        setMyBookingPage(false)
        setMyBool(true)
    }
    
    function goToMenu() {
    setMyBool(true)
    }

    function menuToBooking(){
        setMyBool(false)
        setMyBookingPage(true)
    }

    function goBack(){
        setMyResConfirmed(false)
        setMyBookingPage(true)
    }
    
    function goToResConfirmed() {
        if(email.includes("@") && (date == today && timePlusOneH < time || date != today)) {
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
                            <div key={pizza.pizza} className="pizzasshown">  <div className="pizzatype"> {pizza.pizza} </div> ◈ <div className="pizzadescription"> {pizza.description} </div> ◈ <div className="pizzaprice"> {pizza.price} </div> </div>)}
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
                    <input onClick={() => setEmail("")} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" value={email}/>
            
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
                <a onClick={bookingToMenu} id="bookingToMenuBtn" className="fancy-btn">Menu</a> 
            </div>

            : myResConfirmed ?

            <div className="reservationtab" id="restab">
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

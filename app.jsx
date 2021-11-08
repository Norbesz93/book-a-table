const App = () => {

    return (
        <div>
            <h1>Social Media Dashboard</h1>
            <p>
               Total Followers: { data.platforms.reduce(getSum,0) } 
            </p>
        </div>
    )
}
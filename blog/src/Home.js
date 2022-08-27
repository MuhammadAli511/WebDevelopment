const Home = () => {

    const handleClick = (e) => {
        console.log("Hello", e)
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name)
        console.log(e)
    }

    return ( 
    <div className="home">
        <h2>Home Page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => {
            handleClickAgain('mario',e)
        }}>Click me again</button>
    </div>
    );
}
 
export default Home;
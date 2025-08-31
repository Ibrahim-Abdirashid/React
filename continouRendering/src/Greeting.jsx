
const Greeting = ({isLoggedIn})=>{

   return <h1>{isLoggedIn ? "welcome bro" : "get out"}</h1>
}
export default Greeting;
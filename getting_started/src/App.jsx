import {Header, HelloUser , UserCard ,ProductCard , Footer} from "./All_Component"
function App(){
return(
   <div className="">
        <Header title= {"Component Practice"}/>

    <HelloUser 
    name = {"AHmed Aw Cali"} />
    <HelloUser 
    name = {"Firdhiye"} />
    
    <UserCard  
    name= {"Hallima Caddey"}
    email= {"Hallima@gamil.com"}
    />
    <ProductCard
     productName = {"laptop"}
    price  = {40}/>

    <Footer text = {"this is the footer"}/>
    </div>
)
}

export default App;
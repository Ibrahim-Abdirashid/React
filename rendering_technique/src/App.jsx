

const App = ()=>{
  const items = ["abdow", "salax"];

  return(
    <div>
      {items.length > 0 ?(  <ul>
        {
          items.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
      ): <p>NOT FPUND</p> }
    
    </div>

  )
}

export default App;
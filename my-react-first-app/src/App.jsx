import { Fragment } from "react"

function App(){
  const books=[
    {id:1001,name:'priya',author:'george'},
    {id:1002,name:'pri',author:'geo'},
    {id:1003,name:'siri',author:'geogra'},
  ];
  
  const listitems=books.map((book,id)=>
    (<li key={book.id}style={{color:blue}}>
    id:{book.id},name:{book.name},author:{book.author}
    </li>
    )
  )
return(
        <>
        <h1>books</h1>
        <ul>{listitems}</ul>
        </>
 
        )
      }
     export default App;
 export default function PostComponent() {

const login = JSON.parse(localStorage.getItem ('login'))


return (
        <div>
            {login ? 
            <div className="mx-4  w-25">
            <h1>Post Page</h1>
            <div className="border  rounded-3 p-4">
            <div className="border bg-light rounded-3 my-2"/>
                <h3 className="px-2">{login.name}</h3>
                
            <div className="border bg-light rounded-3"/>
                <h3 className="px-2">{login.password}</h3>
             
            </div>  
            </div>
         : <h2>Error</h2> }  

        </div>
)
}
 
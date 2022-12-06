import { useState } from "react";
const AddPosts = () => {
const[login, setLogin] = useState({name:'',password:''})

const onLoginChange = (key) => (e) => {
    setLogin({...login, 
        [key]: e.target.value})
}
const onButtonClick = () => {
    if (login.name == '' && login.password == '') return('hallo')
localStorage.setItem(('login'), JSON.stringify(login));
}
console.log(login);

return (
    <div className="my-4 mx-3" > 
       <h1>LoginPage</h1>
        <input type="text" onChange={onLoginChange('name')}/>
        <label htmlFor="">Name</label>
        <input type="text" onChange={onLoginChange('password')}/>

        <button onClick={onButtonClick} className='border rounded-2 mx-4'>button</button>
        
    </div>
)
    }
export default AddPosts;




import { useState } from "react"

export default function FetchStatic() {
//    const locals = JSON.parse(localStorage.getItem('user'))
//    const[users, setUsers] = useState(locals ? locals :[])
//    useEffect(() => {
//     localStorage.setItem('user', JSON.stringify(users))
//     }, [users]);

//    fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response =>  response.json())
//   .then(json => setUsers(json))

  const[posts, setPosts] = useState([])
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  .then((response) => response.json())
  .then((json) => setPosts(json));

    return(
        <div className="m-3">
            {
                posts.map((post) => {
                    return(
                        <div key={post.id} className='border rounded-3 px-4 w-25 bg-light'>
                            <div>
                                <h4>{post.title}</h4>
                            </div>
                            <div>
                                <h4>{post.body}</h4>
                            </div>
                            {/* <div>
                                <h6>{post.email}</h6>
                            </div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
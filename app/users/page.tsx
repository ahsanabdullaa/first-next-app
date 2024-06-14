
import React from 'react'

interface User{
    id:number
    name:string
    email:string
    username:string
}
export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user: User[] = await res.json();


  return (
   <>
   <h1>Users</h1>
   <table className='table table-bordered'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
    {user.map(user => <tr key={user.id}><td>{user.name}</td>
    <td>{user.email}</td></tr>)}

    </tbody>
   </table>
   </>

  )
}

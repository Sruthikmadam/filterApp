import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'


function Home() {
  const [data,setData]=useState([]);
  const [records,setRecords]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data)
            setRecords(res.data)}
        )
        .catch(err=>console.log(err))
    },[]);
    const Filter=(event)=>{
        const searchTerm = event.target.value.toLowerCase().trim(); // Convert to lowercase and trim spaces

        setRecords(data.filter(f=>f.name.toLowerCase().includes(searchTerm)))
    }
    return (
    <div className='p-5 bg-light'>
        <h1 className='bg-red'> Filter App</h1>
        <div className='bg-white shadow border'>
            <input type='text'  className='form-control' onChange={Filter} placeholder='search'/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d,i)=>(
                          <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                          </tr>  
                        )
                        
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home


// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//     const [data, setData] = useState([]);
//     const [records, setRecords] = useState([]);
    
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
//             .then(res => {
//                 setData(res.data);
//                 setRecords(res.data);
//             })
//             .catch(err => console.log(err));
//     }, []);
    
//     const Filter = (event) => {
//         const searchTerm = event.target.value.toLowerCase().trim();
//         setRecords(data.filter(f => f.name.toLowerCase().includes(searchTerm)));
//     }

//     return (
//         <div className='p-5 bg-warning container-fluid'>
//             <div className='bg-info shadow border'>
//                 <input 
//                     type='text' 
//                     className='form-control mt-1' 
//                     onChange={Filter} 
//                     placeholder='search'
                    
//                 />
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             records.map((d, i) => (
//                                 <tr key={i}>
//                                     <td>{d.id}</td>
//                                     <td>{d.name}</td>
//                                     <td>{d.email}</td>
//                                     <td>{d.phone}</td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;

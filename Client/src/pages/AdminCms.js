import React from 'react'
import axios from 'axios';
import{ useState, useEffect  } from 'react'
import {useNavigate} from 'react-router-dom';


export default function AdminCms() {
  // Display User From DATABASE   
  const [usersData, setUsersData] = useState();
  let navigate = useNavigate();
  // Loading 

  const [users, setUsers] = useState();
  const [Loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/admincms")
        .then((res) => res.json())
        .then((data) => {
            setUsersData(data);
            setLoading(true);
        });
    }, []);


    const handleSubmit = async (e) => {
    
        const response  = await axios.post('/addUsers');
        const success = response.status === 200;
        
        if(success) navigate('/dashboard');
    } 
      
        

    console.log(users);
    // console.log(usersPassword);
    if(Loading){
        return(
            <>
              {usersData.map((user) =>
                <ul>
                    <li>{user.id}</li>
                    <li>{user.email}</li>
                    <li>{user.password}</li>
                    <li>{user.imgLarge}</li>
                </ul>
              )}

            <form onSubmit ={handleSubmit}>
                 <input  className='secondary-button' type="submit" />
            </form>
            </>
            );
    }else{
        return(
            <>
              <h1>AdminCms Page</h1>
              <p>Loading...</p>
            </>
            );
    }
}
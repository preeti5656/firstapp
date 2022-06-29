import React, { useEffect, useState } from "react";

const ManageUser = () => {

  // for storing the user data
  const [userArray, setUserArray] = useState([]);

  // to track data loading
  const [loading, setLoading] = useState(true);

  const nums =  [43, 23, 4, 5, 323, 34,5, 65,4 , 34];

  const getDataFromBackend = () => {
    fetch("http://localhost:5000/user/getall").then((res) => {
      if (res.status === 200) {
        console.log("data fetched");
        res.json().then((data) => {
          console.log(data);
          setUserArray(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  // const displayData = () => {
  //   if(!loading){
  //     return nums.map( (n) => (
  //       <div className="card mt-4 bg-warning">
  //         <div className="card-body">
  //           <h1>{n}</h1>
  //           </div>
  //       </div>
  //     ) )
  //   }
  // }

  const deleteUser = (id) => {
    console.log(id);

    fetch('http://localhost:5000/user/delete/'+id, {
      method : 'DELETE'
    }).then(res => {
      if(res.status === 200){
        console.log('data deleted');
        getDataFromBackend();
      }
    })

  }

  const displayUsers = () => {
    if(!loading){
      return userArray.map( ({_id, name, email, password}) => (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
            <button className="btn btn-danger" onClick = {e => deleteUser(_id)}>
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ) )
    }
  }


  return <div className="container mt-5">
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {displayUsers()}
      </tbody>
    </table>
    {/* {displayData()} */}
  </div>;
};

export default ManageUser;
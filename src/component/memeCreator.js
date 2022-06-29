import React from 'react';

const memeCreator = () =>{
    const memeForm= {
        titlt:"",
        author:"",
        file:"",
        };
        const memeCreator=(formdate)=>{
            console.log(formdate);
        };
  return (
    <div>
        <h1>memeCreator</h1>
        <Formik initialValue={memeForm} onSubmit ={memeSubmit}>
            {({value,handlechange,})}
        </Formik>
    </div>
  );
};

export default memeCreator;
//url
//request method
//data to send 
//data format
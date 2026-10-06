import React, { useState } from 'react';

export function FileUploadExample(){

const [data,setData] = useState({
    name:'',
    file: ''
});

    return<>
    <form method='POST' action='#'  onSubmit={(e)=>{
        e.preventDefault()
// we have to add one-one data
const formData = new FormData();
formData.append('name',data.name);
formData.append('Upload Avatar', data.file);
        console.log(data)
        fetch('/users',{
            method: 'POST',
            // headers: {
            //     accept: 'application/json',
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(data)
            body: formData
        })
    }}>
    <div>
        <label>Name</label>
        <input  value={data.name} onChange={(e)=> setData((data)=>(
            {...data,
                name: e.target.value
            })
        )} type='text'/>
    </div>
    <div>
        <label>Upload Photo</label>
        <input type ='file'  onChange={(e)=>{
            setData(data =>({
                ...data,
                file: e.target.files[0]
            }))
        }}  multiple='multiple' />
    </div>
    <div>
        <button type='submit'>Create User</button>
    </div>
    </form>
    </>
}
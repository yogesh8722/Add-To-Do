import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


export default function Forms() {
    const [data, setData] = useState('')
    const [entry,setEntry]=useState([])

    const handleForm = (e) => {
        e.preventDefault();

        if(!data) return;

        if(entry.includes(data)) {
            setData('');
            return;
        }

        setEntry((prev)=>[...prev,data])
        
        setData('');
    }

    const clearAll=()=>{
        setEntry([])
    }

    // delete krne ke liye
    const handledelete=(item)=>{
        console.log(item)
        let deleteitem=entry.filter((value)=>value!==item);
        setEntry(deleteitem);
    }
    const handledata = (value) => {
        setData(value)
    }
    return (
        <div className='form-Container'>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><h1>Add To Do</h1></Form.Label>
                    <Form.Control type="text" value={data} autoComplete='off' onChange={(e) => handledata(e.target.value)} />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ul>
            {entry.map((item,index)=>{
                return(
                    <li key={index}>
                        <span>{item}</span>
                        <button>compelete</button>
                        <button onClick={()=>handledelete(item)}>delete</button>
                    </li>
                )
            })}
            </ul>
            <button onClick={clearAll}>Clear All</button>
        </div>
    )
}

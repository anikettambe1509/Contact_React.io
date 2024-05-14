import React from 'react'
import { useState } from 'react'

const ContactList = () => {

    const [contact, setContact] = useState({ name: "", phone: "" })
    const [list, setList] = useState([])

    const handleChange = (e) => {
        if (e.target.value == null) {
            alert('Please fill empty from');
        }
        else { }
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })

    };

    const submitForm = (e) => {
        e.preventDefault();
        contact.name == "" || contact.phone == "" ? alert('Please fill empty form') :
            setList([...list, contact]);
        console.log(list);
        setContact({ name: "", phone: "" })

    };


    return (

        <>

            <div className="body">

                <h1>Contact Form</h1>

                <form className='myForm'>

                    <div className="input-control">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={contact.name}
                            placeholder='Enter your name...'
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>

                    <br />

                    <div className="input-control">
                        <label htmlFor="Phone">Contact Number:</label>
                        <input
                            maxLength={10}
                            minLength={10}
                            type='number'
                            name='phone'
                            id='photo'
                            value={contact.phone}
                            placeholder='Enter your phone number...'
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>

                    <br />

                    <button className='btn' onClick={submitForm}>Add Contact</button>

                </form>

            </div>

            {/* <hr /> */}

            <div className="body1">

                <h2>Added Contact List</h2>

                <table align='center' border={1}>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((cval) => {
                            return (

                                <>

                                    <tr>
                                        <td>{cval.name}</td>
                                        <td>{cval.phone}</td>
                                    </tr>

                                </>
                            )
                        })}
                    </tbody>

                </table>

                <br />

            </div>





        </>

    )
}

export default ContactList
import React, { useRef, useState } from 'react';
import "../Contact/Contact.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [Success, setSuccess] = useState("")

    const formRef = useRef();

    const PersonSchema = yup.object().shape({
        Name: yup.string().required("Name is required"),
        EmailAddress: yup.string().email("Email format is not valid").required("Valid email address is required"),
        PhoneNumber: yup.string(),
        Subject: yup.string().required("Subject is required"),
        Message: yup.string().required("Message is required")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver : yupResolver(PersonSchema)
    });


    const onSubmit = () => {
        emailjs.sendForm('service_p1q43qr', 'template_fa10n1a', formRef.current, 'PnplNSesRddqlO1I1')
        setSuccess("Message successfully sent.")
    }

return (
    <div className='Contact' >
        <h2>Get In Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} >
            <div>
                <input type="text" name="Name" id="Name" placeholder='Enter Full Name/Organisation'  
                {...register("Name")}/>
                <span className="Error">{errors.Name?.message}</span>
            </div>
            <div>
                <input type="text" name="EmailAddress" id="EmailAddress" placeholder='Enter Email Address' {...register("EmailAddress")}  />
                <span className="Error">{errors.EmailAddress?.message}</span>
            </div>
            <div>
                <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder='Enter Phone Number'  
                {...register("PhoneNumber")} />
            </div>
            <div>
                <input type="text" name="Subject" id="Subject" placeholder='Enter Subject'  
                {...register("Subject")} />
            </div>
            <textarea type="text" placeholder='Enter Message' name="Message" id="Message" cols="20" rows="10" {...register("Message")} ></textarea>
            <span className="Error">{errors.Message?.message}</span>
            <p className='Success' >{Success}</p>
        </form>
        <button onClick={handleSubmit(onSubmit)}  type="submit">Send Message</button>
    </div>
)
}

export default Contact
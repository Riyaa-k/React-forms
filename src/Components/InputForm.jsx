import React from "react";
import { useState,useEffect } from "react";

const InputForm = () => {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    contacts: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange=(e)=>{
    // console.log(e.target);
    const {name,value}=e.target;
    setFormValues({...formValues,[name]: value})
    console.log(formValues)

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
        console.log(formValues)
    }
  }, [formErrors])
  

  const validate =(values)=>{
    const errors={};
    if(!values.first){
        errors.first="First name is required";
    }
    if(!values.last){
        errors.last="Last name is required";
    }
    if(!values.email){
        errors.email="Email is required";
    }
    if(!values.contacts){
        errors.contacts="Contact is required";
    }
    return errors;
  }

  return (
    <>
      <div className="Form">
        {Object.keys(formErrors).length===0 && isSubmit ? (<div>Submitted</div>):<pre>
            {JSON.stringify(formValues,undefined,2)}</pre>}
        <form onSubmit={handleSubmit} >
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" value={formValues.first} onChange={handleChange}/>
            <br />
            <p>{formErrors.first}</p>

            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" value={formValues.last} onChange={handleChange}/>
            <br />
            <p>{formErrors.last}</p>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
            <br />
            <p>{formErrors.email}</p>

            <label htmlFor="contacts">Contacts</label>
            <input type="text" name="contacts" value={formValues.contacts} onChange={handleChange}/>
            <br />
            <p>{formErrors.contacts}</p>

            <button className="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputForm;

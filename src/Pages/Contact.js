import { useForm } from "react-hook-form";
import "./Contact.css"
export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section>
      <h1 className="getintouch">Get in touch with us</h1>
    <form  className="Contactbox" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     
      <label className="Contactgroup" htmlFor="Fullname">Fullname
      <input type="text" {...register("Fullname")} />
    </label>
      
      {/* include validation with required or other standard HTML validation rules */}
  
      <label className="Contactgroup">Email
      <input type="email" {...register("email", { required: true })} />
      </label>

      {/* errors will return when field validation fails  */}
      <label className="Contactgroup" >Subject
      <input type="subject" {...register("Subject")} /></label>

      {errors.exampleRequired && <span>This field is required</span>}
      
      <label className="Contactgroup">Write
      <textarea  name="" id="" cols="" rows=""></textarea>
      </label>
      <input className="Submitbtn"  type="submit" value="Submit" />
    </form>
    </section>
  );
}
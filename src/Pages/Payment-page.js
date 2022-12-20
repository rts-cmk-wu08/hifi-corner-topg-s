import { useForm } from "react-hook-form";
import "./Payment.css"
export default function Payment() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
  
    <section>
      <h1 className="getintouch">Get in touch with us</h1>
    <form  className="Paymentbox" onSubmit={handleSubmit(onSubmit)}>
   
     
      <label className="Paymentgroup" htmlFor="Fullname">Fullname
      <input type="text" {...register("Fullname")} />
    </label>
      <div className="Paymentgroup-city">
<label className="Paymentgroup Paymentgroup__city" >City
      <input type="city" {...register("City")} /></label>

<label className="Paymentgroup Paymentgroup__postal" >Postal code
      <input type="postal" {...register("Postal code")} /></label>
      </div>

<label className="Paymentgroup" >Address
      <input type="address" {...register("Address")} /></label>
  
      <label className="Paymentgroup">Email
      <input type="email" {...register("email", { required: true })} />
      </label>

      <label className="Paymentgroup" >Phone nr
      <input type="tel" {...register("Phone")} /></label>
      

      {errors.exampleRequired && <span>This field is required</span>}
      
    </form>
    </section>
  );
}
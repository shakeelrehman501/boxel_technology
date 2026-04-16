"use client"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Heading from "@/components/MyComponents/Heading";
import MyButton from "@/components/MyComponents/MyButton"
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";


function MessageForm() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bpyf8zh", // 🔴 Service ID
        "template_5c8e58r", // 🔴 Template ID
        formData,
        "JfUvDpw3d9OcjTffy", // 🔴 Public Key
      )
      .then(


        () => {
          toast.success("Email sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Email sending failed ❌");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };




  return (

    <AnimatedSection>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />  
      <Card className="w-full min-w-65  gap-0 bg-transparent border-0 shadow-none py-0 ">
      <CardHeader className="pl-1">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold pb-2 lg:pb-4 ">Send us a message</h1>
        <CardAction>
          {/* <Button variant="link">Sign Up</Button> */}
        </CardAction>
      </CardHeader>
      <CardContent className="px-0" >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 lg:gap-7 ">
            <div className="block space-y-5 sm:flex gap-8 w-full">
              
              {/* Name Section */}
              <AnimatedItem type="slideDown" index={0} className="flex-1 space-y-3">
                <Input
                  name="name"
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="py-6 pl-6 text-[16px] md:text-[16px] rounded-full
                            focus-visible:ring-1 focus-visible:ring-primary  
                            focus:border-transparent focus-visible:border-transparent"
                />
              </AnimatedItem>
              
              {/* Phone Number */}
              {/* <AnimatedItem type="slideDown" index={1} className="flex-1 space-y-3">
                <Input
                  id="cellNumber"
                  type="number"
                  placeholder="Phone number*"
                  required
                  className="py-6 pl-6 text-[16px] md:text-[16px] rounded-full
                            focus-visible:ring-1 focus-visible:ring-primary  
                            focus:border-transparent focus-visible:border-transparent"
                />
              </AnimatedItem> */}
            </div>
            
            {/* Email Address */}
            <AnimatedItem type="slideDown" index={1} className="flex-1 space-y-3">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-6 pl-6 text-[16px] md:text-[16px] rounded-full
                            focus-visible:ring-1 focus-visible:ring-primary  
                            focus:border-transparent focus-visible:border-transparent"
                />
              </AnimatedItem>
            
            {/* Select Services */}
            {/* <AnimatedItem type="slideDown" index={3} className="grid gap-2">
              
              <Select>
                <SelectTrigger className="w-full py-6 pl-6 text-[16px] md:text-[16px] rounded-full
                              focus-visible:ring-primary 
                             focus:border focus:border-primary   
                            
                            ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="text-[25px] 
                             ">
                  <SelectItem value="3D Modeling" className="text-[16px]">
                    3D Modeling
                  </SelectItem>
                  <SelectItem value="Graphic Design" className="text-[16px]">
                    Graphic Design
                  </SelectItem>
                  <SelectItem value="Web Development" className="text-[16px]">
                    Web Development
                  </SelectItem>
                  <SelectItem value="UX/UI Design" className="text-[16px]">
                    UX/UI Design
                  </SelectItem>
                  <SelectItem value="Motion Graphics" className="text-[16px]">
                    Motion Graphics
                  </SelectItem>
                  <SelectItem
                    value="3D Printing Models"
                    className="text-[16px]"
                  >
                    3D Printing Models
                  </SelectItem>
                </SelectContent>
              </Select>
            </AnimatedItem> */}
            
            {/* Description */}
            <AnimatedItem type="slideDown" index={2} className="grid w-full gap-3">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write here your message..."
                className="h-44 text-[16px] md:text-[16px]
                py-4 pl-6 rounded-xl
                            focus-visible:ring-1 focus-visible:ring-primary  
                            focus:border-transparent focus-visible:border-transparent
                "
              />
            </AnimatedItem>
        <AnimatedItem type="slideDown" index={3} >
        <MyButton
        variant="fill"
        type="submit"
        disabled={loading}
        >{loading? "Sending..." : "Send message"}</MyButton>
        </AnimatedItem>
        </div>
        </form>
        </CardContent>
      

    </Card>
    </AnimatedSection>
  );
}

export default MessageForm;

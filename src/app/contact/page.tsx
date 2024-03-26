"use client";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Button from "@/components/DownloadButton";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { exit } from "process";
import React from "react";
import { notification } from "antd";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      const res = await emailjs.send(
        "service_3w5qhv9",
        "template_9qn166a",
        templateParams,
        "6NXJ6a8JAXKmouC3O"
      );

      if (res) {
        notification.success({
          message: "",
          description: "Email sent successfully.",
          duration: 1,
        });
      }

      reset();
    } catch (error) {
      notification.error({
        message: "",
        description: "Email could not be sent",
        duration: 1,
      });
    }
  };

  const Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="sm:py-10 gap-8"
    >
      <div className="font-grapeNuts text-4xl sm:text-6xl text-[#FC6736] text-center my-8">
        Contact
      </div>
      <div className="w-full flex flex-col sm:flex-row lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:w-1/2 flex flex-col items-center gap-7 py-10"
        >
          <input
            type="text"
            placeholder="name"
            // name="name"
            {...register("name", {
              required: "Required",
            })}
            className="w-4/5 rounded-lg bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <input
            // type="text"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            className="w-4/5 rounded-lg bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <textarea
            rows={5}
            placeholder="write here..."
            {...register("message", {
              required: "Required",
            })}
            className="w-4/5 rounded-lg  bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <button type="submit" className="border-2 w-1/3 px-8 py-1 rounded-lg">
            Send
          </button>
        </form>
        <div className="sm:w-1/2 py-8 items-center flex flex-col gap-10 px-5">
          <div className="w-3/4 flex flex-col gap-5">
            <div>
              <span>Name: </span>
              <span>Shardul Kumar</span>
            </div>
            <div>
              <span>Email: </span>
              <span>kumarshardul1998@gmail.com</span>
            </div>
            <div>
              <span>Phone: </span>
              <span>+919368662818</span>
            </div>
            <SocialLinks />
            <Button />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

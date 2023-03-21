import { motion } from "framer-motion";
import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Name :</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Email :</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Message :</span>
            <input
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

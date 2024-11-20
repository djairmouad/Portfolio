import { motion } from "framer-motion";
import image from "../mailImage/mail-box (1).png";
import { ColorContext } from "../store/ColorContext";
import { useContext, useRef } from "react";
// Type assertion to define SendMail's type directly
// @ts-ignore
import SendMail from "../services/SendMail.js";
import { toast} from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Contact() {
  const email = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const { colors } = useContext(ColorContext);

  async function handleSendEmail(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const fd = new FormData(event.currentTarget);
  const mail = fd.get("email");
  const msg = fd.get("message");

  if (!mail || !msg) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const newData = { user_email: mail.toString(), message: msg.toString() };

  // Show the pending toast and manage states with `toast.promise`
  const promise = SendMail(newData);

  toast.promise(promise, {
    loading: "Sending your message...",
    success: "Message sent successfully! 🤩",
    error: "Send failed. Please try again. 🥺",
  });

  try {
    await promise;

    if (email.current) email.current.value = "";
    if (message.current) message.current.value = "";
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

  return (
    <section id="Contact" style={{ height: "100vh" }}>
      <h1 className="text-3xl font-bold mb-3" style={{ color: colors.colorText.toString() }}>
        Contact Me📬
      </h1>
      <div className="flex h-4/5 w-full justify-between items-center max-sm:flex-col">
        <form
          onSubmit={handleSendEmail}
          className="bg-white h-full w-1/2 rounded-lg flex flex-col p-3 font-medium justify-between max-sm:w-full"
        >
          <label htmlFor="mail" className="mb-4">
            Your Mail📧:
          </label>
          <input
            id="mail"
            type="email"
            name="email"
            ref={email}
            className="outline-none mb-8 pl-2 py-1 font-normal rounded-md"
            style={{
              backgroundColor: "#f9fafb",
              border: "2px solid #d1d5db",
              boxShadow: "0px 0px 0px 1px",
            }}
          />
          <label htmlFor="message" className="mb-4">
            Your Message 💌:
          </label>
          <textarea
            id="message"
            name="message"
            ref={message}
            className="h-3/4 outline-none pl-2 py-1 font-normal rounded-md"
            style={{
              backgroundColor: "#f9fafb",
              border: "2px solid #d1d5db",
              boxShadow: "0px 0px 0px 1px",
            }}
          />
          <div className="mt-4">
            <motion.button
              type="submit"
              className="outline-none bg-color_1 px-4 py-2 rounded-md font-normal"
              style={{
                color: colors.background.toString(),
                backgroundColor: colors.color.toString(),
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
            >
              SEND
            </motion.button>
          </div>
        </form>
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.5,
            y: "30%",
            rotate: 50,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
              type: "spring",
              duration: 0.3,
              stiffness: 80,
            },
          }}
          src={image}
          className="w-2/6 mr-5"
          alt="Mailbox illustration"
        />
      </div>
      <Toaster position="bottom-right" reverseOrder={false}/>
      
    </section>
  );
}

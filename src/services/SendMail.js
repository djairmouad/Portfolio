import emailjs from "@emailjs/browser";

const SendMail = async (data) => {
  return emailjs.send(
    import.meta.env.VITE_SERVICES_ID, // Replace REACT_APP_ with VITE_
    import.meta.env.VITE_TEMPLATE_ID,
    { ...data },
    import.meta.env.VITE_PUBLIC_ID
  );
};

export default SendMail;

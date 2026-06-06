import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";
import { useToast } from "../../../Toast";
import InputField from "../InputField";
import Button from "../../../Button";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

async function formAction(prevState, formData) {
  const errors = {};
  if (!formData.get("name")) errors.name = "Name is required";
  if (!formData.get("email")) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
    errors.email = "Email address is invalid";
  }
  if (!formData.get("subject")) errors.subject = "Subject is required";
  if (!formData.get("message")) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) return { errors };

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      },
      PUBLIC_KEY
    );

    return { message: "Message sent successfully!", type: "success" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { message: "Failed to send message!", type: "error" };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      id="send-message-btn" 
      name="sendMessageButton"
      type="submit" 
      stylee="btn__secondary"
    >
      {!pending ? "Send Message" : "Sending..."}
    </Button>
  );
}

const Form = () => {
  const { showToast } = useToast();
  const [state, formActionDispatch] = React.useActionState(formAction, null);

  useEffect(() => {
    if (state?.type === "success") {
      showToast("Message sent successfully!", "success");
    } else if (state?.type === "error") {
      showToast("Failed to send message. Please try again.", "error");
    }
  }, [state, showToast]);

  return (
    <form
      className="flex flex-wrap w-full px-4 md:px-0"
      action={formActionDispatch}
    >
      <InputField 
        name="name" 
        placeholder="Name" 
        error={state?.errors?.name}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        error={state?.errors?.email}
      />
      <InputField
        name="subject"
        placeholder="Subject"
        error={state?.errors?.subject}
      />
      <InputField
        type="textarea"
        name="message"
        placeholder="Message"
        error={state?.errors?.message}
      />

      <div className="w-full mt-4">
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;

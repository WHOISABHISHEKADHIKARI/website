import emailjs from "emailjs-com";

export const sendEmail = (userData, setMessages) => {
  const templateParams = {
    name: userData.name,
    option: userData.option,
    address: userData.address,
    time: userData.time,
    primary_phone: userData.primaryPhone,
    secondary_phone: userData.secondaryPhone,
    to_email: "company@example.com", // Replace with your company email
    date: new Date().toLocaleString(),
  };

  // Conditional credentials based on option
  const credentials = userData.option === "Sales team"
    ? {
        serviceId: "service_86p1vp5",
        templateId: "template_v0n3ktb",
        userId: "xRDbDFSG06rYdytbv",
      }
    : {
        serviceId: "service_oiz83r8",
        templateId: "template_e2xzv0b",
        userId: "MX4LsdBzW8L9fYCXM",
      };

  emailjs
    .send(
      credentials.serviceId,
      credentials.templateId,
      templateParams,
      credentials.userId
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "📧 Your request has been successfully sent to the company!", sender: "bot" },
        ]);
      },
      (error) => {
        console.error("Email sending failed:", {
          message: error.text,
          status: error.status,
          option: userData.option,
          serviceId: credentials.serviceId,
          templateId: credentials.templateId,
          userId: credentials.userId,
        });
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `⚠️ Failed to send request for ${userData.option}. Error: ${error.text}. Please try again later.`, sender: "bot" },
        ]);
      }
    )
    .catch((err) => {
      console.error("Unexpected error in email sending:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "⚠️ An unexpected error occurred. Please try again later.", sender: "bot" },
      ]);
    });
};
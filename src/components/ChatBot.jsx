import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane, FaRedo } from "react-icons/fa";
import { sendEmail } from "./EmailService"; // Import email sending function
import avatar from "../assets/profile_img_2.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Welcome! How can I assist you today?", sender: "bot" },
    { text: "Please choose an option below to get started:", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    time: "",
    primaryPhone: "",
    secondaryPhone: "",
    option: "",
  });
  const chatEndRef = useRef(null);

  // Check if the current page is the first page (root path "/")
  const isFirstPage = window.location.pathname === "/";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const resetChat = () => {
    setMessages([
      { text: "👋 Welcome back! How can I assist you today?", sender: "bot" },
      { text: "Please choose an option below to get started:", sender: "bot" },
    ]);
    setStep(0);
    setInput("");
    setUserData({ name: "", address: "", time: "", primaryPhone: "", secondaryPhone: "", option: "" });
  };

  const sendMessage = () => {
    if (!input.trim() || step === 0 || step === 5) return;
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);
    setInput("");
    handleFlow(input);
  };

  const handleOptionClick = (option) => {
    setIsTyping(true);
    setMessages((prevMessages) => [...prevMessages, { text: option, sender: "user" }]);
    setUserData((prev) => ({ ...prev, option }));
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "What is your name?", sender: "bot" },
      ]);
      setIsTyping(false);
      setStep(1);
    }, 1000);
  };

  const handleFlow = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      if (step === 1) {
        setUserData((prev) => ({ ...prev, name: response }));
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "📍 Can you please provide your address?", sender: "bot" },
        ]);
        setStep(2);
      } else if (step === 2) {
        if (!response.trim()) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "⚠️ Please provide a valid address.", sender: "bot" },
          ]);
        } else {
          setUserData((prev) => ({ ...prev, address: response }));
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "📞 Please share your primary phone number.", sender: "bot" },
          ]);
          setStep(3);
        }
      } else if (step === 3) {
        if (!response.match(/^\+?\d{7,15}$/)) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "⚠️ Please enter a valid phone number.", sender: "bot" },
          ]);
        } else {
          setUserData((prev) => ({ ...prev, primaryPhone: response }));
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "📞 Please share your secondary phone number (optional, press Enter or click Skip).", sender: "bot" },
          ]);
          setStep(4);
        }
      } else if (step === 4) {
        setUserData((prev) => ({ ...prev, secondaryPhone: response || "Not provided" }));
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "🕒 When are you available for our team? Please select a time slot:", sender: "bot" },
        ]);
        setStep(5);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleSkipSecondaryPhone = () => {
    setIsTyping(true);
    setUserData((prev) => ({ ...prev, secondaryPhone: "Not provided" }));
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "🕒 When are you available for our team? Please select a time slot:", sender: "bot" },
      ]);
      setIsTyping(false);
      setStep(5);
    }, 1000);
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setIsTyping(true);
    setMessages((prevMessages) => [...prevMessages, { text: timeSlot, sender: "user" }]);
    setUserData((prev) => ({ ...prev, time: timeSlot }));
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `✅ Thank you, ${userData.name}! You are looking for a ${userData.option} in ${userData.address} at ${timeSlot}. Primary: ${userData.primaryPhone} Secondary: ${userData.secondaryPhone}. Is this correct?`,
          sender: "bot",
        },
      ]);
      setIsTyping(false);
      setStep(6);
    }, 1000);
  };

  const handleConfirmation = (isCorrect) => {
    setIsTyping(true);
    setTimeout(() => {
      if (isCorrect) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Yes", sender: "user" },
          { text: "✅ Great! Submitting your request...", sender: "bot" },
        ]);
        sendEmail(userData, setMessages); // Call email sending function
        setStep(7);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "No", sender: "user" },
          { text: "🔄 Let's try again. What is your name?", sender: "bot" },
        ]);
        setStep(1);
        setUserData({ name: "", address: "", time: "", primaryPhone: "", secondaryPhone: "", option: userData.option });
      }
      setIsTyping(false);
    }, 1000);
  };

  const timeSlots = [
    "Today, 9 AM - 11 AM",
    "Today, 1 PM - 3 PM",
    "Today, 4 PM - 6 PM",
    "Tomorrow, 10 AM - 12 PM",
    "Tomorrow, 2 PM - 4 PM",
  ];

  // Render the ChatBot only if on the first page ("/")
  if (!isFirstPage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          Chat with Us
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col max-h-[80vh]">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={avatar} alt="Chat Avatar" className="w-10 h-10 rounded-full" />
              <span className="font-semibold text-lg">Chat Support</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetChat}
                className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white p-1"
                aria-label="Reset chat"
              >
                <FaRedo size={16} />
              </button>
              <button
                onClick={toggleChat}
                className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white p-1"
                aria-label="Close chat"
              >
                <FaTimes size={18} />
              </button>
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-white text-gray-800 shadow-sm border border-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="text-gray-500 text-sm italic">
                  Typing<span className="animate-pulse">...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {step === 0 && (
            <div className="p-4 border-t bg-gray-100">
              <div className="flex flex-col gap-2">
                <button
                  className="bg-blue-100 text-blue-700 p-2 rounded-md hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => handleOptionClick("Technician")}
                >
                  Technician
                </button>
                <button
                  className="bg-blue-100 text-blue-700 p-2 rounded-md hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => handleOptionClick("Sales team")}
                >
                  Sales team
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="p-4 border-t bg-gray-100">
              <div className="flex flex-col gap-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className="bg-blue-100 text-blue-700 p-2 rounded-md hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => handleTimeSlotSelection(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="p-4 border-t bg-gray-100">
              <div className="flex gap-2">
                <button
                  className="flex-1 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={() => handleConfirmation(true)}
                >
                  Yes
                </button>
                <button
                  className="flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleConfirmation(false)}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {(step > 0 && step < 5) && (
            <div className="p-4 border-t bg-white rounded-b-xl">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder={step === 4 ? "Secondary phone (optional)" : "Type your message..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  disabled={isTyping}
                  aria-label="Chat input"
                />
                <button
                  className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={sendMessage}
                  disabled={isTyping || (!input.trim() && step !== 4)}
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </button>
                {step === 4 && (
                  <button
                    className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={handleSkipSecondaryPhone}
                    disabled={isTyping}
                    aria-label="Skip secondary phone"
                  >
                    Skip
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="p-4 border-t bg-gray-100 text-center text-gray-600">
              Chat completed. Your request has been processed.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
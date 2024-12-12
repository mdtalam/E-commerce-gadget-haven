import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import "./CustomerService.css";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionHistory, setSubmissionHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("customerServiceHistory")) || [];
    setSubmissionHistory(savedHistory);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHistory = [...submissionHistory, formData];
    localStorage.setItem("customerServiceHistory", JSON.stringify(newHistory));
    setSubmissionHistory(newHistory);
    toast.success("Your message has been sent!", {
      duration: 4000,
      position: "top-center",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleDeleteHistory = () => {
    localStorage.removeItem("customerServiceHistory");
    setSubmissionHistory([]);
    toast.success("Message history deleted!", {
      position: "top-center",
      duration: 4000,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Customer Service</title>
      </Helmet>
      <div className="mb-14 hero bg-[#9538E2] pb-20 pt-8 container mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl text-white font-bold">Customer Service</h1>
            <p className="py-2 text-lg text-white">
              Our Customer Service team is dedicated to assisting you with any
              inquiries, providing order support, and ensuring a smooth
              experience. Reach out for help with tracking, returns, or
              personalized assistance.
            </p>
          </div>
        </div>
      </div>
      {/* banner end */}
      <div>
        <h1 className="text-3xl font-bold text-center">Customer Service</h1>
        <section className="contact-form">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label className="text-lg" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="text-lg" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="text-lg" htmlFor="message">
              Message:
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              className="text-lg bg-[#9538E2] hover:bg-[#9538E2] rounded-full px-4 py-2 text-white"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="submission-history text-xl mt-14">
          <h2 className="font-bold text-2xl mb-6 text-center">
            Submission History
          </h2>
          {submissionHistory.length > 0 ? (
            <ul className="p-2 md:p-6 lg:p-6 shadow-2xl bg-slate-200 rounded-3xl mb-6">
              {submissionHistory.map((submission, index) => (
                <li key={index} className="border-b py-2">
                  <div className="p-2 md:p-6 lg:p-6 shadow-2xl bg-white rounded-3xl mb-6">
                    <p className="text-sm md:text-xl lg:text-xl">
                      <strong>Name:</strong> {submission.name}
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl">
                      <strong>Email:</strong> {submission.email}
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl">
                      <strong>Message:</strong> {submission.message}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center mb-8">No Previous Message</p>
          )}
        </section>
        <div className="flex justify-center">
          <button
            className="ml-4 text-lg bg-[#9538E2] hover:bg-red-600 rounded-full px-6 py-2 text-white"
            onClick={handleDeleteHistory}
          >
            Delete History
          </button>
        </div>

        <section className="faqs text-xl mt-14">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>How do I reset my password?</strong>
              <p>
                You can reset your password by clicking on the `Forgot Password`
                link on the login page.
              </p>
            </li>
            <li>
              <strong>What payment methods do you accept?</strong>
              <p>
                We accept Visa, MasterCard, PayPal, and other major credit
                cards.
              </p>
            </li>
            <li>
              <strong>How can I track my order?</strong>
              <p>
                You can track your order through the tracking link provided in
                your order confirmation email.
              </p>
            </li>
          </ul>
        </section>

        <section className="contact-info text-xl mt-14">
          <h2 className="font-bold">Other Ways to Reach Us</h2>
          <p>
            If you`d like to speak with someone directly, you can reach us
            through the following methods:
          </p>
          <ul>
            <li>Email: support@company.com</li>
            <li>Phone: 1-800-123-4567</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default CustomerService;

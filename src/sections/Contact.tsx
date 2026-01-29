import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const mailtoLink = `mailto:olamideabraham1212@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open user's email client
        window.location.href = mailtoLink;

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian mb-4">Contact</h2>
                    <p className="text-slate-600 text-sm md:text-base">
                        Use this form for bookings, job opportunities, or agency enquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Contact Form */}
                    <div className="bg-slate-50 p-8 md:p-10 rounded-lg border border-slate-200">
                        <h3 className="text-obsidian text-xl font-bold mb-3">Send a message</h3>
                        <p className="text-slate-500 text-sm mb-8">
                            Reach out for bookings, events, or culinary collaborations.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-brandGreen transition-colors"
                                placeholder="Your name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-brandGreen transition-colors"
                                placeholder="Email address"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-brandGreen transition-colors"
                                placeholder="Subject"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-brandGreen transition-colors h-32 resize-none"
                                placeholder="Your message"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-brandGreen text-white py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-brandGreen/90 transition-all cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right - Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-obsidian text-xl font-bold mb-6">Details</h3>

                            <div className="space-y-6">
                                {/* Location */}
                                <div>
                                    <div className="inline-block bg-brandGreen/10 text-brandGreen text-xs font-bold px-3 py-1.5 rounded-full mb-2">
                                        Location
                                    </div>
                                    <p className="text-slate-600 text-sm">United Kingdom</p>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className="inline-block bg-brandGreen/10 text-brandGreen text-xs font-bold px-3 py-1.5 rounded-full mb-2">
                                        Email
                                    </div>
                                    <a
                                        href="mailto:olamideabraham1212@outlook.com"
                                        className="text-slate-600 text-sm hover:text-brandGreen transition-colors cursor-pointer underline decoration-transparent hover:decoration-brandGreen"
                                    >
                                        olamideabraham1212@outlook.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div>
                                    <div className="inline-block bg-brandGreen/10 text-brandGreen text-xs font-bold px-3 py-1.5 rounded-full mb-2">
                                        Phone
                                    </div>
                                    <a
                                        href="tel:+447424925754"
                                        className="text-slate-600 text-sm hover:text-brandGreen transition-colors cursor-pointer underline decoration-transparent hover:decoration-brandGreen"
                                    >
                                        (+44) 7424 925754
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-obsidian text-lg font-bold mb-4">Quick links</h4>
                            <div className="flex gap-3">
                                <a
                                    href="#specialties"
                                    className="px-6 py-3 bg-white border border-slate-200 text-obsidian text-sm font-medium rounded hover:bg-slate-50 transition-all"
                                >
                                    Specialties
                                </a>
                                <a
                                    href="#experience"
                                    className="px-6 py-3 bg-white border border-slate-200 text-obsidian text-sm font-medium rounded hover:bg-slate-50 transition-all"
                                >
                                    Experience
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

"use client"

import { Mail, MapPin, Phone, Twitter, Instagram, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ContactInfoForm() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[12px] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Side: Contact Information */}
                    <div className="lg:w-[40%] bg-[#010514] p-10 md:p-14 text-white relative flex flex-col justify-between overflow-hidden">
                        {/* Decorative Orbs - Matching Sample */}
                        <div className="absolute bottom-10 right-10 w-48 h-48 bg-slate-800/20 rounded-full -z-0" />
                        <div className="absolute bottom-[80px] right-[100px] w-32 h-32 bg-slate-700/10 rounded-full -z-0" />

                        <div className="relative z-10">
                            <h2 className="text-[28px] font-semibold mb-2">Contact Information</h2>
                            <p className="text-slate-400 text-base mb-16">Say something to start a live chat!</p>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6">
                                    <Phone className="w-6 h-6 text-white" />
                                    <span className="text-sm md:text-base font-light text-slate-200">+234 807 354 8926 | +234 906 094 5385</span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <Mail className="w-6 h-6 text-white" />
                                    <span className="text-sm md:text-base font-light text-slate-200">muskmoverltd@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <MapPin className="w-6 h-6 text-white" />
                                    <span className="text-sm md:text-base font-light text-slate-200">Port Harcourt, Rivers State, Nigeria</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-6 relative z-10">
                            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#010514] flex items-center justify-center hover:scale-110 transition-transform">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                                <MessageSquare className="w-5 h-5 text-slate-400" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Form (Underline Style) */}
                    <div className="lg:w-[60%] p-10 md:p-14 bg-white">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {/* First Name */}
                                <div className="relative group">
                                    <label className="text-[13px] font-medium text-slate-400 mb-1 block">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent placeholder:text-slate-200"
                                        placeholder=" "
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="relative group">
                                    <label className="text-[13px] font-medium text-slate-400 mb-1 block">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {/* Email */}
                                <div className="relative group">
                                    <label className="text-[13px] font-medium text-slate-400 mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent"
                                        placeholder=" "
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="relative group">
                                    <label className="text-[13px] font-medium text-slate-400 mb-1 block">Phone Number</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent"
                                        placeholder="+1 012 3456 789"
                                    />
                                </div>
                            </div>

                            {/* Subject Selection Style */}
                            <div className="relative group">
                                <label className="text-[13px] font-medium text-slate-400 mb-1 block">Subject</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent"
                                    placeholder="Information about my vessel"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative group">
                                <label className="text-[13px] font-medium text-slate-400 mb-1 block">Message</label>
                                <textarea
                                    className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-red-500 transition-colors bg-transparent min-h-[40px] resize-none"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <div className="pt-6 flex justify-end">
                                <Button className="bg-[#EF4444] hover:bg-[#DC2626] text-white px-12 h-14 rounded-[4px] text-base font-medium shadow-lg transition-all">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

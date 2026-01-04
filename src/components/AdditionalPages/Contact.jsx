 import React from "react";
 import { motion } from "framer-motion";
 import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

 const Contact = () => {
   return (
     <section className="w-full py-20  ">
       <div className="w-11/12 max-w-6xl mx-auto">
        
         <div className="relative mb-16 text-center">
           <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
           <div className="relative inline-block bg-white px-10 py-4 rounded-full border border-purple-200 shadow-md z-10">
             <motion.h2
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
               className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide"
             >
               Get in <span className="text-purple-600">Touch</span>
             </motion.h2>
           </div>
         </div>

          
         <div className="grid lg:grid-cols-2 gap-12 items-start">
            
           <div className="space-y-8">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <h3 className="text-3xl font-bold   mb-8">
                 We'd Love to Hear From You
               </h3>
               <p className="text-lg   leading-relaxed mb-10">
                 Whether you have questions about our courses, need help with
                 enrollment, or just want to say hello — our team is here to
                 assist you every step of the way.
               </p>
             </motion.div>

     
             <div className="space-y-6">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 viewport={{ once: true }}
                 className="flex items-start gap-5 p-6   rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
               >
                 <div className="p-3 bg-purple-100 rounded-full">
                   <Mail
                     className="w-7 h-7 text-purple-600"
                     strokeWidth={1.8}
                   />
                 </div>
                 <div>
                   <h4 className="font-semibold  ">Email Us</h4>
                   <p className="  mt-1">e-learn@gmail.com</p>
                   <p className=" ">e-learnSupport@gmail.com</p>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 viewport={{ once: true }}
                 className="flex items-start gap-5 p-6   rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
               >
                 <div className="p-3 bg-purple-100 rounded-full">
                   <Phone
                     className="w-7 h-7 text-purple-600"
                     strokeWidth={1.8}
                   />
                 </div>
                 <div>
                   <h4 className="font-semibold  ">Call Us</h4>
                   <p className="  mt-1">+880 1642 728 613 (BD)</p>
                   <p className=" ">
                     +1 (555) 123-4567 (International)
                   </p>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.5 }}
                 viewport={{ once: true }}
                 className="flex items-start gap-5 p-6   rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
               >
                 <div className="p-3 bg-purple-100 rounded-full">
                   <Clock
                     className="w-7 h-7 text-purple-600"
                     strokeWidth={1.8}
                   />
                 </div>
                 <div>
                   <h4 className="font-semibold  ">
                     Support Hours
                   </h4>
                   <p className="  mt-1">
                     Monday – Friday: 9:00 AM – 8:00 PM
                   </p>
                   <p className=" ">
                     Saturday: 10:00 AM – 6:00 PM (GMT+6)
                   </p>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.6 }}
                 viewport={{ once: true }}
                 className="flex items-start gap-5 p-6   rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
               >
                 <div className="p-3 bg-purple-100 rounded-full">
                   <Globe
                     className="w-7 h-7 text-purple-600"
                     strokeWidth={1.8}
                   />
                 </div>
                 <div>
                   <h4 className="font-semibold  ">
                     Global Presence
                   </h4>
                   <p className=" not-[]: mt-1">
                     Serving learners in 150+ countries
                   </p>
                   <p className=" ">
                     Headquartered in Dhaka, Bangladesh
                   </p>
                 </div>
               </motion.div>
             </div>
           </div>
 
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
             className="  p-8 md:p-10 rounded-3xl shadow-2xl border border-purple-200"
           >
             <h3 className="text-2xl font-bold   mb-6">
               Send Us a Message
             </h3>
             <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium   mb-2">
                     Full Name
                   </label>
                   <input
                     type="text"
                     required
                     className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                     
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium   mb-2">
                     Email Address
                   </label>
                   <input
                     type="email"
                     required
                     className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium   mb-2">
                   Subject
                 </label>
                 <input
                   type="text"
                   required
                   className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                   placeholder="Course Inquiry / Support / Partnership"
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium   mb-2">
                   Your Message
                 </label>
                 <textarea
                   rows={5}
                   required
                   className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                   placeholder="Tell us how we can help you..."
                 ></textarea>
               </div>

               <button
                 type="submit"
                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
               >
                 Send Message
                 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
           </motion.div>
         </div>

 
         <div className="mt-20 text-center">
           <p className="text-lg   max-w-3xl mx-auto">
             We typically respond within{" "}
             <span className="font-semibold text-purple-600">24 hours</span>.
             Your success is our priority at E-Learn.
           </p>
         </div>
       </div>
     </section>
   );
 };

 export default Contact;
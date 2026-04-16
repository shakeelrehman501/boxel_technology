import React from "react";

import Heading from "@/components/MyComponents/HeadingTitle";
import ContactInformation from "./components/ContactInformation";

import MessageForm from "./components/MessageForm";
function Contact() {
  return (
    <main className="w-full bg-secondary">
      <div className="w-full bg-primary dark:bg-secondary  h-24"></div>
      <div className="w-full  pt-15 text-secondary-foreground bg-secondary dark:bg-secondary/40  ">
        <div className="w-full max-w-350 mx-auto px-5 ">
          <Heading
            title="Have questions? ready to help!"
            description="Were here to answer any questions you may have about our services or process."
          />
          <div className="py-10">
            <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4   shadow-xl dark:shadow-white/10  ">
              <div className="w-full flex items-center  flex-col-reverse lg:flex-row gap-8 sm:gap-12 lg:gap-4">
                <ContactInformation />
                <div className="flex-1 w-full">
                  <MessageForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

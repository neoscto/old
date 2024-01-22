"use client";
import Image from "next/image";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase"; // Import the db (Firestore instance)
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (
      formData.businessName
      //  &&
      // formData.firstName &&
      // formData.lastName &&
      // formData.email &&
      // formData.phoneNumber
    ) {
      try {
        const docRef = await addDoc(collection(db, "contacts"), formData);
        console.log("Document written with ID: ", docRef.id);

        toast.success(t("notify"), {
          duration: 3000,
          style: {
            textAlign: "center",
          },
        });

        setTimeout(() => {
          window.location.href =
            "https://calendly.com/jose-vcg/30min?month=2023-08";
        }, 2000);
      } catch (error) {
        toast.error("There was an error submitting your form.", {
          duration: 3000,
        });
      }
    } else {
      toast("All fields are required!", {
        icon: "✍️",
      });
    }
  };

  return (
    <>
      <div
        className="relative overflow-hidden w-full bg-green text-white mt-24 md:mt-36"
        id="contact"
      >
        <div className="py-10 lg:py-20 px-6 lg:px-12 mx-auto w-full max-w-screen-xl gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 mx-auto text-center lg:text-start lg:pr-10 flex flex-col justify-center items-center lg:block">
            <h4 className="text-2xl md:text-4xl font-semibold">
              {t("contact.title")}
            </h4>
            <p
              className="mt-7 leading-loose"
              dangerouslySetInnerHTML={{
                __html: t("contact.subtitle"),
              }}
            ></p>

            <div className="block lg:hidden z-50 w-full mx-auto lg:mx-0 max-w-[600px] my-14 text-start">
              <div className="flex flex-col w-full bg-white py-7 px-4 md:px-6 rounded-xl text-green">
                <span className="font-[500]">
                  {t("contact.form.businessName")}
                </span>
                <input
                  name="businessName"
                  type="name"
                  onChange={handleInputChange}
                  value={formData.businessName}
                  className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                  placeholder={t("contact.form.enterBusinessName")}
                />

                {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                  <div className="flex flex-col w-full">
                    <span className="font-[500]">
                      {t("contact.form.firstName")}
                    </span>
                    <input
                      name="firstName"
                      type="name"
                      onChange={handleInputChange}
                      value={formData.firstName}
                      className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                      placeholder={t("contact.form.enterFirstName")}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="font-[500]">
                      {t("contact.form.lastName")}
                    </span>
                    <input
                      name="lastName"
                      type="name"
                      onChange={handleInputChange}
                      value={formData.lastName}
                      className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                      placeholder={t("contact.form.enterLastName")}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                  <div className="flex flex-col w-full">
                    <span className="font-[500]">
                      {t("contact.form.email")}
                    </span>
                    <input
                      name="email"
                      type="email"
                      onChange={handleInputChange}
                      value={formData.email}
                      className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                      placeholder={t("contact.form.enterEmail")}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="font-[500]">
                      {t("contact.form.phoneNumber")}
                    </span>
                    <input
                      name="phoneNumber"
                      type="phone"
                      onChange={handleInputChange}
                      value={formData.phoneNumber}
                      className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                      placeholder={t("contact.form.enterPhoneNumber")}
                    />
                  </div>
                </div>

                <span className="font-[500] mt-7">
                  {t("contact.form.message")}
                </span>
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                  className="outline-none resize-none h-52 border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                  placeholder={t("contact.form.writeMessage")}
                /> */}

                <div
                  onClick={handleSubmit}
                  className="bg-green mt-7 mx-auto text-white border rounded-md cursor-pointer border-green hover:bg-white hover:text-green transition-all py-3 px-6"
                >
                  {t("submit")}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <h5 className="text-2xl font-bold mt-14 mb-5">
                {t("contact.subsubtitle")}
              </h5>
              <ul>
                <li className="flex items-center my-2">
                  <span className="mr-2 text-2xl md:text-4xl text-cream tracking-wide">
                    •
                  </span>{" "}
                  <span>{t("phone")}</span>: +34 900 732 890
                </li>
                <li className="flex items-center my-2">
                  <span className="mr-2 text-2xl md:text-4xl text-cream tracking-wide">
                    •
                  </span>{" "}
                  <span>{t("email")}</span>: contact@neos-power.com
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 z-50 w-full mx-auto text-center lg:mx-0 max-w-[600px] lg:mt-20 pb-20">
            <div className="hidden lg:flex text-start flex-col w-full bg-white py-7 px-4 md:px-8 rounded-xl text-green">
              <span className="font-[500]">
                {t("contact.form.businessName")}
              </span>
              <input
                name="businessName"
                type="name"
                onChange={handleInputChange}
                value={formData.businessName}
                className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                placeholder={t("contact.form.enterBusinessName")}
              />

              {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                <div className="flex flex-col w-full">
                  <span className="font-[500]">
                    {t("contact.form.firstName")}
                  </span>
                  <input
                    name="firstName"
                    type="name"
                    onChange={handleInputChange}
                    value={formData.firstName}
                    className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                    placeholder={t("contact.form.enterFirstName")}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-[500]">
                    {t("contact.form.lastName")}
                  </span>
                  <input
                    name="lastName"
                    type="name"
                    onChange={handleInputChange}
                    value={formData.lastName}
                    className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                    placeholder={t("contact.form.enterLastName")}
                  />
                </div>
              </div> */}

              {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                <div className="flex flex-col w-full">
                  <span className="font-[500]">{t("contact.form.email")}</span>
                  <input
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                    placeholder={t("contact.form.enterEmail")}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-[500]">
                    {t("contact.form.phoneNumber")}
                  </span>
                  <input
                    name="phoneNumber"
                    type="phone"
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    className="outline-none border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                    placeholder={t("contact.form.enterPhoneNumber")}
                  />
                </div>
              </div> */}

              {/* <span className="font-[500] mt-7">
                {t("contact.form.message")}
              </span>
              <textarea
                name="message"
                onChange={handleInputChange}
                value={formData.message}
                className="outline-none resize-none h-52 border border-[#D8DAE5] rounded-md placeholder:text-[#A2A2A2] text-sm p-3 mt-2"
                placeholder={t("contact.form.writeMessage")}
              /> */}

              <div
                onClick={handleSubmit}
                className="bg-green mt-7 mx-auto text-white border rounded-md cursor-pointer border-green hover:bg-white hover:text-green transition-all py-3 px-6"
              >
                {t("submit")}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:hidden mx-auto">
              <h5 className="text-2xl font-bold mb-5">
                {t("contact.subsubtitle")}
              </h5>
              <ul className="">
                <li className="flex items-center my-2">
                  <span className="mr-2 text-2xl md:text-4xl text-cream tracking-wide">
                    •
                  </span>{" "}
                  <span>{t("phone")}</span>: +34 900 732 890
                </li>
                <li className="flex items-center my-2">
                  <span className="mr-2 text-2xl md:text-4xl text-cream tracking-wide">
                    •
                  </span>{" "}
                  <span>{t("email")}</span>: contact@neos-power.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="absolute -bottom-10 left-0"
          style={{
            borderRadius: "100%",
            width: "400px",
            height: "400px",
            background: "rgba(254, 241, 205, 0.70)",
            filter: " blur(200px)",
          }}
        ></div>
        <div
          className="absolute -bottom-20 right-0"
          style={{
            borderRadius: "100%",
            width: "400px",
            height: "400px",
            background: "rgba(254, 241, 205, 0.70)",
            filter: " blur(200px)",
          }}
        ></div>
        <Image
          src={"/wave.png"}
          width={400}
          height={400}
          alt="blos"
          className="w-full absolute bottom-0 left-0"
        />
      </div>
      <Toaster />
    </>
  );
}

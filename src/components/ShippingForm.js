"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
const PackagingCardsData = [
  {
    id: 1,
    title: "Envelope, Padded Envelope, Poly Bag, Soft Pack, or Box in a Bag",
    description:
      "Measure & use the Length and Width of the Envelope before putting anything in it",
    image: "/images/SoftEnvelope.png",
  },
  {
    id: 2,
    title: "USPS Priority Mail Small Flat Rate Box",
    description: "Small Flat Rate Mailing Box only",
    image: "/images/SmallFlatRateBox.png",
  },
  {
    id: 3,
    title: "USPS Priority Mail Medium Flat Rate Box",
    description:
      "Any Medium Flat Rate Box, including 1 (Top-Loading) and 2 (Side-Loading)",
    image: "/images/MediumFlatRateBox.png",
  },
  {
    id: 4,
    title: "USPS Priority Mail Large Flat Rate Box",
    description:
      "Any Large Flat Rate Box, including APO/FPO or Board Game Flat Rate Boxes",
    image: "/images/LargeFlatRateBox.png",
  },
  {
    id: 5,
    title: "USPS Priority Mail Flat Rate Envelope",
    description: "Non-padded Flat Rate Envelope including Small and Window",
    image: "/images/FlatRateEnvelope.png",
  },
  {
    id: 6,
    title: "USPS Priority Mail Legal Flat Rate Envelope",
    description: "Priority Mail Legal Flat Rate Envelope",
    image: "/images/FlatRateLegalEnvelope.png",
  },
  {
    id: 7,
    title: "USPS Priority Mail Padded Flat Rate Envelope",
    description: "Flat Rate-branded Padded Envelope only",
    image: "/images/FlatRatePaddedEnvelope.png",
  },
  {
    id: 8,
    title: "USPS Priority Mail Express Padded Flat Rate Envelope",
    description: "Express-branded only",
    image: "/images/ExpressFlatRatePaddedEnvelope.png",
  },
  {
    id: 9,
    title: "USPS Priority Mail Express Legal Flat Rate Envelope",
    description: "Express-branded only",
    image: "/images/ExpressFlatRateLegalEnvelope.png",
  },
  {
    id: 10,
    title: "USPS Priority Mail Express Flat Rate Envelope",
    description: "Express-branded non-padded only",
    image: "/images/ExpressFlatRateEnvelope.png",
  },
  {
    id: 11,
    title: "UPS Express Envelope",
    description: "UPS-branded Envelope for letter-sized documents",
    image: "/images/01.png",
  },
  {
    id: 12,
    title: "UPS Small Express Box",
    description: "UPS-branded box for small-sized shipments",
    image: "/images/2a.png",
  },
  {
    id: 13,
    title: "UPS Medium Express Box",
    description: "UPS-branded box for medium-sized shipments",
    image: "/images/2b.png",
  },
  {
    id: 14,
    title: "UPS Large Express Box",
    description: "UPS-branded box for large-sized shipments",
    image: "/images/2c.png",
  },
  {
    id: 15,
    title: "UPS Express Tube",
    description:
      "UPS-branded triangular box for rolled documents (blueprints, posters, etc.)",
    image: "/images/03.png",
  },
  {
    id: 16,
    title: "UPS Express Pak",
    description: "UPS-branded poly envelope",
    image: "/images/04.png",
  },
];

const ShippingForm = () =>
{

  const [ checkedBoxes, setCheckedBoxes ] = useState({
    rubberStamp: false,
    Insurance: false,
    Hazardous: false,
    CustomsForm: false,
    SavePackage: false,
  });

  const handleCheckboxChange = (key) =>
  {
    setCheckedBoxes((prev) => ({
      ...prev,
      [ key ]: !prev[ key ],
    }));
  };
  const PackagingCardsDataLength = PackagingCardsData.length;

  return (
    <div className="flex-1 sm:p-[49px] p-[30px] mb-[4em]">
      <h1 className="text-[1.777em] font-[700] mb-8">
        Create a Shipping Label
      </h1>

      <section className="mb-[1.489em]">
        <h2 className="font-semibold text-lg mb-2">
          Ship To{" "}
          <span className="text-blue-500 cursor-pointer">Paste Address</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.389em]">
          <Input placeholder="Email (optional)" />
          <Input placeholder="Phone (optional)" />
          <Input placeholder="Name" />
          <Input placeholder="Company (optional)" />
          <Input placeholder="Address" />
          <Input placeholder="Apt / Unit / Suite / etc. (optional)" />

          {/* 4-in-1 Row */}
          <div className="col-span-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex sm:flex-row   gap-7">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="Zipcode" />
              </div>
              <select className=" appearance-none border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-[13px]  rounded w-full bg-linear-to-b from-[#fff] to-[#ebebeb] text-md">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-[34px]">
        <label className="flex items-center space-x-[5px] text-sm">
          <input
            type="checkbox"
            checked={checkedBoxes.rubberStamp}
            onChange={() => handleCheckboxChange("rubberStamp")}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <p>
            <span className="font-[600] text-[16px]">Rubber Stamps</span>{" "}
            <span className="text-sm text-[#999]">
              Print extra information on the label{" "}
            </span>{" "}
            <span className="text-blue-500 underline">Learn more</span>
          </p>
        </label>
        {checkedBoxes.rubberStamp && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-3">
            <Input placeholder="Rubber Stamp / Custom Reference 1" />
            <Input placeholder="Rubber Stamp / Custom Reference 2" />
          </div>
        )}
      </div>
      <div className="mb-[1.389em]">
        <h1 className="text-[1em] font-[600] text-[#333]">Ship From</h1>
        <div
          className={`${ checkedBoxes.ShipFrom
            ? "border-2 border-[#00a9ff] overflow-hidden"
            : ""
            } rounded-[5px] mt-[6.8px]`}
        >
          <div
            onClick={() => handleCheckboxChange("ShipFrom")}
            className={`w-full h-[66.89px] flex items-center justify-between p-[10px] ${ checkedBoxes.ShipFrom
              ? `hover:bg-[#d9f2ff] border-b-[1px] border-[#ccc] hover:border-[#00a9ff]`
              : "border-2 border-gray-300 bg-linear-to-b from-[#fff] to-[#ebebebeb] rounded-[4px]"
              } cursor-pointer`}
          >
            <div className="">
              <h1 className="text-[1em] font-[400] text-[#030303]">M Jibon</h1>
              <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                M Jibon, Dewanganj, Jamalpur CA 90089
              </p>
            </div>
            <FaCaretDown className="text-[1.3em] text-[#000]" />
          </div>
          <div
            className={`w-full h-[66.89px] flex items-center justify-between p-[10px] ${ checkedBoxes.ShipFrom
              ? "hover:bg-[#d9f2ff] border-t-[1px] border-[#ccc] hover:border-[#00a9ff]"
              : "hidden"
              } cursor-pointer`}
          >
            <div className="">
              <h1 className="text-[1em] font-[400] text-[#030303]">
                Don&lsquo;t use saved Ship From Address
              </h1>
              <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                Create New Ship From Address
              </p>
            </div>
            {/* <FaCaretDown className="text-[1.3em] text-[#000]" /> */}
          </div>
        </div>
      </div>


      {/* ------------Type of Packaging---------------- */}
      <div className="mb-[1.389em] pt-[7px]">
        <h1 className="text-[1em] font-[600] text-[#333] mb-[6.8px]">
          Type of Packaging
        </h1>
        <div
          className={`${ checkedBoxes.PackagingCards
            ? "border-2 border-[#00a9ff] overflow-hidden"
            : ""
            } rounded-[5px]`}
        >
          <div
            onClick={() => handleCheckboxChange("PackagingCards")}
            className={`w-full h-[150px] flex items-center justify-between p-[10px] ${ checkedBoxes.PackagingCards
              ? `hover:bg-[#d9f2ff] border-b-[1px] border-[#ccc] hover:border-[#00a9ff]`
              : "border-2 border-gray-300 bg-linear-to-b from-[#fff] to-[#ebebebeb] rounded-[4px]"
              } cursor-pointer`}
          >
            <div className="flex justify-between items-center">
              <Image
                src="/images/Parcel-box.png"
                alt="Parcel"
                width={130}
                height={130}
                className="w-[130px] h-[130px] object-cover"
              />
              <div className="ml-[.9em]">
                <h1 className="text-[1em] font-[400] text-[#030303]">
                  Box or Rigid Packaging
                </h1>
                <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                  Any custom box or thick parcel
                </p>
              </div>
            </div>
            <FaCaretDown className="text-[1.3em] text-[#000]" />
          </div>

          {PackagingCardsData.map((card) =>
          {
            return (
              <div key={card.id}
                className={`w-full h-[150px] flex items-center justify-between p-[10px] ${ checkedBoxes.PackagingCards
                  ? `hover:bg-[#d9f2ff] border-t-[1px] ${ PackagingCardsDataLength === card.id ? "" : "border-b-[1px]" } border-[#ccc] hover:border-[#00a9ff]`
                  : "hidden"
                  } cursor-pointer`}
              >
                <div className="flex justify-between items-center">
                  <Image
                    src={card.image}
                    alt="Parcel"
                    width={130}
                    height={130}
                    className="w-[130px] h-[130px] object-cover"
                  />
                  <div className="ml-[.9em]">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      {card.title}
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <div className="pb-[1.389em] pt-[7px]">
        <div className="mb-[1.389em]">
          <h1 className="text-[1em] font-[600] text-[#000] mb-[6.8px]">
            Package Dimensions (Inches)
          </h1>
          <div className="flex items-center lg:max-w-[91%] w-full lg:space-x-0 space-x-[.694em]">
            <Input placeholder="Length" />
            <div className="max-w-[102px]">
              <div className="w-[102px] lg:flex hidden justify-center text-[17px] text-[#999]">
                x
              </div>
            </div>
            <Input placeholder="Width" />
            <div className="max-w-[102px]">
              <div className="w-[102px] lg:flex hidden justify-center text-[17px] text-[#999]">
                x
              </div>
            </div>

            <Input placeholder="Height" />
          </div>
        </div>
        <div className="">
          <h1 className="text-[1em] font-[600] text-[#000] mb-[6.8px]">
            Package Weight
          </h1>

          <div className="flex items-center lg:max-w-[57%] w-full lg:space-x-0 space-x-[.694em]">
            <Input placeholder="Pounds" />
            <div className="max-w-[102px]">
              <div className="w-[102px] lg:flex hidden justify-center text-[17px] text-[#999]">
                +
              </div>
            </div>
            <Input placeholder="Ounces" />
          </div>
        </div>
      </div>
      <div className="my-[1em]">
        <label className="flex space-x-[5px] text-sm pt-[7px]">
          <input
            type="checkbox"
            checked={checkedBoxes.Insurance}
            onChange={() => handleCheckboxChange("Insurance")}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <p>
            <span className="font-[600] text-[15px]">Insurance </span>{" "}
            <span className="text-[.824em] text-[#999]">
              Enter the total value of your shipment to add coverage by
              InsureShield
            </span>{" "}
            <span className="text-blue-500 text-[.824em] underline">
              View Pricing, Excluded Items, and Terms
            </span>
          </p>
        </label>
        {checkedBoxes.Insurance && (
          <div className="pt-3">
            <Input placeholder="Declared Package Value ($)" />
          </div>
        )}
      </div>
      <div className="mb-[34px]">
        <label className="flex space-x-[5px] text-sm pt-[7px]">
          <FiPlusCircle
            onClick={() => handleCheckboxChange("ExtraServices")}
            size={20}
            className={`text-[#999] ml-[-3px] cursor-pointer ${ checkedBoxes.ExtraServices ? "hidden" : ""
              }`}
          />
          <FiMinusCircle
            onClick={() => handleCheckboxChange("ExtraServices")}
            size={20}
            className={`text-[#999] ml-[-3px] cursor-pointer ${ checkedBoxes.ExtraServices ? "" : "hidden"
              }`}
          />

          <p>
            <span className="font-[600] text-[15px]">Extra Services </span>{" "}
            <span className="text-[.824em] text-[#999]">
              {checkedBoxes.SignatureConfirmation
                ? "Signature Confirmation,"
                : ""}{" "}
              {checkedBoxes.QualifiesForMediaMail
                ? "Qualifies for Media Mail,"
                : ""}{" "}
              {checkedBoxes.IrregularPackage ? "Irregular Package," : ""}{" "}
              {checkedBoxes.SignatureConfirmation ||
                checkedBoxes.QualifiesForMediaMail ||
                checkedBoxes.IrregularPackage
                ? ""
                : "No extra services"}{" "}
              activated
            </span>
          </p>
        </label>
        {checkedBoxes.ExtraServices && (
          <div className="p-[.2em_1em_.2em_1.5em] bg-[#f5f5f5] border-[2px] border-[#ccc] rounded-[5px] mt-[10px]">
            <div className="my-[.5em]">
              <div className="flex items-center min-h-[27px] py-[7px] space-x-[5px] mb-[10px]">
                <input
                  type="checkbox"
                  checked={checkedBoxes.SignatureConfirmation}
                  onChange={() => handleCheckboxChange("SignatureConfirmation")}
                  className="w-[15px] h-[15px]"
                />
                <p>
                  <span className="font-[600] text-[15px]">
                    Signature Confirmation{" "}
                  </span>
                </p>
              </div>
            </div>
            {checkedBoxes.SignatureConfirmation && (
              <div
                className={`${ checkedBoxes.SignatureConfirmationOption
                  ? "border-2 border-[#00a9ff] overflow-hidden"
                  : ""
                  } rounded-[5px] mt-[6.8px]`}
              >
                <div
                  onClick={() =>
                    handleCheckboxChange("SignatureConfirmationOption")
                  }
                  className={`w-full h-[66.89px] flex items-center justify-between p-[10px] ${ checkedBoxes.SignatureConfirmationOption
                    ? `hover:bg-[#d9f2ff] border-b-[1px] border-[#ccc] hover:border-[#00a9ff]`
                    : "border-2 border-gray-300 bg-linear-to-b from-[#fff] to-[#ebebebeb] rounded-[4px]"
                    } cursor-pointer`}
                >
                  <div className="">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      Signature Confirmation
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      Signature required for delivery
                    </p>
                  </div>
                  <FaCaretDown className="text-[1.3em] text-[#000]" />
                </div>
                <div
                  className={`w-full h-[66.89px] flex items-center justify-between p-[10px] ${ checkedBoxes.SignatureConfirmationOption
                    ? "hover:bg-[#d9f2ff] border-t-[1px] border-[#ccc] hover:border-[#00a9ff]"
                    : "hidden"
                    } cursor-pointer`}
                >
                  <div className="">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      Adult Signature
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      21+ age verification required for delivery
                    </p>
                  </div>
                  {/* <FaCaretDown className="text-[1.3em] text-[#000]" /> */}
                </div>
              </div>
            )}
            <div className="my-[.5em]">
              <div className="flex items-center min-h-[27px] py-[7px] space-x-[5px] mb-[10px]">
                <input
                  type="checkbox"
                  disabled
                  checked={checkedBoxes.ReturnLabels}
                  onChange={() => handleCheckboxChange("ReturnLabels")}
                  className="w-[15px] h-[15px]"
                />
                <p className="opacity-[0.6]">
                  <span className="font-[600] text-[15px]">Return Labels </span>
                  <span className="text-[.824em] text-[#999]">
                    To enable Return Labels,{" "}
                  </span>
                  <span className="text-blue-500 text-[.824em] underline">
                    just let us know.
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[.5em]">
              <div className="flex items-center min-h-[27px] py-[7px] space-x-[5px] mb-[10px]">
                <input
                  type="checkbox"
                  checked={checkedBoxes.QualifiesForMediaMail}
                  onChange={() => handleCheckboxChange("QualifiesForMediaMail")}
                  className="w-[15px] h-[15px]"
                />
                <p>
                  <span className="font-[600] text-[15px]">
                    Qualifies for Media Mail{" "}
                  </span>
                  <span className="text-[.824em] text-[#999]">
                    Educational material only: books, music, or films (other
                    products or any advertising prohibited)
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[.5em]">
              <div className="flex items-center min-h-[27px] py-[7px] space-x-[5px] mb-[10px]">
                <input
                  type="checkbox"
                  checked={checkedBoxes.IrregularPackage}
                  onChange={() => handleCheckboxChange("IrregularPackage")}
                  className="w-[15px] h-[15px]"
                />
                <p>
                  <span className="font-[600] text-[15px]">
                    Irregular Package{" "}
                  </span>
                  <span className="text-[.824em] text-[#999]">
                    For unusual package types like tubes, wooden crates, tires,
                    etc.{" "}
                  </span>
                  <span className="text-blue-500 text-[.824em] underline">
                    Learn More
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="my-[1em]">
        <label className="flex space-x-[5px] text-sm pt-[7px]">
          <input
            type="checkbox"
            checked={checkedBoxes.Hazardous}
            onChange={() => handleCheckboxChange("Hazardous")}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <p>
            <span className="font-[600] text-[15px]">Hazardous Materials </span>{" "}
            <span className="text-[.824em] text-[#999]">
              Perfume, nail polish, hair spray, dry ice, lithium batteries,
              firearms, lighters, fuels, etc.
            </span>{" "}
            <span className="text-blue-500 text-[.824em] underline">
              Learn how to ship Hazardous Materials
            </span>
          </p>
        </label>
        {checkedBoxes.Hazardous && (
          <div className="mt-3 text-[16px] bg-linear-to-b from-[#f2dede] to-[#e7c3c3] border-[1px] border-[#dca7a7] text-shadow-[0_1px_0px_#ffffff33] font-[600] text-[#a94442] mb-[20px] p-[15px] rounded-[4px]">
            By using Pirate Ship, you certify that your shipment does not
            contain any undeclared{" "}
            <span className="text-[#00a9ff]">hazardous materials</span> or any
            matter{" "}
            <span className="text-[#00a9ff]">
              prohibited by law or postal regulation.
            </span>
          </div>
        )}
      </div>
      <div className="my-[1em]">
        <label className="flex space-x-[5px] text-sm py-[7px]">
          <input
            type="checkbox"
            checked={checkedBoxes.CustomsForm}
            onChange={() => handleCheckboxChange("CustomsForm")}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <p>
            <span className="font-[600] text-[15px]">Customs Form </span>{" "}
            <span className="text-[.824em] text-[#999]">
              Required for International, Military APO/FPO, and U.S. Territories
            </span>{" "}
          </p>
        </label>
        {checkedBoxes.CustomsForm && (
          <div className="mt-[1em]">
            <Input placeholder="Sign Customs Form As" value={"M Jibon"} />
            <div className="mt-[1.389em]">
              <h1 className="text-[1em] font-[600] text-[#333] pt-[7px]">
                Package Content Type
              </h1>
              <div
                className={`${ checkedBoxes.PackageContentType
                  ? "border-2 border-[#00a9ff] overflow-hidden"
                  : ""
                  } rounded-[5px] mt-[6.8px]`}
              >
                <div
                  onClick={() => handleCheckboxChange("PackageContentType")}
                  className={`w-full flex items-center justify-between p-[10px] ${ checkedBoxes.PackageContentType
                    ? `hover:bg-[#d9f2ff] border-b-[1px] border-[#ccc] hover:border-[#00a9ff]`
                    : "border-2 border-gray-300 bg-linear-to-b from-[#fff] to-[#ebebebeb] rounded-[4px]"
                    } cursor-pointer`}
                >
                  <div className="">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      Merchandise
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      Products that were purchased by your recipient; they will
                      probably have to show a receipt proving the declared value
                      is correct to receive the package.
                    </p>
                  </div>
                  <FaCaretDown className="text-[1.3em] text-[#000]" />
                </div>
                <div
                  className={`w-full flex items-center justify-between p-[10px] ${ checkedBoxes.PackageContentType
                    ? "hover:bg-[#d9f2ff] border-t-[1px] border-[#ccc] hover:border-[#00a9ff]"
                    : "hidden"
                    } cursor-pointer`}
                >
                  <div className="">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      Documents
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      For contracts and other printed documents only.
                    </p>
                  </div>
                  {/* <FaCaretDown className="text-[1.3em] text-[#000]" /> */}
                </div>
                <div
                  className={`w-full flex items-center justify-between p-[10px] ${ checkedBoxes.PackageContentType
                    ? "hover:bg-[#d9f2ff] border-t-[1px] border-[#ccc] hover:border-[#00a9ff]"
                    : "hidden"
                    } cursor-pointer`}
                >
                  <div className="">
                    <h1 className="text-[1em] font-[400] text-[#030303]">
                      Gift
                    </h1>
                    <p className="text-[.824em] font-[400] text-[#999] mt-[3px]">
                      Only choose this option if it’s actually a gift… it will
                      not reduce the chance of your recipient having to pay
                      import duties!
                    </p>
                  </div>
                  {/* <FaCaretDown className="text-[1.3em] text-[#000]" /> */}
                </div>
              </div>
            </div>
            <div className="mt-[1.389em] flex md:flex-row flex-col md:justify-between justify-center gap-[11.75px] ">
              <div className="md:w-[91.7777777%] w-full">
                <h1 className="text-[1em] font-[600] text-[#333] py-[7px]">
                  Customs Line Item #1{" "}
                  <span className="text-[.824em] text-[#00a9ff] cursor-pointer">
                    Add Line Item
                  </span>
                </h1>
                <Input placeholder="Describe what you&apos;re shipping" />
                <div className="mt-[1.389em] flex items-center gap-[24px]">
                  <Input placeholder="Quantity" />
                  <Input placeholder="Total Value in $" />
                </div>

                <div className="mt-[1.389em] flex items-center gap-[24px]">
                  <Input placeholder="Total Weight lbs" />
                  <div className="lg:w-[52px] w-fit flex justify-center items-center text-[22px] text-[#999]">
                    +
                  </div>
                  <Input placeholder="Total Weight Oz" />
                </div>

                <div className="mt-[1.389em] flex lg:flex-row flex-col items-center gap-[24px]">
                  <div className="w-full relative">
                    <Input placeholder="Harmonization #" />
                    <p className="text-center text-[.824em] text-[#999] p-[.3em]">
                      Required for Certain Countries -{" "}
                      <span className="text-[.824em] text-[#00a9ff]">
                        Learn more
                      </span>
                    </p>
                    <button className="h-[50px] p-[.7em] flex text-[1em] font-[600] text-[#fff] bg-[#00a9ff] border-[2px] border-[#0086ff] rounded-[0_5px_5px_0] absolute right-0 top-0 cursor-pointer">
                      Search #&apos;s
                    </button>
                  </div>
                  <div className="w-full">
                    <select className=" appearance-none border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-[13px]  rounded w-full bg-linear-to-b from-[#fff] to-[#ebebeb] text-md">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                    <p className="text-center text-[.824em] text-[#999] p-[.3em]">
                      Item(s) Origin
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[8.33333333%] w-full h-[51px] md:mt-[2.28em] mt-0 flex justify-center items-center">
                <RiDeleteBin6Line
                  size={25}
                  className="text-[#999] w-[25px] cursor-pointer"
                />
              </div>
            </div>
            <h1 className="text-[1em] font-[600] text-[#333] py-[7px] mt-[1.389em]">
              International Tax IDs
            </h1>
            <div className="flex lg:flex-row flex-col items-center gap-[24px]">
              <div className="w-full">
                <Input placeholder="Sender Tax ID" />
                <p className="text-center text-[.824em] text-[#999] p-[.3em]">
                  Optional: IOSS/HMRC/VOEC -{" "}
                  <span className="text-[.824em] text-[#00a9ff]">
                    Learn more
                  </span>
                </p>
              </div>
              <div className="w-full">
                <Input placeholder="Recipient Tax ID" />
                <p className="text-center text-[.824em] text-[#999] p-[.3em]">
                  Mexico/Brazil/EU (EORI) -{" "}
                  <span className="text-[.824em] text-[#00a9ff]">
                    Learn more
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[1em] mb-[1.389em]">
        <label className="flex space-x-[5px] text-sm pt-[7px]">
          <input
            type="checkbox"
            checked={checkedBoxes.SavePackage}
            onChange={() => handleCheckboxChange("SavePackage")}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <p>
            <span className="font-[600] text-[15px]">Save Package </span>{" "}
            <span className="text-[.824em] text-[#999]">
              Save your settings for repeated use
            </span>{" "}
          </p>
        </label>
        {checkedBoxes.SavePackage && (
          <div className="  pt-3">
            <Input placeholder="Enter a nickname for your Saved Package" />
          </div>
        )}
      </div>

      <div className="w-full flex justify-end mt-[.694em] mb-[15rem]">
        {/* <div className="w-full flex justify-end mt-[.694em] mb-[1.389em]"> */}
        <button className="lg:w-fit w-full lg:h-fit h-[83px] lg:text-[1.777em] text-[1.1em] lg:p-[25px_100px] p-[0px] text-white rounded-[10px] font-[700] bg-[#2ca200] border-[3px] border-[#008e00] transition-colors">
          Get Rates
        </button>
      </div>

    </div>
  );
};

const Input = ({
  placeholder,
  className = "",
  value,
  onChange,
  type = "text",
  name,
}) =>
{
  const [ isFocused, setIsFocused ] = useState(false);

  const showLabelUp = isFocused || value;

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`peer border-2 border-gray-300 px-4 pt-5 pb-2 rounded w-full text-sm placeholder-transparent focus:outline-none focus:border-blue-500 ${ className }`}
      />
      <label
        htmlFor={name}
        className={`
            absolute left-4 text-gray-500 transition-all duration-200 bg-white px-1
            ${ showLabelUp ? "text-xs -top-2" : "top-3 text-sm" }
          `}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default ShippingForm;

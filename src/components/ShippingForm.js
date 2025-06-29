"use client"
import { useState } from "react";

const ShippingForm = () =>
{
    const [ checkedBoxes, setCheckedBoxes ] = useState({
        rubberStamp: false,
    });

    const handleCheckboxChange = (key) =>
    {
        setCheckedBoxes((prev) => ({
            ...prev,
            [ key ]: !prev[ key ],
        }));
    };
    return (
        <div className="flex-1 sm:p-[47px] p-[30px]">
            <h1 className="text-[1.777em] font-[700] mb-8">Create a Shipping Label</h1>

            <section className="mb-8">
                <h2 className="font-semibold text-lg mb-2">Ship To <span className="text-blue-500 cursor-pointer">Paste Address</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
                            <select className=" appearance-none border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-[13px]  rounded w-full bg-gray-100 text-md">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>

                </div>

            </section>

            <div className="mb-6">
                <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" checked={checkedBoxes.rubberStamp}
                        onChange={() => handleCheckboxChange("rubberStamp")} />
                    <p><span className="font-bold text-lg">Rubber Stamps</span> <span className="text-md text-gray-500">Print extra information on the label </span> <span className="text-blue-500 underline">Learn more</span></p>
                </label>
                {checkedBoxes.rubberStamp && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-3">
                        <Input placeholder="Rubber Stamp / Custom Reference 1" />
                        <Input placeholder="Rubber Stamp / Custom Reference 2" />
                    </div>
                )}

            </div>
            <div>
                <h1>Ship From</h1>
                
</div>
            
            {/* Ship From & Packaging এরপর */}
        </div>
    );
};


const Input = ({ placeholder, className = "", value, onChange, type = "text", name }) =>
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

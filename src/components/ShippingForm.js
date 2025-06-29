const ShippingForm = () =>
{
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
                            <select className="  border-2 border-gray-300 px-4 py-[13px]  rounded w-full text-sm">
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
                    <input type="checkbox" />
                    <span>Rubber Stamps <span className="text-blue-500 underline">Learn more</span></span>
                </label>
            </div>

            {/* Ship From & Packaging এরপর */}
        </div>
    );
};

const Input = ({ placeholder, className }) => (
    <input
        type="text"
        placeholder={placeholder}
        className={`border-2 border-gray-300 px-4 py-[13px] rounded w-full text-sm ${ className }`}
    />
);

export default ShippingForm;

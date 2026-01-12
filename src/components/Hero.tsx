
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section>
            <div className="mx-auto bg-white px-6 py-20">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    <div>
                        <h1 className="text-5xl font-extrabold uppercase leading-tight text-black">
                            New <br /> Collection
                        </h1>

                        <p className="mt-4 text-sm uppercase tracking-widest text-gray-600">
                            Summer <br /> 2024
                        </p>
                        <div className="flex items-center gap-4">


                            <button className="group mt-10 inline-flex items-center gap-4  border border-gray-300 px-6 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white">
                                Go To Shop
                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />
                            </button>

                            <div className="mt-10 flex  gap-3">
                                <button className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">
                                    <ChevronLeft size={16} />
                                </button>
                                <button className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                    </div>
                    
                    <div className="flex items-center justify-end gap-6">
                        <div className="">
                            <img
                                src="/image.png"
                                alt="Main product"
                                className="h-105 w-70 object-cover"
                            />
                        </div>

                      
                        <div className="">
                            <img
                                src="/image copy.png"
                                alt="Secondary product"
                                className="h-105 w-70 object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

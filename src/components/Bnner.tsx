

export default function Banner() {
    return (
        <>
            <section className="bg-[#f6f6f4] md:py-24 px-6">
             
                <div className="max-w-4xl mx-auto text-center md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-wide uppercase">
                        Our Approach to Fashion Design
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed  max-w-2xl mx-auto">
                        At Elegant Vogue, we blend creativity with craftsmanship to create
                        fashion that transcends trends and stands the test of time. Each
                        design is meticulously crafted, ensuring the highest quality and
                        exquisite finish.
                    </p>
                </div>

               
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-end">
                  
                    <div className="bg-white p-3 shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
                            alt="Fashion Model"
                            className="w-full h-95 object-cover"
                        />
                    </div>

                    <div className="bg-white p-3 shadow-lg translate-y-6 hover:scale-105 transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                            alt="Street Fashion"
                            className="w-full h-105 object-cover"
                        />
                    </div>

                   
                    <div className="bg-white p-3 shadow-lg -translate-y-6 hover:scale-105 transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1542060748-10c28b62716f"
                            alt="Minimal Outfit"
                            className="w-full h-100 object-cover"
                        />
                    </div>

                   
                    <div className="bg-white p-3 shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                            alt="Product Flatlay"
                            className="w-full h-90 object-cover"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
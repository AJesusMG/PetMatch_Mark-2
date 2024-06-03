import React from "react";

export default function NewsLetter() {
    return (
        <div className="mx-auto max-w-full px-0 lg:px-0">
            <div className="mx-auto grid max-w-full grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-full lg:max-w-lg">
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Regístrate para recibir nuestro noticias y mantente al tanto de las últimas noticias, y de las mascotas que buscan un hogar. ¡No te pierdas nada y únete a nuestra comunidad!
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Correo electrónico
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-2 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            placeholder="Ingresa tu correo electrónico"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD893]"
                        >
                            Suscribirse
                        </button>
                    </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                            <span className="material-symbols-outlined">
                                calendar_month
                            </span>
                        </div>
                        <dt className="mt-4 font-semibold text-black">Artículos semanales</dt>
                        <dd className="mt-2 leading-7 text-gray-500">
                            Descubre mascotas en adopción, con información sobre ellas. Conecta con otros amantes de los animales para recibir consejos útiles sobre cuidado.
                        </dd>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                            <span className="material-symbols-outlined">
                                front_hand
                            </span>
                        </div>
                        <dt className="mt-4 font-semibold text-black">Sin spam</dt>
                        <dd className="mt-2 leading-7 text-gray-500">
                            Evita el spam en tu bandeja de entrada. Con nuestras noticias, recibirás solo información relevante y útil. ¡Suscríbete y mantente informado.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}

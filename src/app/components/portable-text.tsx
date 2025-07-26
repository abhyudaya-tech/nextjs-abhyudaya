import { urlFor } from "@/sanity/lib/image";
import { PortableTextComponents } from "next-sanity";


export const portableTextComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
        normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-red-700 pl-4 italic my-4">{children}</blockquote>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <figure className="my-8">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || ' '}
                        className="rounded-lg mx-auto"
                        loading="lazy"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-2">{children}</li>,
        number: ({ children }) => <li className="mb-2">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ value, children }) => (
            <a href={value?.href} className="text-red-600 underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
};
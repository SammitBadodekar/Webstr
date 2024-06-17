"use client"
import Link from 'next/link'
import React from 'react'

type LogoProps = {
    isLink: boolean,
    href?: string
}

const Logo = ({ isLink, href }: LogoProps) => {

    return (
        <div className="relative">
            {isLink ? (
                <Link
                    href={href!}
                    className="font-logo w-fit text-3xl font-black md:text-5xl "
                >
                    Webstr
                </Link>
            ) : (
                <h1 className="font-logo w-full text-center text-5xl font-black">
                    Webstr
                </h1>
            )}

            <div className="absolute -top-2 -right-12 rounded-2xl border-[1px] border-primary text-[0.75rem] font-semibold p-1 px-2">
                Beta
            </div>
        </div>
    );
}

export default Logo
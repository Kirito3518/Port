'use client';

import Link from "next/link";
import { Button } from "antd";
import { Icon } from '@iconify/react';

export const Social = () => {
    const iconStyle = {
        height: "25",
        width: "25",
        style: {
            color: "#161616"
        }
    }
    return (
        <>
            <div className="mt-5 flex flex-row max-lg:justify-center items-center h-10 w-full gap-4">
                <Link href="https://github.com/Kirito3518" target="_blank"><Icon icon="bi:github" width={iconStyle.width} height={iconStyle.height} style={iconStyle.style} /></Link>
                <Link href="https://www.instagram.com/ctrl_s_otb/" target="_blank"><Icon icon="bi:instagram" width={iconStyle.width} height={iconStyle.height} style={iconStyle.style} /></Link>
                <Link href="https://www.facebook.com/bancha.kirito" target="_blank"><Icon icon="bi:facebook" width={iconStyle.width} height={iconStyle.height} style={iconStyle.style} /></Link>
            </div>
        </>
    );
}
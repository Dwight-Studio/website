import "./round-button.css"
import Link from 'next/link';
import React from "react";

export default function RoundButton({link, text, leftGraphic, rightGraphic}: {link: string, text?: string, leftGraphic?: React.ReactNode, rightGraphic?: React.ReactNode}) {
    return (
        <Link href={link}>
            <div className="round-button">
                {leftGraphic}
                {text}
                {rightGraphic}
            </div>
        </Link>
    )
}
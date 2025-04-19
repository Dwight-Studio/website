"use client"

import React from "react";
import {useRouter} from "next/navigation";

export default function NotFound() {
    useRouter().push("/");

    return (
        <></>
    )
}
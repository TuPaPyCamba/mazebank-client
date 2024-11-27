import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatAmount(amount){
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 3,
    })

    return formatter.format(amount)
}
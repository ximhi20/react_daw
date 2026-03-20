import data from "@/assets/data/nav.json";
import Link from "next/link";

export function navbar(){
    return (
        <header>
            <nav>
                <ul>
                    {data.map((Link) => (<li><Link href={Link.href}>{Link.label}</Link></li>))}
                </ul>
            </nav>
        </header>
    )
}
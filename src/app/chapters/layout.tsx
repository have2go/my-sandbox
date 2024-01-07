import type { Metadata } from "next";
import "../globals.css";
import MenuBar from "@/components/MenuBar";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function ChaptersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <MenuBar />
            {children}
        </section>
    );
}
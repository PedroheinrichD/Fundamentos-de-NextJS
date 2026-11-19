import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog tal",
    description: "veja agora este blog",
    icons: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmgjAIDMH8yo-HN1bSInh9TBaG9wFWCoP85EUYWwsXQ&s=10",
}

export default function RootLayout({children}: LayoutProps<"/">) {
    return(
        <html
            lang="en"
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    )
}
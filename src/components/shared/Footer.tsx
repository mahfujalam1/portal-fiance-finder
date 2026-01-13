"use client"

export function Footer() {
    return (
        <footer
            className="fixed bottom-0 left-0 right-0 h-screen flex items-center justify-center overflow-hidden -z-10"
            style={{
                backgroundImage: "url(/footer-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            <div className="relative z-10 text-white text-center">
                <p>&copy; 2026 Fiancé Finder. All rights reserved.</p>
            </div>
        </footer>
    )
}

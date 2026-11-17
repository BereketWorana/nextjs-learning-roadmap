import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="big_green-800 test-width px-8 py-4 flex items-center justify-between">
            <h1 className="test-x1 font-bold">Ninja Academy</h1>

            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link  href="/announcements">Announcements</Link>
            </div>
        </nav>
    );
}

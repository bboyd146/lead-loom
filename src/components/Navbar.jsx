import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/features", label: "Features" },
        { to: "/pricing", label: "Pricing" },
        { to: "/about", label: "About" },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <svg
                                className="text-primary h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                LeadLoom
                            </span>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`${
                                        location.pathname === link.to
                                            ? "border-primary text-gray-900"
                                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                        <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md text-sm font-medium" onClick={() => window.location.href = 'https://calendly.com/brad-dev25/new-meeting'}>
                            Get Started
                        </button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

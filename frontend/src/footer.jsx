import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="ml-[10%] w-[90vw] min-h-screen flex items-center justify-center bg-gray-100 p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Branding and Newsletter */}
                <div>
                <div className="flex items-center space-x-2">
                    <div className="text-purple-500 text-2xl font-bold">⯈</div>
                    <span className="font-bold text-gray-900">Online Register</span>
                </div>
                <p className="mt-4 text-gray-600">
                    Stay in the loop and sign up for the Online Register newsletter:
                </p>
                </div>

                {/* Company Links */}
                <div>
                <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
                </div>

                {/* Documentation Links */}
                <div>
                <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                </div>

                {/* Social Links */}
                <div>
                <h4 className="font-semibold text-gray-900 mb-2">Social</h4>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
                </div>
            </div>
            </div>
            {/* Footer Bottom */}
            {/* <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs"> */}
            <div className="ml-[10%] w-[90vw] flex items-center justify-center bg-gray-100">
                <p>© Online Reg Inc. All Rights Reserved 2025</p>
                <a href="#" className="mt-2 md:mt-0 hover:underline">Terms & Conditions</a>
            </div>
        </footer>



        );
    }
}

export default Footer;
import { useState } from "react";

function Login() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submitForm(e) {
        e.preventDefault()
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (!name.trim()) {
            alert("Name is required")
            return
        }
        if (!regex.test(email)) {
            alert("Invalid Email")
            return
        }
        if (!passwordregex.test(password)) {
            alert("Password incorrect")
            return
        }

        alert("Form submitted successfully")
    }

    return (
        <div className="min-h-screen bg-[#f4f1ee] flex justify-center items-center">

            <form 
                onSubmit={submitForm}
                className="bg-white p-10 rounded-2xl shadow-md w-[350px]"
            >

                <h2 className="text-2xl font-semibold text-center text-[#5a3e36] mb-8">
                    Login
                </h2>

                {/* Name */}
                <div className="mb-5">
                    <label className="block text-sm text-gray-600 mb-1">
                        Name
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a5c50]"
                    />
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label className="block text-sm text-gray-600 mb-1">
                        Email
                    </label>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a5c50]"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-1">
                        Password
                    </label>
                    <input 
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a5c50]"
                    />
                </div>

                {/* Button */}
                <button 
                    type="submit"
                    className="w-full bg-[#7a5c50] text-white py-2 rounded-full hover:bg-[#5a3e36] transition shadow-sm hover:shadow-md"
                >
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login
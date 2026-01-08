import { Link } from "react-router-dom";
import { useState } from "react";

import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const isError = false;

	return (
		<div className="max-w-7xl bg-black mx-auto flex h-screen overflow-hidden">
			
			{/* LEFT SIDE — SVG (50%) */}
			<div className="w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
				<XSvg className="h-full max-h-[80%] w-auto fill-white" />
			</div>

			{/* RIGHT SIDE — FORM (50%) */}
			<div className="w-1/2 flex flex-col justify-center items-center px-10">
				<form
					className="w-full max-w-md flex gap-4 flex-col"
					onSubmit={handleSubmit}
				>
					{/* Mobile SVG */}
					<XSvg className="w-24 lg:hidden fill-white" />

					<h1 className="text-4xl font-extrabold text-white">
						Join today.
					</h1>

					<label className="input input-bordered rounded flex items-center gap-2">
						<MdOutlineMail />
						<input
							type="email"
							className="grow"
							placeholder="Email"
							name="email"
							onChange={handleInputChange}
							value={formData.email}
						/>
					</label>

					<div className="flex gap-4">
						<label className="input input-bordered rounded flex items-center gap-2 flex-1">
							<FaUser />
							<input
								type="text"
								className="grow"
								placeholder="Username"
								name="username"
								onChange={handleInputChange}
								value={formData.username}
							/>
						</label>

						<label className="input input-bordered rounded flex items-center gap-2 flex-1">
							<MdDriveFileRenameOutline />
							<input
								type="text"
								className="grow"
								placeholder="Full Name"
								name="fullName"
								onChange={handleInputChange}
								value={formData.fullName}
							/>
						</label>
					</div>

					<label className="input input-bordered rounded flex items-center gap-2">
						<MdPassword />
						<input
							type="password"
							className="grow"
							placeholder="Password"
							name="password"
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>

					<button className="btn rounded-full btn-primary text-white">
						Sign up
					</button>

					{isError && (
						<p className="text-red-500">Something went wrong</p>
					)}
				</form>

				<div className="w-full max-w-md flex flex-col gap-2 mt-6">
					<p className="text-white text-lg">
						Already have an account?
					</p>
					<Link to="/login">
						<button className="btn rounded-full btn-outline btn-primary text-white w-full">
							Sign in
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;

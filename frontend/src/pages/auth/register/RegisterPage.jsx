import { Link } from "react-router-dom";
import { useState } from "react";

import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: async({email,username,fullName,password}) => {
			try{
				const res = await fetch("/api/auth/signUp", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({email,username,fullName,password}),
				});

				const data = await res.json();
				if(!res.ok) throw new Error(data.error || "Failed to create account");
				console.log(data);
				return data;
			}catch(error){
				console.error("Error during registration:", error);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Account created successfully");
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		mutate(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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
						{isPending ? "Registering..." : "Sign up"}
					</button>

					{isError && (
						<p className="text-red-500">{error.message}</p>
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

import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content flex flex-col justify-center">
        <div className="text-center  lg:pr-10">
          <h1 className="text-5xl  font-bold">Join PawMart!</h1>
          <p className="py-6">
            Create an account to start listing pets for adoption, sell supplies,
            or find your new best friend. Join our community of pet lovers
            today!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                value=""
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value=""
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered"
                value=""
              />
            </div>

            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
            <div className="divider">OR</div>
            <button type="button" className="btn btn-outline">
              Sign up with Google
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link className="link link-primary">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

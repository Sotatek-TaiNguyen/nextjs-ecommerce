import Link from "next/link";
import Head from "next/head";
const Signin = () => {
  return (
    <div>
      <Head>
        <title> Sign In</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Login
        </button>
        <p className="my-2">
          You dont have an account
          <Link href="/register">
            <a> Register</a>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signin;

export default function Login({ handleLogIn }) {
    return (<>
        <h1>Login</h1>
        <button
            className="btn btn-primary"
            onClick={handleLogIn}
        >
            Log in
        </button>
    </>)
}
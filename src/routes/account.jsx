export default function Account() {
    return (
        <div className="font-mukta flex flex-col items-center w-4/5 text-gray-700">
            <div className="text text-lg font-bold my-4">No need to create an account.</div>
            <div className="my-4">This app uses local storage to store your information.</div>
            <div>You don't need to provide your email or remember a password.</div>
            <br></br>
            <div>But! You need to use the same browser on the same device to access your information.</div>
            <br></br>
            <div>Delete saved data from just this site by clicking the button below:</div>
            <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow my-5">clear local storage</button>
        </div>
    )
}
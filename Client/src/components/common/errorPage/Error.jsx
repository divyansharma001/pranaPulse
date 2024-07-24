import { useLocation } from "react-router";

const Error = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="absolute top-[30%] max-w-lg text-center px-4">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Page Not Found
        </h1>
        <p className="text-gray-600">
            The requested URL <strong className="break-all">{pathname}</strong> was not found on this server.
        </p>
        <p className="text-gray-600">Please check the URL or go back to the <a href="/" className="text-blue-600 hover:underline">homepage</a>.</p>
    </div>
</div>
  )
}

export default Error
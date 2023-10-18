import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="min-h-screen pt-28">
            <div className="w-96 mx-auto md:w-3/4 pt-20 h-80 bg-slate-200 border-y border-black shadow-2xl">
                <h2 className="text-4xl text-center mb-2 font-bold">Ops!</h2>
                <div className="text-2xl text-center space-y-2">
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
import { Outlet, useNavigate } from 'react-router-dom'
import config from '../../config'
import { ToastContainer } from 'react-toastify'

export const MainLayout = () => {
    const navigate = useNavigate()
    return (
        <div className="felx flex-col w-full min-w-72 min-h-screen bg-gray-100 p-1">
            <div className="flex bg-indigo-600 p-3 xl:p-0 justify-end">
                <div className="flex bg-indigo-600 xl:p-5">
                    <button
                        className="text-white font-bold bg-indigo-400 p-2 rounded-lg hover:bg-indigo-500"
                        onClick={() => {
                            localStorage.removeItem(config.TOKEN_KEY)
                            navigate('/login')
                        }}
                    >
                        Salir
                    </button>
                </div>
            </div>
            <div className="flex flex-1 h-full m-auto max-w-7xl rounded-sm bg-white xl:p-5">
                <Outlet />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

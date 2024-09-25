import { useCallback, useState } from "react"
import { UserRepository } from "../repositoryes/user"
import config from "../config"
import { redirect } from "react-router-dom"

const useLogin = () => {
    const [info, setInfo] = useState('')

    const loginHandler = useCallback((email: string, password: string) => {
        const service = new UserRepository()
        service
            .login(email, password)
            .then((data) => {
                if (data.error) {
                    setInfo(data.msg)
                    setTimeout(() => setInfo(''), 2000)
                } else {
                    localStorage.setItem(config.TOKEN_KEY, data.data!.token)
                    redirect('/')
                }
            })
            .catch((e) => {
                setInfo('Error')
                setTimeout(() => setInfo(''), 2000)
            })
    }, [])

    return {
        info,
        loginHandler
    }
}

export default useLogin
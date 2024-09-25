import { Navigate } from 'react-router-dom'
import config from '../config'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AuthMiddleware = ({ children }: Props) => {
    const token = localStorage.getItem(config.TOKEN_KEY) ? true : false
    return token ? <>{children}</> : <Navigate to="/login" />
}

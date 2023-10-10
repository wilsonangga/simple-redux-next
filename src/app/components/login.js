"use client"
import { useState } from "react"
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/redux/store"

export default function Login() {
    const [username, setUsername] = useState("")

    const dispatch = useDispatch()
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

    const onClickLogin = () => {
        dispatch(logIn(username))
    }

    const onClickToggle = () => {
        dispatch(toggleModerator())
    }

    const onClickLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className="border" />
            <br />
            <button onClick={onClickLogin}>Log In</button>
            <br />
            <button onClick={onClickLogOut}>Log Out</button>
            <br />
            {isAuth &&
                <button onClick={onClickToggle}>Toggle Moderator</button>}
        </div>
    )
}
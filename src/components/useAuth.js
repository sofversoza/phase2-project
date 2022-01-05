

import React, {useState, useEffect} from 'react'
import axios from "axios"

function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

// we use axios to call our api instead of a traditional fetch, both work
    useEffect(() => {
        axios.post('http://localhost:3001/LandingPage', {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
// This removes all the extra code from our URL, so it looks cleaner
            window.history.pushState({}, null, '/')
// this catch will redirect the user to login page if error occurs by token expiring
        }).catch(() => {
            window.location = "/"
        })
    }, [code])


// this allows us to refresh token automatically before it expires
    useEffect(() => {
        if(refreshToken || !expiresIn) return
        const interval = setInterval(() => {
        axios.post('http://localhost:3001/refresh', {
          refreshToken,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
// Right before our token expires we want to make sure we use refresh token Whenever our refresh token changes or whenever our expiresIn changes
        }).catch(() => {
            window.location = "/"
         })
        }, (expiresIn -60) * 1000)

        return () => clearInterval(interval)
    },  [refreshToken, expiresIn])

    return (
        accessToken
    )
}

export default useAuth

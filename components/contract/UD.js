import React, { useState } from "react"
import UAuth from "@uauth/js"
import { Button } from "react-bootstrap"

const uauth = new UAuth({
    
        clientID: "a177ab5c-b4f8-497b-a066-531698eef4b0",
        redirectUri: "https://drain-od8n4feev-ayush035.vercel.app/"
        
      
})

function UD() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    async function logOut() {
        uauth.logout()
        logout()
    }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
            logOut()
        }
    }

    return (
        <>
            <Button onClick={log}>
                {Uauth != null ? Uauth["sub"] : "Login with UNSD"}
            </Button>
        </>
    )
}

export default UD
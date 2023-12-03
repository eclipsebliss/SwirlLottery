import React from 'react'

import {WagmiConfig } from 'wagmi'

import config from './config/config'

import Main from './components/Main'
import {Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;


export default function Connector() {
    return (
        <WagmiConfig config={config}>
              <Main/>
        </WagmiConfig>
    )
}
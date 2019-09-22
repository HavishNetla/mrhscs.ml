import React from 'react'
import App from 'next/app'
import Nav from '../components/Nav'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <div
          style={{
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            left: '0',
            zIndex: '1',
          }}
        >
          <div style={{ width: '100vw' }}>
            <Nav />
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    )
  }
}

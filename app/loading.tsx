import React from 'react'

const loading = () => {
  return (
    <main className="w-full h-svh flex items-center justify-center">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <h1 className="text-4xl font-bold text-white animate-pulse">cliko</h1>
        </div>
    </main>
  )
}

export default loading
import React, { Children, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const GuestContext = createContext()

export const GuestProvider = ({ children }) => {
  const [companions, setCompanions] = useState([])
  const [originCompanions, setOriginCompanions] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  const api = 'http://localhost:3000/api/'

  const getCompanion = async (id_guest) => {
    try {
      const res = await fetch(`${api}companions/${id_guest}`)
      const data = await res.json()
      console.log(data)
      setCompanions(data)
      setOriginCompanions(data)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar convidados', error)
      navigate("/error")
    }
  }

  const updateCompanion = async () => {
    const changed = companions.filter((comp) => {
      const origin = originCompanions.find((o) => o.id === comp.id)
      return origin && origin.status !== comp.status
    })

    if (changed.length === 0) return console.log('Nenhuma alteração')

    try {
      const res = await fetch(`${api}companions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changed),
      })

      const result = await res.json()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GuestContext.Provider
      value={{
        companions,
        getCompanion,
        setCompanions,
        updateCompanion,
        loading,
      }}
    >
      {children}
    </GuestContext.Provider>
  )
}

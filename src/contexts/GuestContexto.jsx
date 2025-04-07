import React, { Children, createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const GuestContext = createContext()

export const GuestProvider = ({ children }) => {
  const [companions, setCompanions] = useState([])
  const [originCompanions, setOriginCompanions] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  const api = 'https://api-birthday-vic.vercel.app/api/'

  const getCompanion = async (id_guest) => {
    try {
      const res = await fetch(`${api}companions/guest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id_guest })
      });
      const data = await res.json();

      console.log(data.length())
      
      if (data.length() === 0) {
        navigate("/error");
        return;
      }

      setCompanions(data);
      setOriginCompanions(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar convidados', error);
      navigate("/error");
    }
  }

  const updateCompanion = async () => {
    const changed = companions.filter((comp) => {
      const origin = originCompanions.find((o) => o.id === comp.id)
      return origin && origin.status !== comp.status
    })

    if (changed.length === 0) return toast('Presenças atualizadas!', {
      duration: 4000,
      position: 'top-right',
      icon: '🌸',
      style: {
        background: '#FFFFFF',
        color: '#EDD2CB',
      },
    });

    try {
      const res = await fetch(`${api}update-companions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changed),
      })

      await res.json()
      toast('Presenças atualizadas!', {
        duration: 4000,
        position: 'top-right',
        icon: '🌸',
        style: {
          background: '#FFFFFF',
          color: '#EDD2CB',
        },
      });
    } catch (error) {
      toast('Ocorreu um erro!', {
        duration: 4000,
        position: 'top-right',
        icon: '⚠️',
        style: {
          background: '#FFFFFF',
          color: '#EDD2CB',
        },
      });
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

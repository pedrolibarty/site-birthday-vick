import React, { Children, createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const GuestContext = createContext()

export const GuestProvider = ({ children }) => {
  const [guests, setGuests] = useState([])
  const [companions, setCompanions] = useState([])
  const [originCompanions, setOriginCompanions] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  const api = 'https://api-birthday-vic.vercel.app/api/'

  const getGuests = async () => {
    try {
      const res = await fetch(`${api}guests`, {
        method: "GET"
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
      setGuests(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar convidados', error);
      navigate("/error");
    }
  }

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

      console.log(data[0] === undefined)
      
      if (data[0] === undefined) {
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
        getGuests,
        guests
      }}
    >
      {children}
    </GuestContext.Provider>
  )
}

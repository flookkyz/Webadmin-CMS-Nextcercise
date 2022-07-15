import Head from 'next/head'
import Image from 'next/image'
import EventCheckpoint from '../components/EventCheckpoint'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex">
    <Sidebar/>
    <EventCheckpoint/>
    </div>
  )
}

'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 right-0 bg-gray-800 text-white p-4 rounded-bl-2xl shadow-lg z-50">
        <ul className="flex flex-col gap-2 text-right">
          <li><a href="home" className="hover:text-pink-300">Home</a></li>
          <li><a href="about" className="hover:text-pink-300">About</a></li>
          <li><a href="skills" className="hover:text-pink-300">Skills</a></li>
          <li><a href="projects" className="hover:text-pink-300">Projects</a></li>
          <li><a href="contact" className="hover:text-pink-300">Contact</a></li>
        </ul>
      </nav>

      {/* ===== HOME SECTION ===== */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
        >
          <h2 className="text-4xl font-extrabold mb-6">WAWA'S PROFILE</h2>
          <Image src="/profile2.jpg" alt="Foto Profile" width={150} height={150} className="rounded-full mx-auto object-cover aspect-square"/>
          <h1 className="text-3xl font-bold mt-4">Wawa</h1>
          <p className="text-lg mt-2">Web Developer | UI/UX Enthusiast</p>
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Short Profile</h1>
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          viewport={{ once:true }}
          className="bg-white p-6 rounded-3xl shadow-lg"
        >
          <p><span className="font-semibold">Nama:</span> Naswa Ayu Cahya Kirana</p>
          <p><span className="font-semibold">Sekolah:</span> SMKN 8 MALANG</p>
          <p><span className="font-semibold">Jurusan:</span> RPL</p>
          
        </motion.div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["C#", "Java", "HTML", "CSS", "JavaScript", "Github", "Git", "React", "Vite", "Flowgorithm", "Flutter", "TypeScript"].map((s,i)=>(
            <div key={i} className="bg-white p-4 rounded shadow text-center">{s}</div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Project</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name:"@ipnuippnuarjosari", img:"/ippnu.jpg", description:"Pertama kali ikut acara IPNU IPPNU Hari Santri Nasional 2025" },
            { name:"@bdi_vohiema", img:"/bdi.jpg", description:"Pertama kali juga jadi panitia Maulid Nabi 2024 di sekolah" }
          ].map((p,i)=>(
            <div key={i} className="bg-white p-4 rounded shadow">
              <Image src={p.img} alt={p.name} width={300} height={200} className="mx-auto rounded"/>
              <h2 className="font-semibold mt-2">{p.name}</h2>
              <p className="mt-1">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-6 max-w-md mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact</h1>
        <div className="flex flex-col gap-3">
          {[
            { name:"Instagram", link:"https://www.instagram.com/nastheticcc?igsh=MTJmaDVnNmN5MjdxZw==" },
            { name:"Tiktok", link:"https://www.tiktok.com/@nastheticsjh?_t=ZS-8z22YbmMSYi&_r=1" },
            { name:"Spotify", link:"https://open.spotify.com/playlist/5JVBTaaUx0PwWXcuYeTMII?si=hqNaRYhHQ2uDyEhQ5SR5pg&pi=a-KYq3tA5uSgGq" },
            { name:"Youtube", link:"https://youtube.com/@nastudieys?si=xgF9blOljgHOu3eX" },
            { name:"Locket", link:"https://locket.cam/inwawaworld" },
          ].map((s,i)=>(
            <a key={i} href={s.link} target="_blank" className="bg-white p-2 rounded shadow hover:bg-gray-200">{s.name}</a>
          ))}
        </div>
      </section>
    </div>
  );
}

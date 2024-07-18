import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <main className='flex flex-col items-center '>
        <header className='flex justify-between bg-[#333] w-full p-2'>
          <div className='flex items-center gap-2 font-semibold text-white'>
            <Image
              src='/telegram.webp'
              alt='Telegram Logo'
              width={44}
              height={40}
            />
            <p>Telegram</p>
          </div>
          <a href='https://telegram.org' className='downloadButton'>
            Download Telegram
          </a>
        </header>
        <div className='max-w-md mx-5 my-2 bg-gray-700 card'>
          <div className='profile'>
            <Image
              className='mx-auto avatar'
              src='/vikrant.jpg'
              alt='Profile Picture'
              width={300}
              height={300}
            />
            <h1 className='font-bold name'>INSIDER - VIKRANT</h1>
            <p className='subscribers'>35,045 subscribers</p>
            <p className='description'>
              Vikrant ki boli bandook ki goli 🎯
              <br />
              IPL match pass 71/74 🧨
            </p>
            <p className='note'>WORLD CUP 53/55 ⚡😎</p>
            <p className='timer'>TIME LEFT: 12 SECONDS</p>
            <a
              href='tg://join?invite=4Tq1R4F3OXE4ZjM1'
              className='transition-all duration-100 joinButton hover:scale-95 drop-shadow-md'
            >
              Join Channel
            </a>
          </div>
          <footer className='opacity-50 footer '>
            <p>
              You are invited to the channel INSIDER - VIKRANT. Click above to
              join.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

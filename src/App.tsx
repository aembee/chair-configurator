import React, { useEffect, useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeColor, setActiveColor] = useState("Alcantara Grey");
  const [activeFrame, setActiveFrame] = useState("Metal Chrome 01 (T)");

  const [autoPlay, setAutoPlay] = useState(true);

  let maxMenu = 2;

  const setColor = (color:string) => {
    setActiveColor(color);
    //@ts-ignore
    window.widget.setMaterial("New material group", color).then((res) => {
    })
  }

  const setFrameColor = (color:string) => {
    setActiveFrame(color);
    //@ts-ignore
    window.widget.setMaterial("Chair1", color).then((res) => {
    })
  }

  const previousPage = () => {
    if(activeMenu > 0){
      setActiveMenu(activeMenu-1);
    }
  }

  const nextPage = () => {
    if(activeMenu != maxMenu){
      setActiveMenu(activeMenu+1);
    }
  }

  const toggleAutoPlay = () => {
    if(autoPlay){
      //@ts-ignore
      window.widget.setCamera("NoRotation");
      setAutoPlay(false);
    } else {
      //@ts-ignore
      window.widget.setCamera("Default");
      setAutoPlay(true);
    }
  }

  return (
    <div className="absolute bottom-8 w-full justify-center  flex flex-col items-center z-50">
        <div className='mb-3 flex items-center gap-2 text-zinc-400'>
          <h1 className='font-thin'>Auto-Play</h1>
          <div onClick={toggleAutoPlay}>
            {autoPlay ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
              <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z" />
            </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </div>
        </div>


        <div className='bg-zinc-100 w-[40%] h-[3.8rem] px-5 rounded-xl drop-shadow-lg flex items-center justify-between'>
          <div onClick={previousPage} className={`${activeMenu > 0 ? "text-zinc-900 cursor-pointer":"text-zinc-300 cursor-not-allowed"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </div>

          {activeMenu == 0 && (
            <h1 className='font-thin text-xl'>Willkommen beim Stuhl Konfigurator</h1>
          )}

          {activeMenu == 1 && (
            <div className='w-full flex items-center justify-center gap-5'>
              <h2 className='text-zinc-900 font-thin text-xl'>Sitzfarbe:</h2>

              <div className='flex items-center gap-2'>
                <div onClick={() => setColor("Alcantara Grey")} className={`h-8 w-8 bg-zinc-600 rounded-full cursor-pointer`}>
                  <div className={`${activeColor == "Alcantara Grey" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setColor("Alcantara Magenta")} className={`h-8 w-8 bg-pink-400 rounded-full cursor-pointer`}>
                  <div className={`${activeColor == "Alcantara Magenta" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setColor("Leather 01 Blue (T)")} className={`h-8 w-8 bg-blue-400 rounded-full cursor-pointer`}>
                  <div className={`${activeColor == "Leather 01 Blue (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setColor("Leather 01 Red (T)")} className={`h-8 w-8 bg-red-400 rounded-full cursor-pointer`}>
                  <div className={`${activeColor == "Leather 01 Red (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setColor("Leather 01 Brown (T)")} className={`h-8 w-8 bg-yellow-800 rounded-full cursor-pointer`}>
                  <div className={`${activeColor == "Leather 01 Brown (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu == 2 && (
            <div className='w-full flex items-center justify-center gap-5'>
              <h2 className='text-zinc-900 font-thin text-xl'>Rahmenfarbe:</h2>

              <div className='flex items-center gap-2'>
                <div onClick={() => setFrameColor("Metal Chrome 01 (T)")} style={{backgroundImage: "url('https://media.istockphoto.com/photos/metal-texture-background-picture-id695750612?k=20&m=695750612&s=612x612&w=0&h=tofFpO9a-T5oKnBT6iNrOasGOQ715lHgkGR_B_BndPk=')"}} className={`h-8 w-8 bg-cover bg-center bg-zinc-300 rounded-full cursor-pointer`}>
                  <div className={`${activeFrame == "Metal Chrome 01 (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setFrameColor("Carbon Fiber 01 (T)")} style={{backgroundImage: "url('https://i.pinimg.com/originals/65/03/7d/65037dfbe963ce654c487895bf25bea9.jpg')"}} className={`h-8 w-8 bg-cover bg-center rounded-full cursor-pointer`}>
                  <div className={`${activeFrame == "Carbon Fiber 01 (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setFrameColor("Wood Walnut 01 (T)")} style={{backgroundImage: "url('https://i.pinimg.com/originals/49/e0/ee/49e0ee84c3b5f2b3228a09bbe8ea0946.jpg')"}} className={`h-8 w-8 bg-cover bg-center rounded-full cursor-pointer`}>
                  <div className={`${activeFrame == "Wood Walnut 01 (T)" ? "flex" : "hidden"} absolute items-center justify-center h-8 w-8 bg-zinc-400 rounded-full bg-opacity-40`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div onClick={nextPage} className={`${activeMenu != maxMenu ? "text-zinc-900 cursor-pointer":"text-zinc-300 cursor-not-allowed"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
    </div>
  );
}

export default App;

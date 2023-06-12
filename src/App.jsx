import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [info, setinfo] = useState([])
  function getinfo() {
    axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
      .then(res => {
        setinfo(res.data)
        console.log(info)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getinfo();
  }, [])

  return (
    <div className="App m-5">
      <div className='grid grid-cols-2 gap-4 justify-center items-center '>
        {info.map((item) => (
          <div className='rounded-[5px] shadow-lg w-[442px] p-[20px]  '>
            {/* ----- Titile ----- */}
            <div className='flex items-center space-x-[20px] border-b-[1px] pb-[20px]'>
              <img src={item.logo} alt='logo' className='w-[80px] h-[86px]' />
              <div className='text-start flex flex-col justify-between flex-grow'>
                <div className='flex justify-between flex-col'>
                  <div className='flex justify-between items-center'>
                    <p className='text-[#ff5a5a] font-semibold text-[24px]'>{item.faculty.name}</p>
                    <img src="fav.png" alt="fav" className='w-[24px] h-[21px]' />
                  </div>
                  <p className='font-medium text-[20px] text-[#9b9b9b]'>{item.name}</p>
                </div>
                <p className='font-light text-[20px] text-[#9b9b9b]'>{item.faculty.university.name}</p>
              </div>
            </div>
            {/* ----- Content ----- */}
            <div className=' border-b-[1px] pb-[20px]'>
              {/* Round */}
              <div className='pt-[16px]'>
                <div className='flex space-x-[23px]'>
                  <p>รอบที่เปิด</p>
                  <div className='flex space-x-[8px]'>
                    {item.roundSeats.map((round, index) => (
                      <div className={` rounded-full w-[29px] h-[29px] ${round > 0 ? 'bg-[#2ecc71]' : 'bg-[#d8d8d8]'}`}>
                        <p className='text-white text-center text-[18px] font-medium' >{index + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              {/* Score */}
              <div className='font-[#4a4a4a]'>
                <div className='flex justify-between items-center pt-[12px]'>
                  {/* <p>{item.score.scoreType == null ? '' : item.score.scoreType}</p> */}
                  <p>รอบที่ 4 : {item.score?.scoreType} </p>
                  <div className='rounded-[17.5px]  border-[#ff5a5a] border-[2px] w-[120px] h-[35px] flex justify-center items-center space-x-[11px]'>
                    <p className=' text-[#ff5a5a] text-[12px] font-medium'>แก้ไขคะแนน</p>
                    <img src="edit.png" alt="fav" className='w-[18px] h-[18px]' />
                  </div>
                </div>
                <div className='flex justify-between items-center text-[#4a4a4a]'>
                  <img src="score.png" alt="fav" className='w-[27px] h-[35px] mx-[16px]' />
                  <div className='pt-[20px]'>
                    <p >คะแนนของคุณคือ</p>
                    <p className='font-light text-[42px] '>23,453</p>
                  </div>
                </div>
                <div className='flex justify-between divide-x space-x-3 text-[#5f5f5f]'>
                  <div className='px-3 '>
                    <p>{item.score?.min || '-'}</p>
                    <p>คะแนนต่ำสุด 60</p>
                  </div>
                  <div>
                    <p>{item.score?.avg || '-'}</p>
                    <p>คะแนนเฉลี่ย 60</p>
                  </div>
                  <div>
                    <p>{item.score?.max || '-'}</p>
                    <p>คะแนนสูงสุด 60</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div>
              <div className='flex items-center my-[16px] space-x-[18.5px] border-b-[1px] pb-[20px]'>
                <img src="fav.png" alt="fav" className='w-[9px] h-[14px]' />
                <p className='text-[#48b6a3]'>ดูสัดส่วนคะแนน</p>
              </div>
              <div className='flex justify-between  flex-grow items-center text-[#9b9b9b]'>
                <div className='flex items-center'>
                  <img src="fav.png" alt="fav" className='w-[10px] h-[10px]' />
                  <p>10 <span className='italic '>คนที่สนใจ</span> </p>
                </div>
                <img src="arrow.png" alt="fav" className='w-[18px] h-[23px]' />
              </div>
            </div>
            { /* ----- End ----- */}
          </div>
        ))}
      </div>

    </div>

  );
}

export default App;

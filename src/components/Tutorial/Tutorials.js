import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../common/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getTutorial } from '../../services/operations/tutorialAPIs'
import { setTutorialUId } from '../../services/slices/tutorialSlice'

  
const Tutorials =() => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      if (token) {
        const data = await getTutorial(token);
        setCardData(data);
      }
    };
    dispatch(setTutorialUId(null));
    fetchTutorials();
  }, [token]);

  const handleCardClick = (heading) => {
    navigate(`/tutorial/${heading.toLowerCase()}`);
  };

  const handleTutId=(tutId)=>{
    dispatch(setTutorialUId(tutId));
  }

  return (
    <div >
      <div className="px-4 pt-8 pb-20 bg-gray-700 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 inconsolataFontFamily text-gray-200">Tutorials</h1>
      {token ?
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-10/12 mx-auto">
        {cardData.map((card) => (
          <div 
            key={card._id} 
            className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex flex-col items-center border-2 border-gray-200 border-opacity-20 group hover:cursor-pointer"
            onClick={() => {
              handleCardClick(card.tutorialName)
              handleTutId(card._id)
            }}
          >
            <div className="overflow-hidden">
              <img 
                src={card.thumbnail}
                alt="Img Not Found"
                className="w-56 h-56 md:w-56 md:h-52 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="p-3 md:p-4 w-full border-t border-gray-500 h-[42%]">
              <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">{card.tutorialName}</h2>
              <p className="text-sm md:text-base text-gray-300 mb-1 md:mb-2 ">{card.tutorialDescription}</p>
              <p className="text-xs md:text-sm text-gray-400">Released: {(card.createdAt).slice(0,10) }</p>
            </div>
          </div>
        ))}
      </div>:<p className='text-white text-center text-lg'>Please login to access tutorial page</p>}
    </div>
    <Footer/>
    </div>
  )
}

export default Tutorials
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaChevronLeft, FaChevronRight, FaBookOpen, FaCheckCircle, FaArrowLeft, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFullTutorial, updateTutorialProgress } from '../../services/operations/tutorialAPIs';
import DOMPurify from 'dompurify';

function TutorialPage() {
    const { tutorialId } = useParams();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const [datta, setData] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTopic, setCurrentTopic] = useState(null);
    const [subSectionLength, setSubSectionLength] = useState(0);
    const [completedTopics, setCompletedTopics] = useState([]);

    useEffect(() => {
        const fetchPagaTutorials = async () => {
            const dataa = await getFullTutorial(token, tutorialId);
            setData(dataa);
            console.log("data", dataa.tutorialContent, "tutorialId", tutorialId);

            // Assuming the tutorialProgress is an array of completed topic IDs
            if (dataa?.createdBy?.tutorialProgress) {
                setCompletedTopics(dataa.createdBy.tutorialProgress);
            }
        }
        fetchPagaTutorials();
    }, [token, tutorialId]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsLeftSidebarOpen(false);
                setIsRightSidebarOpen(false);
            } else {
                setIsLeftSidebarOpen(true);
                setIsRightSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
    const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

    const toggleSection = (sectionIndex) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionIndex]: !prev[sectionIndex]
        }));
    };

    const handleTopicClick = (topic) => {
        setCurrentTopic(topic);
        if (isMobile) {
            setIsLeftSidebarOpen(false);
        }
    };

    const findSubSectionLength = () => {
        let length = 0;
        datta?.tutorialContent?.forEach((element) => {
            length += element.subSection.length;
        });
        return length;
    }

    useEffect(() => {
        if (datta) {
            const length = findSubSectionLength();
            setSubSectionLength(length);
        }
    }, [datta]);

    const updateTutorialProgressz = () => {
        const totalTopics = subSectionLength;
        const completedCount = completedTopics.length;
        const newProgress = Math.round((completedCount / totalTopics) * 100);
        setProgress(newProgress);
    }

    const markAsRead =async(sectionUId) => {
        dispatch(updateTutorialProgress(token, tutorialId, sectionUId));
        setCompletedTopics(prev => [...prev, sectionUId]);
        updateTutorialProgressz();
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white ">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-14 left-1 z-50 bg-gray-700 p-2 rounded"
                onClick={toggleLeftSidebar}
            >
                {isLeftSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Left Sidebar */}
            <div className=''>
                <div className={`w-64 bg-gray-800 transition-all duration-300 fixed top-0 left-0 h-full z-40 
                ${isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                ${isMobile ? 'w-full' : 'md:w-64 md:relative'}`}>
                    <div className="p-4 overflow-hidden">
                        <Link to="/tutorial" className="flex items-center mb-4">
                            <FaArrowLeft className="mr-2" />
                            <span>Back To Tutorials</span>
                        </Link>
                        <h2 className="text-2xl font-bold mb-2">{datta?.tutorialName}</h2>
                        <div className="mb-4">
                            <div className="bg-gray-700 h-2 rounded">
                                <div className="bg-blue-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-sm mt-1">{progress}% Completed</p>
                        </div>
                        <div className="relative mb-4">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 rounded bg-gray-700 text-white"
                            />
                        </div>

                        {datta?.tutorialContent?.map((section) => (
                            <div key={section._id} className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer py-2"
                                    onClick={() => toggleSection(section._id)}
                                >
                                    <h3 className="font-semibold">{section.sectionName}</h3>
                                    {openSections[section._id] ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {openSections[section._id] && (
                                    <ul className="ml-4 mt-2 space-y-2">
                                        {section.subSection.map((topic) => (
                                            <li
                                                key={topic._id}
                                                className={`cursor-pointer hover:text-blue-300
                                            `}
                                                onClick={() => handleTopicClick(topic)}
                                            >
                                                <FaBookOpen className="inline mr-2" />
                                                {topic.title}
                                                {completedTopics[topic._id] && <FaCheckCircle className="inline ml-2 text-green-500" />} 
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* {section.length < datta.tutorialContent.length - 1 && (
                                <div className="border-t-2 border-gray-700 my-4"></div>
                            )} */}
                            </div>
                        ))}
                    </div>

                    {/* Left Sidebar Toggle Button (visible only on larger screens) */}
                    <button
                        className="absolute top-[40%] -right-5 w-5 h-20 bg-gray-300 text-gray-600 items-center justify-center hidden md:flex"
                        onClick={toggleLeftSidebar}
                    >
                        {isLeftSidebarOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 p-4 md:p-8 overflow-y-auto transition-all duration-300 ${isLeftSidebarOpen && isMobile ? 'hidden' : 'block'
                }`}>
                {currentTopic ? (
                    <>
                        <h1 className="text-3xl font-bold mb-4">{currentTopic.title}</h1>
                        {currentTopic.description &&
                            <div className="mb-6"
                                dangerouslySetInnerHTML={{ __html:  DOMPurify.sanitize(currentTopic.description)}}
                            >
                            </div>
                        }
                        <button
                            onClick={() => markAsRead(currentTopic._id)}
                            className={`mt-6 px-4 py-2 rounded font-semibold ${completedTopics.includes(currentTopic._id)
                                ? 'bg-gray-500 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                                }`}
                            disabled={completedTopics.includes(currentTopic._id)}
                        >
                            {completedTopics.includes(currentTopic._id) ? 'Completed' : 'Mark as Read'}
                        </button>
                    </>
                ) : (
                    <p>Select a topic from the sidebar to view its content.</p>
                )}
            </div>
        </div>
    )
}

export default TutorialPage;

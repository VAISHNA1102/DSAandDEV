import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaChevronLeft, FaChevronRight, FaBookOpen, FaCheckCircle, FaArrowLeft, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFullTutorial } from '../../services/operations/tutorialAPIs';

const TutorialPageInfo = () => {
    const { currPath } = useParams();
    const { token } = useSelector((state) => state.auth);
    const {tutorialUId}=useSelector((state)=>state.tutorial)
    const [datta, setData] = useState([])

    useEffect(() => {
        const fetchTutorials = async () => {
            const dataa = await getFullTutorial(token,tutorialUId);
            setData(dataa);
            console.log("data",dataa)
        }
        fetchTutorials();
      }, []);

    const [progress, setProgress] = useState(0);
    const [currentTopic, setCurrentTopic] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
    const [completedTopics, setCompletedTopics] = useState({});
    const [isMobile, setIsMobile] = useState(false);

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

    const data = {
        title: "HTML",
        sections: [
            {
                section: "Web Foundations",
                topics: [
                    {
                        title: "The Internet",
                        content: [
                            {
                                subtitle: "Content",
                                description: "Content on the web includes everything from this article and cute Instagram photos to hilarious YouTube videos to viral memes and those addictive cat GIFs. Basically, if it's something you can read, watch, or listen to online, it's content."
                            },
                            {
                                subtitle: "Search Engine",
                                description: "A search engine is a web-based tool that enables users to discover information on the internet. Examples include Google, Bing, and Yahoo. Users enter queries, and the search engine returns relevant results from its indexed database of web pages."
                            },
                            {
                                subtitle: "Web Browser",
                                description: "A web browser is a software application used to access and navigate the web. Popular examples include Google Chrome, Mozilla Firefox, and Safari. Browsers interpret and display web content, allowing users to interact with websites and online services."
                            },
                            {
                                subtitle: "The World Wide Web (WWW)",
                                description: "The World Wide Web, commonly referred to as the web, is a subset of the internet. It consists of interconnected web pages and multimedia content accessible through the internet."
                            },
                            {
                                subtitle: "The Internet",
                                description: "The internet is a global network connecting millions of computers and devices worldwide. It facilitates communication, data sharing, and access to resources across vast distances."
                            }
                        ]
                    },
                    { 
                        title: "History of HTML", 
                        content: [
                            {
                                subtitle: "Birth of HTML",
                                description: "HTML, which stands for Hypertext Markup Language, was created by Tim Berners-Lee in the late 1980s. It was originally conceived as a simple markup language for sharing and formatting documents on the internet. Berners-Lee developed the first version of HTML, inspired by an existing markup language called SGML. He also wrote the first web browser and server software during this time."
                            },
                            {
                                subtitle: "HTML 1.0",
                                description: "The first official version of HTML, known as HTML 1.0, was published in 1993. It provided basic tags for structuring web pages, such as <h1> for headings and <p> for paragraphs. HTML 1.0 had only limited set of tags for headings, paragraphs, lists, and basic formatting. There were no tags for things like bold or italics, so web pages could only display text in a single font and style. Also HTML 1.0 had no support for images, tables, or forms. These are all essential parts of web pages today, but they weren't supported in HTML 1.0."
                            },
                            {
                                subtitle: "HTML5",
                                description: "HTML5, released in 2014, represented a major overhaul of the HTML language. It introduced new semantic elements like <header>, <footer>, and <nav>, as well as multimedia elements like <video> and <audio>. HTML5 also brought improvements in accessibility, performance, and compatibility with mobile devices."
                            },
                            {
                                subtitle: "Living Standard",
                                description: "Instead of releasing new versions, HTML is now maintained as a living standard by the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG). This means that the language is continually updated and improved based on community feedback and technological advancements."
                            },
                            {
                                subtitle: "Future of HTML",
                                description: "The evolution of HTML continues, with ongoing efforts to make the language more powerful, flexible, and user-friendly. New features and enhancements are constantly being proposed and developed to keep pace with the changing needs of web developers and users alike."
                            }
                        ]
                    }
                ]
            },
            {
                section: "Understanding HTML",
                topics: [
                    { 
                        title: "Elements, Tags and Attributes",
                        content: [
                            {
                                subtitle: "Block-level elements",
                                description: "HTML tags mark the beginning and end of an element (and are considered part of the element). Tags are containers. They tell you something about the content between the opening & closing tags."
                            },
                            {
                                subtitle: "Let's look at few examples of HTML attributes",
                                description: "class: Assigns one or more class names to an HTML element. Classes are used for styling multiple elements with the same properties.id : Provides a unique identifier for an HTML element. IDs are often used for styling or JavaScript purposes. "
                            }
                        ] 
                    },
                    { title: "HTML Lists" }
                ]
            },
            {
                section: "HTML & URLs",
                topics: []
            },
            {
                section: "HTML Forms",
                topics: []
            }
        ]
    };

    const toggleSection = (sectionIndex) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionIndex]: !prev[sectionIndex]
        }));
    };

    const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
    const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

    const handleTopicClick = (topic) => {
        setCurrentTopic(topic);
        if (isMobile) {
            setIsLeftSidebarOpen(false);
        }
    };

    const markAsRead = () => {
        if (!completedTopics[currentTopic.title]) {
            setCompletedTopics(prev => ({
                ...prev,
                [currentTopic.title]: true
            }));

            const totalTopics = data.sections.reduce((acc, section) => acc + section.topics.length, 0);
            const completedCount = Object.keys(completedTopics).length + 1;
            const newProgress = Math.round((completedCount / totalTopics) * 100);
            setProgress(newProgress);
        }
    };

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
                    <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
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
                    {data.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer py-2"
                                onClick={() => toggleSection(sectionIndex)}
                            >
                                <h3 className="font-semibold">{section.section}</h3>
                                {openSections[sectionIndex] ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {openSections[sectionIndex] && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    {section.topics.map((topic, topicIndex) => (
                                        <li
                                            key={topicIndex}
                                            className={`cursor-pointer hover:text-blue-300 ${currentTopic?.title === topic.title ? 'text-blue-400' : ''}`}
                                            onClick={() => handleTopicClick(topic)}
                                        >
                                            <FaBookOpen className="inline mr-2" />
                                            {topic.title}
                                            {completedTopics[topic.title] && <FaCheckCircle className="inline ml-2 text-green-500" />}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {sectionIndex < data.sections.length - 1 && (
                                <div className="border-t-2 border-gray-700 my-4"></div>
                            )}
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
                        {currentTopic.content && currentTopic.content.map((item, index) => (
                            <div key={index} className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">{item.subtitle}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        <button
                            onClick={markAsRead}
                            className={`mt-6 px-4 py-2 rounded font-semibold ${completedTopics[currentTopic.title]
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-600'
                                }`}
                            disabled={completedTopics[currentTopic.title]}
                        >
                            {completedTopics[currentTopic.title] ? 'Completed' : 'Mark as Read'}
                        </button>
                    </>
                ) : (
                    <p>Select a topic from the sidebar to view its content.</p>
                )}
            </div>

            {/* Right Sidebar */}
            <div>
            <div className={`w-64 bg-gray-800 transition-all duration-300 fixed top-0 right-0 h-full z-20 
                    ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                    ${isMobile ? 'w-full' : 'md:w-64 md:relative'}`}>
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-4">On This Page</h3>
                    {currentTopic && currentTopic.content && (
                        <ul className="space-y-2">
                            {currentTopic.content.map((item, index) => (
                                <li key={index} className="cursor-pointer hover:text-blue-300">
                                    {item.subtitle}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Right Sidebar Toggle Button */}
                <button
                    className="absolute top-[40%] -left-5 w-5 h-20 bg-gray-300 text-gray-600 flex items-center justify-center"
                    onClick={toggleRightSidebar}
                >
                    {isRightSidebarOpen ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
                </button>

            </div>
            </div>
        </div>
    );
};

export default TutorialPageInfo;
import './projects.css'
import sp from '../assets/sp.png'
import oqa from '../assets/oqa.avif'
import blog from '../assets/blog.jpeg'





function Projects()
{
    return(
        <div className='projects-body'>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={sp} alt="SocketProgamming" width={'100%'} height={'100%'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        MultiThreaded Chat Application
                        </h1>

                        <p className='project-card-text'>
                        To use python socket programming to create a client-server based chat application and host it using ngrok services.
                        </p>

                        <p className='project-card-text'>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/ChatApplication'> 
                                Repo
                            </a>

                        </p>
                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={oqa} alt="oqa" width={'100%'} height={'100%'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        QuizzMi
                        </h1>

                        <p className='project-card-text'>
                            A responsive  MERN stack quiz web application with real time scoring analysis.
                        </p>

                        <p className='project-card-text'>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/OQA_Front'> 
                                Front
                            </a>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/OQA_Back'> 
                                Back
                            </a>
                            <a className='project-card-link' href='https://oqa-front.vercel.app/'> 
                                Deployed
                            </a>

                        </p>
                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={blog} alt="blog" width={'100%'} height={'100%'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        Blog
                        </h1>

                        <p className='project-card-text'>
                            A responsive  MERN stack blog/diary web application with real time interactive history menu.
                        </p>

                        <p className='project-card-text'>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/Thoughts_frontend'> 
                                Front
                            </a>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/Thoughts_backend'> 
                                Back
                            </a>
                            <a className='project-card-link' href='https://thoughts-mk.vercel.app'> 
                                Deployed
                            </a>

                        </p>
                    </div>  
                </div>
               
        </div>
    )
}

export default Projects
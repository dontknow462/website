import React from 'react'
import "./Content.css"



function Content({
    lightbg,
    lighttext,
    image,
    desc,
    title,
    textbtn,
    desc2
}) {
    return (
        <div className={lightbg? "first_div":" first_div darker"}>
            <div className="content_container">
                <div className="all">
                        <h1 className={lighttext? "text_":"text_ dark_"}>
                            {title}
                        </h1>
                        <div className="h4_">
                            <h4 className={lighttext? "text_light":"text_dark"}>
                                {desc}
                            </h4>
                            <h4 className={lighttext? "text_light":"text_dark"} >
                                {desc2}
                            </h4>
                        </div>
                </div>
                
            </div>
            <a href="#" className="link_img">
                <img src={image}/>
                </a>
        </div>
    )
}

export default Content

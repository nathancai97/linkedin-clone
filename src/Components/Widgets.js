import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Who is Nathan Cai?", "Top news - 9099 readers")}
        {newsArticle("Coronavirus: US updates", "Top news - 989 readers")}
        {newsArticle("Bitcoin breaks ATH!", "Crypto - 3845 readers")}
        {newsArticle("Learn redux!", "Code - 7345 readers")}
        {newsArticle("Hire me!", "Top news - 1111 readers")}
    </div>
  )
}

export default Widgets
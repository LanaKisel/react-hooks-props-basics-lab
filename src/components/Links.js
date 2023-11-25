import React from 'react'

const Links = (links) => {
   // console.log("this is links from Link.js", links)
    const {github, linkedin} = links

  return (
    <>
     <h3>Links</h3>
     <a href={github}>{github}</a>
     <a href={linkedin}>{linkedin}</a>      
    </>
  )
}
export default Links

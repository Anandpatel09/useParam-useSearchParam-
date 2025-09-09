import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [course,setCourse]=useState("");
    const [filterCourse,setFilterCourse]=useSearchParams();

    const searchCourse=()=>{
      setFilterCourse({filter : course}); 
    }

    const showcourse=()=>{
        switch(filterCourse.get("filter")){
            case "java":
                return (
                    <div>
                        <h2>java playlist on otious channel</h2>
                        <ol>
                            <li>core java</li>
                            <li>java file handling</li>
                            <li>Socket programming</li>
                        </ol>
                    </div>
                );

                case "kotlin":
                return (
                    <div>
                        <h2>kotlin playlist on otious channel</h2>
                        <ol>
                            <li>core Kotlin</li>
                            <li>Kotlin file handling</li>
                            <li>kotlin Socket programming</li>
                        </ol>
                    </div>
                )
                
                case "react":
                return (
                    <div>
                        <h2>react playlist on otious channel</h2>
                        <ol>
                            <li>react java</li>
                            <li>react file handling</li>
                            <li>react programming</li>
                        </ol>
                    </div>
                )
                default:
                    return <h2>Welcome to otious channel  {filterCourse.get("filter")}</h2>
        }
    }

  return (
    <div>Home 

      <input type="text"
      value={course}
      onChange={(event)=>setCourse(event.target.value)}
      />

      <button onClick={searchCourse}>Fetch course</button><br/>
      {filterCourse.get("filter")? showcourse():""}
    </div>
  )
}

export default Home
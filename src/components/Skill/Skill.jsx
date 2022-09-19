import React, { useState, useEffect } from 'react';

const Skill = ({skills}) => {
    const [stackId, setStackId] = useState(0);

     
    const upcount = (id) => {
        setStackId(id);
        handleUpvote();
    }
    const handleUpvote = async () => {
        await fetch(`http://localhost:3000/api/upvotes/${stackId}/upvote`)
    }   

    return (
        <>
            <ul className="skills">
                {skills.map((skill) => {
                    return (
                        <li key={skill.id} >
                            {skill.skill.name}
                            <span className="votes" onClick={() => {upcount(skill.id)}} >{skill.upvote}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default Skill;
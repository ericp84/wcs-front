import React from 'react';

const Skill = ({skills}) => {
    console.log("🚀 ~ file: Skill.jsx ~ line 4 ~ Skill ~ skills", skills)
    return (
        <>
            <ul className="skills">
                {skills.map((skill, i) => {
                    return (
                        <li key={i}>
                            {skill.skill.name}
                            <span className="votes">{skill.upvote}</span>
                        </li>
                    )
                })}
            </ul>

        </>
    );
};

export default Skill;
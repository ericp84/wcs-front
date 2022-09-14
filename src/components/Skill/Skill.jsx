import React from 'react';

const Skill = ({skills}) => {
    return (
        <>
            <ul className="skills">
                {skills.map((skill, i) => {
                    return (
                        <li key={i}>
                            {skill.name}
                            <span className="votes">3</span>
                        </li>
                    )
                })}
            </ul>

        </>
    );
};

export default Skill;
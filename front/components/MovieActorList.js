import React, { useState, useEffect } from 'react'
import { imageURL } from '../config/config';
import styled from 'styled-components'

const MovieActorListWrap = styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
`

const MovieActorImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
    vertical-align: top;
`

function movieActorList({ movieActorInfo }) {
    const [ActorList, setActorList] = useState([]);
    
    useEffect(() => {
        const viewList = movieActorInfo.slice(0, 6
            );
        setActorList(viewList);
    }, [])

    const haveProfilePath = (profilePath) => {
        if(!profilePath) {
            profilePath = "http://placehold.it/50x50?text=NoImage";
            return profilePath;
        } else {
            return `${imageURL}/w500/${profilePath}`
        }
    };

    return (
        <MovieActorListWrap>
            {
                ActorList.map(actor => (
                    <div style={{ width: '33.3%', padding: '8px', boxSizing: 'border-box' }}>
                        <MovieActorImage src={haveProfilePath(actor.profile_path)} />
                        <div style={{ display: 'inline-block' }}>
                            <div>{actor.name}</div>
                            <div style={{ fontSize: '13px', color: 'gray' }}>as {actor.character}</div>
                        </div>
                    </div>
                ))
            }
        </MovieActorListWrap>
    )
}

export default movieActorList

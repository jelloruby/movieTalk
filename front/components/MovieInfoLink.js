import Link from 'next/link';

import { imageURL, noposterURL } from '../config/config';

function MovieInfoLink({ id, src, koreanTitle }) {

    const havePosterPath = (posterPath) => {
        if(!posterPath) {
            posterPath = noposterURL;
            return posterPath;
        } else {
            return `${imageURL}/w500/${posterPath}`
        }
    };

    return (
        <Link href="/movieInfo/[id]" as={`/movieInfo/${id}`}>
          <a style={{ cursor: 'pointer' }}>
            <img src={havePosterPath(src)} style={{ width: '210px', height: '310px' }} />
            <div>{koreanTitle}</div>
          </a>
        </Link>
    )
};

export default MovieInfoLink;
import Link from 'next/link';

function MovieInfoLink({ movieId, movieSeq, src }) {
    return (
      <div>
        <Link href="/movieInfo/[movieSeq]/[movieId]" as={`/movieInfo/${movieSeq}/${movieId}`}>
          <a>
            <img src={src} style={{ height: '310px', verticalAlign: 'top' }} />
          </a>
        </Link>
      </div>
    )
};

export default MovieInfoLink;
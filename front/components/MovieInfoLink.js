import Link from 'next/link';

function MovieInfoLink({ movieId, movieSeq, src }) {
    return (
      <div>
        <Link href="/movieInfo/[movieId]/[movieSeq]" as={`/movieInfo/${movieId}/${movieSeq}`}>
          <a>
            <img src={src} style={{ height: '310px', verticalAlign: 'top' }} />
          </a>
        </Link>
      </div>
    )
};

export default MovieInfoLink;
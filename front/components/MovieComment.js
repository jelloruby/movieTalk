import React from 'react'

function MovieComment() {
    return (
        <div>
            <div>
                <div>
                    아이디
                </div>
                <form>
                    <textarea placeholder="로그인 후 이용해주세요."/>
                    <button type="submit">댓글 쓰기</button>
                </form>

            </div>

            <div>
                이 영화에 달린 댓글을 맵해서 가져온다.
            </div>
        </div>
    )
}

export default MovieComment

import React from 'react';
import { useSelector } from 'react-redux';
import SubPageLayout from '../components/layout/SubPageLayout';
import styled from 'styled-components';

import ReviewCard from '../components/ReviewCard';

const UserInfoWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 225px;

    & > div {
        display: inline-block;
    }
`

const UserImage = styled.div`
    width: 150px;
    height: 150px;
    margin-left: 100px;
    border-radius: 50%;
    background: red;
    vertical-align: top;
`

const UserInfo = styled.div`
    margin-left: 50px;
    margin-top: 30px
`

const NumRelatedUser = styled.div`
    margin-top: 25px;

    & > div {
        display: inline-block;
    }

    & > div + div {
        margin-left: 20px;
    }
`

const FollowBtn = styled.button`
    position: absolute;
    top: 25px;
    right: 100px;
`

function myPage() {
    const { me } = useSelector((state) => state.user);


    return (
        <SubPageLayout>
            <div style={{ width: '100%', height: '300px', marginBottom: '250px', background: 'gray', position: 'relative' }}>
                <UserInfoWrap>
                    <UserImage></UserImage>
                    <UserInfo>
                        <div style={{ fontSize: '2rem' }}>{me.name}</div>
                        <NumRelatedUser>
                            <div>123 reviews</div>
                            <div>123 followers</div>
                            <div>123 followings</div>
                        </NumRelatedUser>
                        <FollowBtn>+ Follow</FollowBtn>
                    </UserInfo>
                </UserInfoWrap>
            </div>
            <div style={{ marginLeft: '100px' }}>
                <div style={{ fontSize: '1.5rem' }}>J's MovieTalk</div>
                {/* <form>
                    <input placeholder="리뷰 검색" />
                </form> */}
                <div>
                    <ReviewCard />
                    <ReviewCard />
                </div>
                <button>Load More</button>
            </div>
        </SubPageLayout>
    )
};

export default myPage;

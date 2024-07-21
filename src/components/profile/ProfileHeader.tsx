import React from 'react';
import { IProfile } from '../../model/profile';
import { Button } from 'antd';
import { PhoneFilled, VideoCameraFilled, HeartFilled } from '@ant-design/icons';

interface ProfileHeaderProps {
  profile: IProfile | null;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
        <div className='profile-photo-name'>
            <img src={profile?.image} alt={profile?.nameUser} className='profile-header-photo' />
            <h2>{profile?.nameUser}</h2>
        </div>
        <div className='profile-btn'>
            <Button className='profile-phone-btn' shape="circle" icon={<PhoneFilled />} />
            <Button className='profile-video-btn' shape="circle" icon={<VideoCameraFilled />} />
            <Button className='profile-like-btn' shape="circle" icon={<HeartFilled />} />
        </div>
    </div>
  );
}
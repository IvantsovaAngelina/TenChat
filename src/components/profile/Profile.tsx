import React from 'react';
import { IProfile } from '../../model/profile';
import { Button } from 'antd';
import { PhoneFilled,  VideoCameraFilled, HeartFilled} from '@ant-design/icons';


interface ProfileProps {
  profile: IProfile | null;
}

export function Profile({ profile }: ProfileProps) {
  if (!profile) {
    return <div className="profile">Выберите пользователя</div>;
  }

  return (
    <div className="profile">
        <div className='profile-info'>
            <img src={profile.image} alt={profile.nameUser} className='profile-photo' />
            <h2>{profile.nameUser}</h2>
        </div>
        <div className='profile-btn'>
            <Button className='profile-phone-btn' shape="circle" icon={<PhoneFilled />} />
            <Button className='profile-video-btn' shape="circle" icon={<VideoCameraFilled />} />
            <Button className='profile-like-btn' shape="circle" icon={<HeartFilled />} />
        </div>
    </div>
  );
}
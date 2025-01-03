import React from 'react';
import SocialIcon from './social-icon';
import { X as XIcon } from 'lucide-react';
import {
  SiDiscord,
  SiDribbble,
  SiThreads,
  SiSnapchat,
  SiGithub,
  SiYoutube,
  SiInstagram,
} from 'react-icons/si';

const socialPlatforms = [
  { name: 'X', href: '#', Icon: XIcon },
  { name: 'Instagram', href: '#', Icon: SiInstagram },
  { name: 'GitHub', href: '#', Icon: SiGithub },
  { name: 'YouTube', href: '#', Icon: SiYoutube },
  { name: 'Discord', href: '#', Icon: SiDiscord },
  { name: 'Dribbble', href: '#', Icon: SiDribbble },
  { name: 'Threads', href: '#', Icon: SiThreads },
  { name: 'Snapchat', href: '#', Icon: SiSnapchat },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-x-6">
      {socialPlatforms.map((platform) => (
        <SocialIcon
          key={platform.name}
          name={platform.name}
          href={platform.href}
          Icon={platform.Icon}
        />
      ))}
    </div>
  );
};

export default SocialIcons;

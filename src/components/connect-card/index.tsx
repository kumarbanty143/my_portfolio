import {
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';
import {
  FaLinkedin,
} from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiX } from 'react-icons/si';
import { SanitizedSocial, SanitizedGithub } from '../../interfaces/sanitized-config';

const ConnectCard = ({
  social,
  github,
  loading,
}: {
  social: SanitizedSocial;
  github: SanitizedGithub;
  loading: boolean;
}) => {
  if (loading) return null;

  const items = [
    {
      icon: <AiFillGithub className="w-5 h-5" />,
      text: 'GitHub',
      link: `https://github.com/${github.username}`,
      color: 'bg-neutral',
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      text: 'LinkedIn',
      link: `https://www.linkedin.com/in/${social.linkedin}`,
      color: 'bg-blue-600',
    },
    {
      icon: <SiLeetcode className="w-5 h-5 text-orange-500" />,
      text: 'LeetCode',
      link: `https://leetcode.com/u/${social.leetcode}`,
      color: 'bg-neutral-focus',
    },
    {
      icon: <SiCodechef className="w-5 h-5 text-brown-500" />,
      text: 'CodeChef',
      link: `https://www.codechef.com/users/${social.codechef}`,
      color: 'bg-neutral-focus',
    },
    {
      icon: <SiX className="w-5 h-5" />,
      text: 'X / Twitter',
      link: `https://x.com/${social.x}`,
      color: 'bg-black',
    },
    {
      icon: <AiFillInstagram className="w-5 h-5" />,
      text: 'Instagram',
      link: `https://www.instagram.com/${social.instagram}`,
      color: 'bg-pink-600',
    },
  ];

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">Connect With Me</span>
          </h5>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm ${item.color} text-white border-none flex items-center gap-2 hover:scale-105 transition-transform`}
            >
              {item.icon} {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;

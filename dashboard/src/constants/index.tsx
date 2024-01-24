import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { FaStoreAlt } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { BiAnalyse } from 'react-icons/bi'
import { RiMessage3Fill } from 'react-icons/ri'
import { IoIosSettings } from 'react-icons/io'

export const nav = [
  {
    id: 0,
    icon: <MdOutlineSpaceDashboard/>,
    title: 'Dashboard'
  },
  {
    id: 1,
    icon: <FaStoreAlt />,
    title: 'Shop'
  },
  {
    id: 2,
    icon: <BiAnalyse />,
    title: 'Analytics'
  },
  {
    id: 3,
    icon: <RiMessage3Fill />,
    title: 'Chat'
  },
  {
    id: 4,
    icon: <FaUserGroup />,
    title: 'Users'
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    title: 'Settings'
  }
]
